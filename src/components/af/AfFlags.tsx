import React from "react";

export const FlagGB = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect fill="#012169" width="32" height="24"/>
    <path d="M0,0 L32,24 M32,0 L0,24" stroke="#FFFFFF" strokeWidth="4"/>
    <path d="M0,0 L32,24 M32,0 L0,24" stroke="#C8102E" strokeWidth="2"/>
    <path d="M16,0 V24 M0,12 H32" stroke="#FFFFFF" strokeWidth="6"/>
    <path d="M16,0 V24 M0,12 H32" stroke="#C8102E" strokeWidth="4"/>
  </svg>
);
export const FlagDE = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#000000"/><rect y="8" width="32" height="8" fill="#DD0000"/><rect y="16" width="32" height="8" fill="#FFCC00"/>
  </svg>
);
export const FlagFR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="10.67" height="24" fill="#002395"/><rect x="10.67" width="10.67" height="24" fill="#FFFFFF"/><rect x="21.33" width="10.67" height="24" fill="#ED2939"/>
  </svg>
);
export const FlagES = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#AA151B"/><rect y="6" width="32" height="12" fill="#F1BF00"/>
  </svg>
);
export const FlagIT = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="10.67" height="24" fill="#009246"/><rect x="10.67" width="10.67" height="24" fill="#FFFFFF"/><rect x="21.33" width="10.67" height="24" fill="#CE2B37"/>
  </svg>
);
export const FlagPT = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="12" height="24" fill="#006600"/><rect x="12" width="20" height="24" fill="#FF0000"/><circle cx="12" cy="12" r="5" fill="#FFCC00"/>
  </svg>
);
export const FlagSE = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#006AA7"/><rect x="9" width="4" height="24" fill="#FECC00"/><rect y="10" width="32" height="4" fill="#FECC00"/>
  </svg>
);
export const FlagPL = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="12" fill="#FFFFFF"/><rect y="12" width="32" height="12" fill="#DC143C"/>
  </svg>
);
export const FlagGR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#0D5EAF"/>
    {[0,1,2,3,4,5,6,7,8].map(i => <rect key={i} y={i*2.67} width="32" height="2.67" fill={i%2===0?"#0D5EAF":"#FFFFFF"}/>)}
    <rect width="12" height="12" fill="#0D5EAF"/><rect x="4.5" y="0" width="3" height="12" fill="#FFFFFF"/><rect x="0" y="4.5" width="12" height="3" fill="#FFFFFF"/>
  </svg>
);
export const FlagDK = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#C60C30"/><rect x="9" width="4" height="24" fill="#FFFFFF"/><rect y="10" width="32" height="4" fill="#FFFFFF"/>
  </svg>
);
export const FlagNO = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#BA0C2F"/><rect x="8" width="6" height="24" fill="#FFFFFF"/><rect y="9" width="32" height="6" fill="#FFFFFF"/><rect x="9.5" width="3" height="24" fill="#00205B"/><rect y="10.5" width="32" height="3" fill="#00205B"/>
  </svg>
);
export const FlagRO = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="10.67" height="24" fill="#002B7F"/><rect x="10.67" width="10.67" height="24" fill="#FCD116"/><rect x="21.33" width="10.67" height="24" fill="#CE1126"/>
  </svg>
);
export const FlagBG = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FFFFFF"/><rect y="8" width="32" height="8" fill="#00966E"/><rect y="16" width="32" height="8" fill="#D62612"/>
  </svg>
);
export const FlagFI = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#FFFFFF"/><rect x="9" width="4" height="24" fill="#003580"/><rect y="10" width="32" height="4" fill="#003580"/>
  </svg>
);
export const FlagRU = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FFFFFF"/><rect y="8" width="32" height="8" fill="#0039A6"/><rect y="16" width="32" height="8" fill="#D52B1E"/>
  </svg>
);
export const FlagZH = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#DE2910"/>
    <g fill="#FFDE00"><polygon points="6,4 7.2,7.8 3.2,5.6 8.8,5.6 4.8,7.8"/></g>
  </svg>
);
export const FlagHI = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FF9933"/><rect y="8" width="32" height="8" fill="#FFFFFF"/><rect y="16" width="32" height="8" fill="#138808"/><circle cx="16" cy="12" r="3" fill="#000080"/>
  </svg>
);
export const FlagJA = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#FFFFFF"/><circle cx="16" cy="12" r="7" fill="#BC002D"/>
  </svg>
);
export const FlagAR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#CE1126"/><rect y="8" width="32" height="8" fill="#FFFFFF"/><rect y="16" width="32" height="8" fill="#000000"/><polygon points="0,0 12,12 0,24" fill="#007A3D"/>
  </svg>
);
export const FlagKR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#FFFFFF"/><circle cx="16" cy="12" r="6" fill="#CD2E3A"/><path d="M16,6 A6,6 0 0,1 16,18 A3,3 0 0,0 16,12 A3,3 0 0,1 16,6" fill="#0047A0"/>
  </svg>
);
export const FlagCZ = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="12" fill="#FFFFFF"/><rect y="12" width="32" height="12" fill="#D7141A"/><polygon points="0,0 16,12 0,24" fill="#11457E"/>
  </svg>
);
export const FlagHU = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#CE2939"/><rect y="8" width="32" height="8" fill="#FFFFFF"/><rect y="16" width="32" height="8" fill="#477050"/>
  </svg>
);
export const FlagUA = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="12" fill="#0057B7"/><rect y="12" width="32" height="12" fill="#FFD700"/>
  </svg>
);
export const FlagSK = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FFFFFF"/><rect y="8" width="32" height="8" fill="#0B4EA2"/><rect y="16" width="32" height="8" fill="#EE1C25"/>
  </svg>
);
export const FlagHR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FF0000"/><rect y="8" width="32" height="8" fill="#FFFFFF"/><rect y="16" width="32" height="8" fill="#171796"/>
  </svg>
);
export const FlagRS = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#C6363C"/><rect y="8" width="32" height="8" fill="#0C4076"/><rect y="16" width="32" height="8" fill="#FFFFFF"/>
  </svg>
);
export const FlagSI = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FFFFFF"/><rect y="8" width="32" height="8" fill="#003DA5"/><rect y="16" width="32" height="8" fill="#ED1C24"/>
  </svg>
);
export const FlagNL = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#AE1C28"/><rect y="8" width="32" height="8" fill="#FFFFFF"/><rect y="16" width="32" height="8" fill="#21468B"/>
  </svg>
);
export const FlagTR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#E30A17"/><circle cx="13" cy="12" r="6" fill="#FFFFFF"/><circle cx="14.5" cy="12" r="5" fill="#E30A17"/><polygon points="18,12 20,13.5 19,11.5 21,10.5 18.8,10.5" fill="#FFFFFF"/>
  </svg>
);
export const FlagTH = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="4" fill="#ED1C24"/><rect y="4" width="32" height="4" fill="#FFFFFF"/><rect y="8" width="32" height="8" fill="#241D4F"/><rect y="16" width="32" height="4" fill="#FFFFFF"/><rect y="20" width="32" height="4" fill="#ED1C24"/>
  </svg>
);
export const FlagVN = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#DA251D"/><polygon points="16,5 18,11 24,11 19,14.5 21,20.5 16,17 11,20.5 13,14.5 8,11 14,11" fill="#FFFF00"/>
  </svg>
);
export const FlagID = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="12" fill="#FF0000"/><rect y="12" width="32" height="12" fill="#FFFFFF"/>
  </svg>
);

