import { useEffect, useState } from "react";
import { Facebook, Linkedin, MessageCircle, Share2, X as CloseIcon } from "lucide-react";

/**
 * Floating right-side share bar.
 * Uses official share endpoints — opens in a new tab.
 * Icons styled with brand-tinted hover states using design tokens for base colors.
 */
const SHARE_TARGETS = [
  {
    name: "Facebook",
    color: "#1877F2",
    href: (u: string, t: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(u)}&quote=${encodeURIComponent(t)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z" />
      </svg>
    ),
  },
  {
    name: "X",
    color: "#000000",
    href: (u: string, t: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(u)}&text=${encodeURIComponent(t)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.81l-5.33-6.97L4.7 22H1.44l8.04-9.18L1 2h6.91l4.81 6.36L18.244 2zm-1.19 18h1.83L7.04 4H5.1l11.954 16z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    color: "#0A66C2",
    href: (u: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(u)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    color: "#25D366",
    href: (u: string, t: string) =>
      `https://api.whatsapp.com/send?text=${encodeURIComponent(`${t} ${u}`)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.52 3.48A11.78 11.78 0 0012.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.8 11.8 0 005.64 1.44h.01c6.54 0 11.84-5.3 11.84-11.84a11.78 11.78 0 00-3.37-8.44zM12.05 21.8h-.01a9.94 9.94 0 01-5.07-1.39l-.36-.21-3.8 1 1.02-3.7-.24-.38a9.93 9.93 0 01-1.52-5.28C2.07 6.4 6.54 1.93 12.06 1.93c2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 012.91 7.02c0 5.52-4.49 9.94-9.93 9.94zm5.45-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.6.13-.13.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01a1.1 1.1 0 00-.8.37c-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.12 4.52.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    color: "#E60023",
    href: (u: string, t: string) =>
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(u)}&description=${encodeURIComponent(t)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12.04 0C5.4 0 0 5.4 0 12.04c0 5.1 3.16 9.45 7.62 11.22-.1-.95-.2-2.42.04-3.46.22-.94 1.4-5.96 1.4-5.96s-.36-.72-.36-1.78c0-1.67.97-2.92 2.18-2.92 1.03 0 1.52.77 1.52 1.7 0 1.04-.66 2.6-1 4.04-.28 1.21.6 2.2 1.8 2.2 2.16 0 3.82-2.28 3.82-5.57 0-2.91-2.09-4.95-5.07-4.95-3.46 0-5.49 2.6-5.49 5.28 0 1.05.4 2.17.91 2.78.1.12.11.23.08.35l-.33 1.34c-.05.22-.17.27-.4.16-1.5-.7-2.43-2.88-2.43-4.64 0-3.78 2.74-7.25 7.91-7.25 4.15 0 7.38 2.96 7.38 6.92 0 4.13-2.6 7.45-6.21 7.45-1.21 0-2.36-.63-2.75-1.38l-.75 2.85c-.27 1.04-1 2.34-1.49 3.13a12 12 0 0023.06-4.81C24.04 5.4 18.66 0 12.04 0z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    color: "#E4405F",
    // Instagram has no web share endpoint — we copy the URL to the clipboard.
    href: () => "",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.06 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.35 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.35-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.35-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.06-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.35 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0-2.16C8.74 0 8.33.01 7.05.07 5.78.13 4.9.32 4.14.61a5.86 5.86 0 00-2.13 1.39A5.86 5.86 0 00.61 4.13C.32 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.25 2.15.54 2.91.31.8.72 1.48 1.39 2.14.66.66 1.34 1.08 2.14 1.39.76.29 1.64.48 2.91.54C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.25 2.91-.54a5.86 5.86 0 002.14-1.39 5.86 5.86 0 001.39-2.14c.29-.76.48-1.64.54-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.25-2.15-.54-2.91a5.86 5.86 0 00-1.39-2.13A5.86 5.86 0 0019.86.61C19.1.32 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.4-11.85a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z" />
      </svg>
    ),
  },
];

const FloatingShareBar = () => {
  const [open, setOpen] = useState(true);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
    setTitle(document.title || "");
  }, []);

  const handleClick = async (name: string, hrefBuilder: (u: string, t: string) => string) => {
    if (name === "Instagram") {
      try {
        await navigator.clipboard.writeText(url);
        // eslint-disable-next-line no-alert
        alert("Link gekopieerd — plak hem in je Instagram bio of story.");
      } catch {
        // eslint-disable-next-line no-alert
        alert(url);
      }
      return;
    }
    const href = hrefBuilder(url, title);
    if (href) window.open(href, "_blank", "noopener,noreferrer,width=600,height=600");
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        aria-label="Open deelbalk"
        className="fixed right-3 top-1/2 -translate-y-1/2 z-40 h-11 w-11 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        <Share2 className="h-5 w-5" />
      </button>
    );
  }

  return (
    <aside
      aria-label="Deel deze pagina"
      className="fixed right-3 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2 rounded-full bg-background/90 backdrop-blur border border-border p-2 shadow-xl"
    >
      <button
        onClick={() => setOpen(false)}
        aria-label="Verberg deelbalk"
        className="h-7 w-7 rounded-full text-muted-foreground hover:bg-muted flex items-center justify-center"
      >
        <CloseIcon className="h-3.5 w-3.5" />
      </button>
      {SHARE_TARGETS.map((s) => {
        const href = s.name === "Instagram" ? "#" : s.href(url, title);
        const commonClass =
          "group h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center shadow-sm hover:scale-110 hover:shadow-md transition-all duration-200 hover:text-white";
        if (s.name === "Instagram") {
          return (
            <button
              key={s.name}
              onClick={() => handleClick(s.name, s.href)}
              aria-label={`Deel op ${s.name}`}
              title={`Deel op ${s.name} (link kopiëren)`}
              style={{ color: s.color }}
              className={commonClass}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = s.color)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
            >
              {s.icon}
            </button>
          );
        }
        return (
          <a
            key={s.name}
            href={href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={`Deel op ${s.name}`}
            title={`Deel op ${s.name}`}
            style={{ color: s.color }}
            className={commonClass}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = s.color)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
          >
            {s.icon}
          </a>
        );
      })}
    </aside>
  );
};

export default FloatingShareBar;
