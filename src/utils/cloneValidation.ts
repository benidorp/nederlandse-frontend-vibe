/**
 * Post-clone validation & auto-fix utility.
 * Compares source HTML with cloned HTML to detect missing elements,
 * then auto-fixes by injecting missing critical elements from the source.
 */

interface ElementCount {
  links: number;
  images: number;
  buttons: number;
  stripeButtons: number;
  altTexts: number;
  iframes: number;
  forms: number;
  svgs: number;
  inputs: number;
  videos: number;
}

interface ValidationIssue {
  type: keyof ElementCount;
  expected: number;
  actual: number;
  severity: "critical" | "warning";
}

interface ValidationReport {
  valid: boolean;
  issues: ValidationIssue[];
  autoFixed: string[];
  sourceStats: ElementCount;
  cloneStats: ElementCount;
}

function parseHTML(html: string): Document {
  const parser = new DOMParser();
  return parser.parseFromString(html, "text/html");
}

function countElements(doc: Document): ElementCount {
  return {
    links: doc.querySelectorAll("a[href]").length,
    images: doc.querySelectorAll("img").length,
    buttons: doc.querySelectorAll("button").length,
    stripeButtons: doc.querySelectorAll("stripe-buy-button, [class*='stripe'], [data-stripe]").length,
    altTexts: doc.querySelectorAll("img[alt]:not([alt=''])").length,
    iframes: doc.querySelectorAll("iframe").length,
    forms: doc.querySelectorAll("form").length,
    svgs: doc.querySelectorAll("svg").length,
    inputs: doc.querySelectorAll("input, textarea, select").length,
    videos: doc.querySelectorAll("video, source[type*='video']").length,
  };
}

/**
 * Auto-fix: inject missing critical elements from source into clone.
 * Strategy: find elements in source that are missing in clone, append them
 * at the same structural location (parent selector match).
 */
function autoFixMissingElements(sourceHtml: string, cloneHtml: string): { fixedHtml: string; fixes: string[] } {
  const sourceDoc = parseHTML(sourceHtml);
  const cloneDoc = parseHTML(cloneHtml);
  const fixes: string[] = [];

  // Fix missing Stripe buttons
  const sourceStripe = sourceDoc.querySelectorAll("stripe-buy-button");
  const cloneStripe = cloneDoc.querySelectorAll("stripe-buy-button");
  if (sourceStripe.length > cloneStripe.length) {
    sourceStripe.forEach((el) => {
      // Check if this specific button ID exists in clone
      const buyBtnId = el.getAttribute("buy-button-id");
      if (buyBtnId && !cloneDoc.querySelector(`stripe-buy-button[buy-button-id="${buyBtnId}"]`)) {
        // Find parent in clone by matching nearby text or structure
        const parent = el.parentElement;
        const parentTag = parent?.tagName?.toLowerCase() || "div";
        const parentClass = parent?.className || "";
        const targetParent = cloneDoc.querySelector(`${parentTag}.${parentClass.split(" ").filter(Boolean).join(".")}`) 
          || cloneDoc.querySelector(parentTag) 
          || cloneDoc.body;
        if (targetParent) {
          targetParent.appendChild(el.cloneNode(true));
          fixes.push(`🔧 Stripe button (${buyBtnId}) hersteld`);
        }
      }
    });
  }

  // Fix missing images (check by src)
  const sourceImgs = sourceDoc.querySelectorAll("img");
  const cloneImgs = cloneDoc.querySelectorAll("img");
  const cloneSrcs = new Set(Array.from(cloneImgs).map((img) => img.getAttribute("src")));
  sourceImgs.forEach((img) => {
    const src = img.getAttribute("src");
    if (src && !cloneSrcs.has(src)) {
      // Try to find the parent section in clone
      const parentSection = img.closest("section, div[class]");
      if (parentSection) {
        const sectionClass = parentSection.className;
        const targetSection = cloneDoc.querySelector(`section.${sectionClass.split(" ").filter(Boolean)[0]}`)
          || cloneDoc.querySelector(`div.${sectionClass.split(" ").filter(Boolean)[0]}`);
        if (targetSection) {
          targetSection.appendChild(img.cloneNode(true));
          fixes.push(`🔧 Afbeelding hersteld: ${src.substring(0, 50)}…`);
        }
      }
    }
  });

  // Fix missing alt texts — add from source where possible
  const cloneImgsAll = cloneDoc.querySelectorAll("img");
  cloneImgsAll.forEach((cloneImg) => {
    const src = cloneImg.getAttribute("src");
    if (src && (!cloneImg.getAttribute("alt") || cloneImg.getAttribute("alt") === "")) {
      const sourceImg = sourceDoc.querySelector(`img[src="${src}"]`);
      if (sourceImg?.getAttribute("alt")) {
        cloneImg.setAttribute("alt", sourceImg.getAttribute("alt")!);
        fixes.push(`🔧 Alt-tekst hersteld voor: ${src.substring(0, 40)}…`);
      }
    }
  });

  // Fix missing links (check by href) — only add truly missing ones
  const sourceLinks = sourceDoc.querySelectorAll("a[href]");
  const cloneHrefs = new Set(Array.from(cloneDoc.querySelectorAll("a[href]")).map((a) => a.getAttribute("href")));
  let missingLinkCount = 0;
  sourceLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && !cloneHrefs.has(href) && !href.startsWith("#") && !href.startsWith("javascript")) {
      missingLinkCount++;
    }
  });
  if (missingLinkCount > 0) {
    fixes.push(`⚠️ ${missingLinkCount} links ontbreken (kunnen context-afhankelijk zijn)`);
  }

  const fixedHtml = cloneDoc.body.innerHTML;
  return { fixedHtml, fixes };
}