// New flags
export const FlagEE = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#0072CE"/><rect y="8" width="32" height="8" fill="#000000"/><rect y="16" width="32" height="8" fill="#FFFFFF"/>
  </svg>
);
export const FlagLV = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#9E3039"/><rect y="10" width="32" height="4" fill="#FFFFFF"/>
  </svg>
);
export const FlagLT = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FDB913"/><rect y="8" width="32" height="8" fill="#006A44"/><rect y="16" width="32" height="8" fill="#C1272D"/>
  </svg>
);
export const FlagIS = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#003897"/><rect x="8" width="6" height="24" fill="#FFFFFF"/><rect y="9" width="32" height="6" fill="#FFFFFF"/><rect x="9.5" width="3" height="24" fill="#D72828"/><rect y="10.5" width="32" height="3" fill="#D72828"/>
  </svg>
);
export const FlagAL = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#E41E20"/><g fill="#000000" transform="translate(16,12) scale(0.4)"><polygon points="0,-20 5,-8 18,-12 8,-2 14,10 0,4 -14,10 -8,-2 -18,-12 -5,-8"/></g>
  </svg>
);
export const FlagMK = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#D20000"/><circle cx="16" cy="12" r="5" fill="#FFE600"/><line x1="0" y1="0" x2="32" y2="24" stroke="#FFE600" strokeWidth="2"/><line x1="32" y1="0" x2="0" y2="24" stroke="#FFE600" strokeWidth="2"/><line x1="16" y1="0" x2="16" y2="24" stroke="#FFE600" strokeWidth="2"/><line x1="0" y1="12" x2="32" y2="12" stroke="#FFE600" strokeWidth="2"/>
  </svg>
);
export const FlagBA = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#002395"/><polygon points="8,0 28,0 8,24" fill="#FECB00"/>
    <g fill="#FFFFFF">{[0,1,2,3,4,5].map(i => <polygon key={i} points={`${10+i*3},${2+i*3.2} ${11+i*3},${4+i*3.2} ${9+i*3},${4+i*3.2}`}/>)}</g>
  </svg>
);
export const FlagLU = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#ED2939"/><rect y="8" width="32" height="8" fill="#FFFFFF"/><rect y="16" width="32" height="8" fill="#00A1DE"/>
  </svg>
);
export const FlagBN_BD = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#006A4E"/><circle cx="14" cy="12" r="6" fill="#F42A41"/>
  </svg>
);
export const FlagMS = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#010066"/><rect y="4" width="32" height="4" fill="#FFFFFF"/><rect y="8" width="32" height="8" fill="#CC0000"/><rect y="16" width="32" height="4" fill="#FFFFFF"/>
    <rect width="16" height="12" fill="#010066"/><polygon points="8,2 9,5 12,5 9.5,7 10.5,10 8,8 5.5,10 6.5,7 4,5 7,5" fill="#FFE000"/>
  </svg>
);

export const flagComponents: Record<string, React.FC> = {
  en: FlagGB, de: FlagDE, fr: FlagFR, es: FlagES, it: FlagIT, pt: FlagPT,
  sv: FlagSE, pl: FlagPL, el: FlagGR, da: FlagDK, no: FlagNO, ro: FlagRO,
  bg: FlagBG, fi: FlagFI, ru: FlagRU, "zh-CN": FlagZH, hi: FlagHI, ja: FlagJA,
  ar: FlagAR, ko: FlagKR, cs: FlagCZ, hu: FlagHU, uk: FlagUA, sk: FlagSK,
  hr: FlagHR, sr: FlagRS, sl: FlagSI, nl: FlagNL, tr: FlagTR, th: FlagTH,
  vi: FlagVN, id: FlagID,
  et: FlagEE, lv: FlagLV, lt: FlagLT, is: FlagIS, sq: FlagAL, mk: FlagMK,
  bs: FlagBA, lb: FlagLU, bn: FlagBN_BD, ms: FlagMS,
};