/**
 * Validate cloned HTML against source and auto-fix issues.
 */
export function validateAndFixClone(sourceHtml: string, cloneHtml: string): ValidationReport & { fixedHtml: string } {
  const sourceDoc = parseHTML(sourceHtml);
  const cloneDoc = parseHTML(cloneHtml);

  const sourceStats = countElements(sourceDoc);
  const cloneStats = countElements(cloneDoc);

  const issues: ValidationIssue[] = [];

  // Critical checks
  const criticalKeys: (keyof ElementCount)[] = ["stripeButtons", "iframes", "forms"];
  criticalKeys.forEach((key) => {
    if (sourceStats[key] > 0 && cloneStats[key] < sourceStats[key]) {
      issues.push({ type: key, expected: sourceStats[key], actual: cloneStats[key], severity: "critical" });
    }
  });

  // Warning checks
  const warningKeys: (keyof ElementCount)[] = ["links", "images", "buttons", "altTexts", "svgs", "inputs", "videos"];
  warningKeys.forEach((key) => {
    if (sourceStats[key] > 0 && cloneStats[key] < sourceStats[key]) {
      issues.push({ type: key, expected: sourceStats[key], actual: cloneStats[key], severity: "warning" });
    }
  });

  // Auto-fix
  const { fixedHtml, fixes } = autoFixMissingElements(sourceHtml, cloneHtml);

  return {
    valid: issues.filter((i) => i.severity === "critical").length === 0,
    issues,
    autoFixed: fixes,
    sourceStats,
    cloneStats,
    fixedHtml: issues.length > 0 ? fixedHtml : cloneHtml,
  };
}

/**
 * Generate a human-readable validation report.
 */
export function formatValidationReport(report: ValidationReport & { fixedHtml: string }): string {
  const lines: string[] = [];
  
  lines.push(report.valid ? "✅ Validatie geslaagd" : "⚠️ Validatie: problemen gevonden");
  lines.push("");
  lines.push(`📊 Bron: ${report.sourceStats.links} links, ${report.sourceStats.images} imgs, ${report.sourceStats.buttons} btns, ${report.sourceStats.stripeButtons} Stripe, ${report.sourceStats.altTexts} alts`);
  lines.push(`📊 Kloon: ${report.cloneStats.links} links, ${report.cloneStats.images} imgs, ${report.cloneStats.buttons} btns, ${report.cloneStats.stripeButtons} Stripe, ${report.cloneStats.altTexts} alts`);

  if (report.issues.length > 0) {
    lines.push("");
    lines.push("Problemen:");
    report.issues.forEach((issue) => {
      const icon = issue.severity === "critical" ? "🔴" : "🟡";
      lines.push(`  ${icon} ${issue.type}: verwacht ${issue.expected}, gevonden ${issue.actual}`);
    });
  }

  if (report.autoFixed.length > 0) {
    lines.push("");
    lines.push("Auto-fixes toegepast:");
    report.autoFixed.forEach((fix) => lines.push(`  ${fix}`));
  }

  return lines.join("\n");
}
