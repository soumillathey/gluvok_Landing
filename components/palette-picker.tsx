"use client";

import * as React from "react";
import {
  Check,
  Copy,
  CheckCheck,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Sparkles,
  Search,
  Sun,
  Moon,
} from "lucide-react";

export type PaletteCategory =
  | "mineral"
  | "rare"
  | "japan"
  | "italy"
  | "france"
  | "nordic"
  | "india"
  | "britain"
  | "all";

export type CanvasMode = "light" | "void";
export type ButtonStyleMode = "chromatic" | "stealth";

export interface IdentityPalette {
  id: string;
  name: string;
  category: "mineral" | "rare" | "japan" | "italy" | "france" | "nordic" | "india" | "britain";
  categoryLabel: string;
  tone: string;
  accent: string;
  accentText?: string;
  // Light Canvas Tokens
  lightCanvas: string;
  lightCard: string;
  lightText: string;
  lightTextMuted: string;
  lightWash: string;
  lightBorder: string;
  // Void Canvas Tokens
  voidCanvas: string;
  voidCard: string;
  voidText: string;
  voidTextMuted: string;
  voidWash: string;
  voidBorder: string;
  hover: string;
}

export const RADICAL_IDENTITIES: IdentityPalette[] = [
  // ── 1. Mineral & Fig Collection (The User's Signature Favorites) ─────────
  {
    id: "heather-bookcloth",
    name: "Heather Bookcloth",
    category: "mineral",
    categoryLabel: "Mineral & Fig",
    tone: "Misty lavender-grey library spine, archival cloth binding on warm paper",
    accent: "#6D667C",
    accentText: "#FFFFFF",
    lightCanvas: "#F7F5FA",
    lightCard: "#FFFFFF",
    lightText: "#1A1722",
    lightTextMuted: "#6B6678",
    lightWash: "#F3F1F6",
    lightBorder: "#DAD5E4",
    voidCanvas: "#110F17",
    voidCard: "#1B1724",
    voidText: "#F6F4FB",
    voidTextMuted: "#9690A6",
    voidWash: "#241D31",
    voidBorder: "#3E3452",
    hover: "#575164",
  },
  {
    id: "archival-mulberry",
    name: "Archival Mulberry Wax",
    category: "mineral",
    categoryLabel: "Mineral & Fig",
    tone: "Victorian letter sealing wax on heavy deckled cotton stationery",
    accent: "#7F4958",
    accentText: "#FFFFFF",
    lightCanvas: "#FAF6F8",
    lightCard: "#FFFFFF",
    lightText: "#221117",
    lightTextMuted: "#79626A",
    lightWash: "#F7EFF2",
    lightBorder: "#EAD0D9",
    voidCanvas: "#140B0F",
    voidCard: "#1F1218",
    voidText: "#FAF4F7",
    voidTextMuted: "#9F8690",
    voidWash: "#2E1520",
    voidBorder: "#4F2637",
    hover: "#673744",
  },
  {
    id: "pressed-fig",
    name: "Pressed Fig & Elderberry",
    category: "mineral",
    categoryLabel: "Mineral & Fig",
    tone: "Muted elderberry and dried fig ink, antique botanical print",
    accent: "#94546B",
    accentText: "#FFFFFF",
    lightCanvas: "#FAF5F8",
    lightCard: "#FFFFFF",
    lightText: "#241019",
    lightTextMuted: "#7A5F6A",
    lightWash: "#F8F0F3",
    lightBorder: "#EDD3DC",
    voidCanvas: "#150B10",
    voidCard: "#22111A",
    voidText: "#FAF4F7",
    voidTextMuted: "#A38693",
    voidWash: "#321323",
    voidBorder: "#56233E",
    hover: "#7B4255",
  },
  {
    id: "antique-damson",
    name: "Antique Damson Plum",
    category: "mineral",
    categoryLabel: "Mineral & Fig",
    tone: "Aristocratic English damson plum with velvety slate-violet undertones",
    accent: "#864B62",
    accentText: "#FFFFFF",
    lightCanvas: "#FAF5F7",
    lightCard: "#FFFFFF",
    lightText: "#200E16",
    lightTextMuted: "#7A5F6B",
    lightWash: "#F8F0F3",
    lightBorder: "#E8D0D9",
    voidCanvas: "#140A0F",
    voidCard: "#201119",
    voidText: "#FAF4F7",
    voidTextMuted: "#A18592",
    voidWash: "#2F1522",
    voidBorder: "#52253C",
    hover: "#6D3B4E",
  },
  {
    id: "smoky-cassis",
    name: "Smoky Cassis & Violet Ash",
    category: "mineral",
    categoryLabel: "Mineral & Fig",
    tone: "Desaturated French blackcurrant liqueur mixed with cool volcanic ash",
    accent: "#5F546B",
    accentText: "#FFFFFF",
    lightCanvas: "#F6F5F9",
    lightCard: "#FFFFFF",
    lightText: "#16131D",
    lightTextMuted: "#686174",
    lightWash: "#F2EFF5",
    lightBorder: "#D7D0E0",
    voidCanvas: "#0E0C13",
    voidCard: "#17141F",
    voidText: "#F5F3F8",
    voidTextMuted: "#8E869B",
    voidWash: "#201B2B",
    voidBorder: "#382F4A",
    hover: "#4B4157",
  },
  {
    id: "wild-blackberry",
    name: "Wild Blackberry Bramble",
    category: "mineral",
    categoryLabel: "Mineral & Fig",
    tone: "Dark woodland marionberry bramble, earthy warm-plum manuscript ink",
    accent: "#7A3D54",
    accentText: "#FFFFFF",
    lightCanvas: "#FAF5F7",
    lightCard: "#FFFFFF",
    lightText: "#200D15",
    lightTextMuted: "#785865",
    lightWash: "#F6EEF1",
    lightBorder: "#E4CAD2",
    voidCanvas: "#130A0E",
    voidCard: "#1E1017",
    voidText: "#FAF4F6",
    voidTextMuted: "#9E7F8E",
    voidWash: "#2C121D",
    voidBorder: "#4D2133",
    hover: "#632E42",
  },

  // ── 2. True Rare Pigments (Antiquity & Chemical Wonders) ───────────
  {
    id: "tyrian-purple",
    name: "Tyrian Imperial Purple",
    category: "rare",
    categoryLabel: "True Rare Pigment",
    tone: "Antiquity's most costly dye, extracted from predatory sea snails for Roman emperors",
    accent: "#5E1938",
    accentText: "#FFFFFF",
    lightCanvas: "#FAF4F6",
    lightCard: "#FFFFFF",
    lightText: "#220814",
    lightTextMuted: "#7A5063",
    lightWash: "#F8EDF1",
    lightBorder: "#E8CBD4",
    voidCanvas: "#13060C",
    voidCard: "#1E0C15",
    voidText: "#FAF3F6",
    voidTextMuted: "#A37A8E",
    voidWash: "#290F1C",
    voidBorder: "#4A1B34",
    hover: "#4C122C",
  },
  {
    id: "lapis-ultramarine",
    name: "Afghan Lapis Ultramarine",
    category: "rare",
    categoryLabel: "True Rare Pigment",
    tone: "Ancient Sar-e-Sang mountain lazurite, more precious than gold in Renaissance Italy",
    accent: "#1F3A70",
    accentText: "#FFFFFF",
    lightCanvas: "#F4F7FB",
    lightCard: "#FFFFFF",
    lightText: "#0D1830",
    lightTextMuted: "#556A92",
    lightWash: "#EDF3FA",
    lightBorder: "#CAD7ED",
    voidCanvas: "#0A101C",
    voidCard: "#111B30",
    voidText: "#F0F4FA",
    voidTextMuted: "#7E96BF",
    voidWash: "#162544",
    voidBorder: "#263E6E",
    hover: "#172E5C",
  },
  {
    id: "dragons-blood",
    name: "Dragon's Blood Socotra",
    category: "rare",
    categoryLabel: "True Rare Pigment",
    tone: "Wept cinnabar tree resin from the isolated cliffs of Socotra Island in the Arabian Sea",
    accent: "#8A272C",
    accentText: "#FFFFFF",
    lightCanvas: "#FAF5F5",
    lightCard: "#FFFFFF",
    lightText: "#26080A",
    lightTextMuted: "#7A4E50",
    lightWash: "#F8ECEE",
    lightBorder: "#EAC7CB",
    voidCanvas: "#130607",
    voidCard: "#1E0B0D",
    voidText: "#FAF3F4",
    voidTextMuted: "#A47477",
    voidWash: "#2A0E11",
    voidBorder: "#4E1A20",
    hover: "#701D21",
  },
  {
    id: "maya-blue",
    name: "Maya Blue Complex",
    category: "rare",
    categoryLabel: "True Rare Pigment",
    tone: "Centuries-unfaded organo-clay nano-matrix from ancient Mesoamerican sacred cenotes",
    accent: "#346B78",
    accentText: "#FFFFFF",
    lightCanvas: "#F4F8F9",
    lightCard: "#FFFFFF",
    lightText: "#0F2328",
    lightTextMuted: "#546E75",
    lightWash: "#EDF5F7",
    lightBorder: "#C8DDE2",
    voidCanvas: "#0A1214",
    voidCard: "#111E22",
    voidText: "#F1F8FA",
    voidTextMuted: "#789AA2",
    voidWash: "#162B30",
    voidBorder: "#264852",
    hover: "#285661",
  },
  {
    id: "han-purple",
    name: "Han Imperial Purple",
    category: "rare",
    categoryLabel: "True Rare Pigment",
    tone: "Qin-Han dynasty terracotta warriors pigment exhibiting quantum magnetic physics",
    accent: "#543864",
    accentText: "#FFFFFF",
    lightCanvas: "#F7F4F9",
    lightCard: "#FFFFFF",
    lightText: "#1C1123",
    lightTextMuted: "#6C5977",
    lightWash: "#F4EEF7",
    lightBorder: "#DECDE4",
    voidCanvas: "#110B16",
    voidCard: "#1A1121",
    voidText: "#F7F2FA",
    voidTextMuted: "#957FA3",
    voidWash: "#241730",
    voidBorder: "#3E2652",
    hover: "#432C50",
  },
  {
    id: "yinmn-blue",
    name: "YInMn Inorganic Blue",
    category: "rare",
    categoryLabel: "True Rare Pigment",
    tone: "The first new inorganic blue pigment discovered in 200 years, brilliantly heat-stable",
    accent: "#244799",
    accentText: "#FFFFFF",
    lightCanvas: "#F4F7FB",
    lightCard: "#FFFFFF",
    lightText: "#0E1C3D",
    lightTextMuted: "#566E9C",
    lightWash: "#EDF2FB",
    lightBorder: "#CAD7F2",
    voidCanvas: "#0A1120",
    voidCard: "#101D38",
    voidText: "#F0F4FC",
    voidTextMuted: "#7992BF",
    voidWash: "#16274D",
    voidBorder: "#274382",
    hover: "#1B377A",
  },
  {
    id: "caput-mortuum",
    name: "Caput Mortuum & Bitumen",
    category: "rare",
    categoryLabel: "True Rare Pigment",
    tone: "Victorian archival warm amber glaze, deep oxidized iron violet-earth pigment",
    accent: "#5C3C2D",
    accentText: "#FFFFFF",
    lightCanvas: "#FAF6F4",
    lightCard: "#FFFFFF",
    lightText: "#21140E",
    lightTextMuted: "#765C50",
    lightWash: "#F7EFEA",
    lightBorder: "#E6D4CB",
    voidCanvas: "#130C08",
    voidCard: "#1E140E",
    voidText: "#FAF4F0",
    voidTextMuted: "#9E8274",
    voidWash: "#291B13",
    voidBorder: "#473023",
    hover: "#482D21",
  },
  {
    id: "orpiment-gold",
    name: "Orpiment King's Gold",
    category: "rare",
    categoryLabel: "True Rare Pigment",
    tone: "Crystalline arsenic trisulfide minerals from imperial manuscript illuminations",
    accent: "#B88B2A",
    accentText: "#FFFFFF",
    lightCanvas: "#FAF7F2",
    lightCard: "#FFFFFF",
    lightText: "#2C2007",
    lightTextMuted: "#7D6B42",
    lightWash: "#FAF4E7",
    lightBorder: "#ECDEC0",
    voidCanvas: "#141007",
    voidCard: "#211B0C",
    voidText: "#FAF7F0",
    voidTextMuted: "#B09C71",
    voidWash: "#2E240F",
    voidBorder: "#52411B",
    hover: "#997321",
  },

  // ── 3. Nippon Traditional Collection (Inspired by Japan) ───────────
  {
    id: "aizome-indigo",
    name: "Aizome Indigo (勝色)",
    category: "japan",
    categoryLabel: "Japan Heritage",
    tone: "Samurai victory indigo, fermented dye vats on crisp unbleached Echizen washi",
    accent: "#223A5E",
    accentText: "#FFFFFF",
    lightCanvas: "#F5F8FA",
    lightCard: "#FFFFFF",
    lightText: "#0F1A2B",
    lightTextMuted: "#5B6D85",
    lightWash: "#EEF3F8",
    lightBorder: "#CCD8E6",
    voidCanvas: "#0B1017",
    voidCard: "#121A26",
    voidText: "#F2F6FA",
    voidTextMuted: "#8295AD",
    voidWash: "#172333",
    voidBorder: "#2E4360",
    hover: "#182B46",
  },
  {
    id: "rikyu-matcha",
    name: "Rikyū Matcha & Tea Moss (利休茶)",
    category: "japan",
    categoryLabel: "Japan Heritage",
    tone: "Wabi-sabi roasted green tea leaves and moss stone in a Kyoto tea garden",
    accent: "#66684F",
    accentText: "#FFFFFF",
    lightCanvas: "#F8F8F5",
    lightCard: "#FFFFFF",
    lightText: "#24261B",
    lightTextMuted: "#6E715B",
    lightWash: "#F3F4EE",
    lightBorder: "#D8DBC8",
    voidCanvas: "#11120D",
    voidCard: "#1C1D15",
    voidText: "#FAF9F5",
    voidTextMuted: "#9B9E87",
    voidWash: "#27281D",
    voidBorder: "#474936",
    hover: "#52543D",
  },
  {
    id: "bengara-ochre",
    name: "Bengara Ochre & Torii (弁柄)",
    category: "japan",
    categoryLabel: "Japan Heritage",
    tone: "Weathered vermilion timber torii gates and iron oxide terracotta lacquer",
    accent: "#9C4133",
    accentText: "#FFFFFF",
    lightCanvas: "#FAF5F4",
    lightCard: "#FFFFFF",
    lightText: "#2B110D",
    lightTextMuted: "#825852",
    lightWash: "#F9F0EE",
    lightBorder: "#EDCECA",
    voidCanvas: "#150B0A",
    voidCard: "#221210",
    voidText: "#FAF4F3",
    voidTextMuted: "#AD8680",
    voidWash: "#301815",
    voidBorder: "#562923",
    hover: "#7F3327",
  },
  {
    id: "hai-sakura",
    name: "Hai-sakura Ash Blossom (灰桜)",
    category: "japan",
    categoryLabel: "Japan Heritage",
    tone: "Edo-period cherry blossom shrouded in dawn mist and cool temple incense ash",
    accent: "#947382",
    accentText: "#FFFFFF",
    lightCanvas: "#FAF6F8",
    lightCard: "#FFFFFF",
    lightText: "#291B22",
    lightTextMuted: "#78636E",
    lightWash: "#F7F1F4",
    lightBorder: "#E5D3DC",
    voidCanvas: "#130E12",
    voidCard: "#1F161C",
    voidText: "#FAF5F8",
    voidTextMuted: "#A48D99",
    voidWash: "#2C1F28",
    voidBorder: "#4C3744",
    hover: "#795C6A",
  },
  {
    id: "kuro-sumi",
    name: "Kuro-sumi Calligraphy Ink (黒墨)",
    category: "japan",
    categoryLabel: "Japan Heritage",
    tone: "Pine-soot inkstone wash, minimal monochrome calligraphy on mulberry silk paper",
    accent: "#3D3B40",
    accentText: "#FFFFFF",
    lightCanvas: "#F7F7F6",
    lightCard: "#FFFFFF",
    lightText: "#141316",
    lightTextMuted: "#5E5C63",
    lightWash: "#F3F3F2",
    lightBorder: "#D7D6D5",
    voidCanvas: "#0B0A0C",
    voidCard: "#141317",
    voidText: "#F6F6F8",
    voidTextMuted: "#8C8A94",
    voidWash: "#1D1C22",
    voidBorder: "#35343D",
    hover: "#28272B",
  },
  {
    id: "kogane-washi",
    name: "Kogane & Raw Silk Washi (黄金・生絹)",
    category: "japan",
    categoryLabel: "Japan Heritage",
    tone: "Weathered gold leaf gilding on vintage sliding screens and raw silk fiber",
    accent: "#A37B32",
    accentText: "#FFFFFF",
    lightCanvas: "#FAF7F2",
    lightCard: "#FFFFFF",
    lightText: "#2B200C",
    lightTextMuted: "#7D6A47",
    lightWash: "#F9F5EC",
    lightBorder: "#EBDDBF",
    voidCanvas: "#141009",
    voidCard: "#21190D",
    voidText: "#FAF7F0",
    voidTextMuted: "#B09A75",
    voidWash: "#2E2312",
    voidBorder: "#523F1C",
    hover: "#856223",
  },
  {
    id: "arashiyama-bamboo",
    name: "Arashiyama Bamboo Grove (青竹)",
    category: "japan",
    categoryLabel: "Japan Heritage",
    tone: "Freshly cut green bamboo stalks and cool morning river mist",
    accent: "#436E58",
    accentText: "#FFFFFF",
    lightCanvas: "#F5F8F6",
    lightCard: "#FFFFFF",
    lightText: "#12221A",
    lightTextMuted: "#567063",
    lightWash: "#EFF5F1",
    lightBorder: "#CDE0D5",
    voidCanvas: "#0B120E",
    voidCard: "#121C16",
    voidText: "#F4F9F6",
    voidTextMuted: "#819E8F",
    voidWash: "#18281F",
    voidBorder: "#2E4C3B",
    hover: "#335745",
  },
  {
    id: "fuji-nezu",
    name: "Fuji-nezu Wisteria Grey (藤鼠)",
    category: "japan",
    categoryLabel: "Japan Heritage",
    tone: "Edo chic wisteria-tinted river stone, dusty purple-grey textile dyeing",
    accent: "#6F667B",
    accentText: "#FFFFFF",
    lightCanvas: "#F7F5FA",
    lightCard: "#FFFFFF",
    lightText: "#1E1926",
    lightTextMuted: "#696174",
    lightWash: "#F4F1F7",
    lightBorder: "#DCD6E5",
    voidCanvas: "#110E16",
    voidCard: "#1A1622",
    voidText: "#F7F4FB",
    voidTextMuted: "#968DA3",
    voidWash: "#241E30",
    voidBorder: "#3F3452",
    hover: "#574F62",
  },

  // ── 4. Italy / Renaissance & Terroir ──────────────────────────────
  {
    id: "venetian-cinabro",
    name: "Venetian Cinabro",
    category: "italy",
    categoryLabel: "Italy Heritage",
    tone: "Renaissance Venetian red mercuric sulfide on hand-laid Fabriano rag paper",
    accent: "#99332D",
    accentText: "#FFFFFF",
    lightCanvas: "#FAF5F4",
    lightCard: "#FFFFFF",
    lightText: "#2C0C09",
    lightTextMuted: "#7D524F",
    lightWash: "#F9EFEB",
    lightBorder: "#EBCFC7",
    voidCanvas: "#140706",
    voidCard: "#200C0A",
    voidText: "#FAF3F2",
    voidTextMuted: "#A87A77",
    voidWash: "#2E110F",
    voidBorder: "#54211D",
    hover: "#802621",
  },
  {
    id: "terra-siena",
    name: "Terra di Siena",
    category: "italy",
    categoryLabel: "Italy Heritage",
    tone: "Uncalcined Tuscan iron-hydrated earth from the hills around Siena",
    accent: "#9C6237",
    accentText: "#FFFFFF",
    lightCanvas: "#FAF6F2",
    lightCard: "#FFFFFF",
    lightText: "#2A180B",
    lightTextMuted: "#7A614D",
    lightWash: "#F9F2EB",
    lightBorder: "#EBDAC8",
    voidCanvas: "#140D07",
    voidCard: "#21150C",
    voidText: "#FAF6F1",
    voidTextMuted: "#A88D77",
    voidWash: "#2E1E11",
    voidBorder: "#523720",
    hover: "#82502A",
  },
  {
    id: "tuscan-cypress",
    name: "Tuscan Cypress Grove",
    category: "italy",
    categoryLabel: "Italy Heritage",
    tone: "Slender cypress avenues and olive terraces of Val d'Orcia in morning light",
    accent: "#3A5440",
    accentText: "#FFFFFF",
    lightCanvas: "#F5F8F6",
    lightCard: "#FFFFFF",
    lightText: "#101D13",
    lightTextMuted: "#576B5A",
    lightWash: "#EFF4F0",
    lightBorder: "#CAD9CD",
    voidCanvas: "#09120B",
    voidCard: "#101D13",
    voidText: "#F1F7F2",
    voidTextMuted: "#7E9983",
    voidWash: "#16281B",
    voidBorder: "#27472F",
    hover: "#2D4232",
  },
  {
    id: "florentine-vellum",
    name: "Florentine Carta Vellum",
    category: "italy",
    categoryLabel: "Italy Heritage",
    tone: "Gold-tooled Florentine goatskin bookbinding on antique eggshell parchment",
    accent: "#856847",
    accentText: "#FFFFFF",
    lightCanvas: "#FAF7F3",
    lightCard: "#FFFFFF",
    lightText: "#251C12",
    lightTextMuted: "#756654",
    lightWash: "#F7F3EC",
    lightBorder: "#E4DACB",
    voidCanvas: "#120E09",
    voidCard: "#1D1710",
    voidText: "#FAF6F0",
    voidTextMuted: "#A3937D",
    voidWash: "#292016",
    voidBorder: "#473827",
    hover: "#6E5538",
  },

  // ── 5. France / Atelier & Terroir ─────────────────────────────────
  {
    id: "sevres-porcelain",
    name: "Sèvres Royal Porcelain",
    category: "france",
    categoryLabel: "France Heritage",
    tone: "Cobalt oxide glaze of 18th-century royal manufacture porcelain in Sèvres",
    accent: "#1E3A6E",
    accentText: "#FFFFFF",
    lightCanvas: "#F4F7FA",
    lightCard: "#FFFFFF",
    lightText: "#0D1932",
    lightTextMuted: "#55698F",
    lightWash: "#EDF3FA",
    lightBorder: "#CAD6EC",
    voidCanvas: "#0A101C",
    voidCard: "#111B30",
    voidText: "#F0F4FA",
    voidTextMuted: "#7E94BD",
    voidWash: "#162544",
    voidBorder: "#263D6C",
    hover: "#162D57",
  },
  {
    id: "roussillon-ochre",
    name: "Roussillon Ochre de Provence",
    category: "france",
    categoryLabel: "France Heritage",
    tone: "Vibrant calcined clay cliffs of Luberon and Provençal terra cotta tile roofs",
    accent: "#A8532E",
    accentText: "#FFFFFF",
    lightCanvas: "#FAF5F2",
    lightCard: "#FFFFFF",
    lightText: "#2E1308",
    lightTextMuted: "#7E5848",
    lightWash: "#FAF1EC",
    lightBorder: "#ECD6CA",
    voidCanvas: "#150B06",
    voidCard: "#22120B",
    voidText: "#FAF4F0",
    voidTextMuted: "#AB8170",
    voidWash: "#30190F",
    voidBorder: "#572B18",
    hover: "#8C4323",
  },
  {
    id: "chartreuse-elixir",
    name: "Chartreuse Elixir Herb",
    category: "france",
    categoryLabel: "France Heritage",
    tone: "Carthusian monastery secret recipe of 130 alpine plants and herbs since 1605",
    accent: "#788A38",
    accentText: "#FFFFFF",
    lightCanvas: "#F7F8F3",
    lightCard: "#FFFFFF",
    lightText: "#1F250C",
    lightTextMuted: "#697346",
    lightWash: "#F5F6EC",
    lightBorder: "#DEE3C6",
    voidCanvas: "#101207",
    voidCard: "#1A1E0D",
    voidText: "#F7F9EE",
    voidTextMuted: "#9DA878",
    voidWash: "#252B13",
    voidBorder: "#414B20",
    hover: "#61702C",
  },
  {
    id: "montmartre-slate",
    name: "Montmartre Zinc & Slate",
    category: "france",
    categoryLabel: "France Heritage",
    tone: "Weathered Parisian zinc mansard rooftops and damp cobblestone alleys",
    accent: "#5C6570",
    accentText: "#FFFFFF",
    lightCanvas: "#F5F6F8",
    lightCard: "#FFFFFF",
    lightText: "#191D22",
    lightTextMuted: "#606873",
    lightWash: "#F2F4F6",
    lightBorder: "#D4D9E0",
    voidCanvas: "#0E1012",
    voidCard: "#161A1D",
    voidText: "#F3F5F7",
    voidTextMuted: "#8A939E",
    voidWash: "#20252A",
    voidBorder: "#384048",
    hover: "#4A525C",
  },

  // ── 6. Nordic / Fjord & Falu ───────────────────────────────────────
  {
    id: "falu-rod",
    name: "Falu Röd Copper Mine",
    category: "nordic",
    categoryLabel: "Nordic Heritage",
    tone: "Traditional Swedish timber cottage red pigment from the historic Falun copper mine",
    accent: "#7C2824",
    accentText: "#FFFFFF",
    lightCanvas: "#FAF5F4",
    lightCard: "#FFFFFF",
    lightText: "#250A08",
    lightTextMuted: "#794E4C",
    lightWash: "#F8EDEC",
    lightBorder: "#E7CAC8",
    voidCanvas: "#130605",
    voidCard: "#1E0B0A",
    voidText: "#FAF3F2",
    voidTextMuted: "#A37674",
    voidWash: "#290E0D",
    voidBorder: "#4C1A17",
    hover: "#631F1C",
  },
  {
    id: "gotland-limestone",
    name: "Gotland Limestone Fossil",
    category: "nordic",
    categoryLabel: "Nordic Heritage",
    tone: "Baltic Sea fossilized coral limestone cliffs and windswept sheep pastures",
    accent: "#696B64",
    accentText: "#FFFFFF",
    lightCanvas: "#F7F7F5",
    lightCard: "#FFFFFF",
    lightText: "#1D1E1B",
    lightTextMuted: "#666761",
    lightWash: "#F4F4F2",
    lightBorder: "#D8D9D5",
    voidCanvas: "#10100F",
    voidCard: "#1A1A18",
    voidText: "#F5F5F4",
    voidTextMuted: "#94968E",
    voidWash: "#242523",
    voidBorder: "#3C3E3A",
    hover: "#53554F",
  },
  {
    id: "stockholm-fjord",
    name: "Stockholm Fjord Mist",
    category: "nordic",
    categoryLabel: "Nordic Heritage",
    tone: "Cold Baltic archipelago waters cutting through pine granite islands in autumn dawn",
    accent: "#2C4656",
    accentText: "#FFFFFF",
    lightCanvas: "#F4F7F9",
    lightCard: "#FFFFFF",
    lightText: "#0D1820",
    lightTextMuted: "#556773",
    lightWash: "#EEF3F6",
    lightBorder: "#C8D7DF",
    voidCanvas: "#091014",
    voidCard: "#101B22",
    voidText: "#F1F6F8",
    voidTextMuted: "#7C92A1",
    voidWash: "#16252E",
    voidBorder: "#243A47",
    hover: "#223744",
  },
  {
    id: "arctic-cloudberry",
    name: "Arctic Cloudberry Amber",
    category: "nordic",
    categoryLabel: "Nordic Heritage",
    tone: "Golden arctic bog amber berries ripening under Scandinavia's midnight sun",
    accent: "#B87228",
    accentText: "#FFFFFF",
    lightCanvas: "#FAF6F2",
    lightCard: "#FFFFFF",
    lightText: "#2D1A06",
    lightTextMuted: "#7F6244",
    lightWash: "#FAF4EB",
    lightBorder: "#ECDEC5",
    voidCanvas: "#140D05",
    voidCard: "#211609",
    voidText: "#FAF5EF",
    voidTextMuted: "#AD9170",
    voidWash: "#2F1E0C",
    voidBorder: "#523616",
    hover: "#995C1E",
  },

  // ── 7. India / Vedic Minerals & Spice ─────────────────────────────
  {
    id: "nil-indigo",
    name: "Nil Indigo Vats",
    category: "india",
    categoryLabel: "India Heritage",
    tone: "Centuries-old Indigofera tinctoria dyeing pits of Rajasthan and Gujarat",
    accent: "#1D3354",
    accentText: "#FFFFFF",
    lightCanvas: "#F4F7FA",
    lightCard: "#FFFFFF",
    lightText: "#0C1625",
    lightTextMuted: "#526278",
    lightWash: "#EDF2F8",
    lightBorder: "#CAD4E4",
    voidCanvas: "#090E16",
    voidCard: "#101724",
    voidText: "#EFF3F9",
    voidTextMuted: "#7A8DA6",
    voidWash: "#152236",
    voidBorder: "#253B5C",
    hover: "#162740",
  },
  {
    id: "jaipur-sandstone",
    name: "Jaipur Pink Sandstone",
    category: "india",
    categoryLabel: "India Heritage",
    tone: "Terracotta-pink sedimentary stone of the Hawa Mahal palace facades in Jaipur",
    accent: "#9C5858",
    accentText: "#FFFFFF",
    lightCanvas: "#FAF5F5",
    lightCard: "#FFFFFF",
    lightText: "#2B1414",
    lightTextMuted: "#7A5757",
    lightWash: "#F9F1F1",
    lightBorder: "#EACFD0",
    voidCanvas: "#140A0B",
    voidCard: "#201112",
    voidText: "#FAF3F3",
    voidTextMuted: "#A88383",
    voidWash: "#2E1819",
    voidBorder: "#542D2E",
    hover: "#824646",
  },
  {
    id: "malabar-teak",
    name: "Malabar Aged Teak & Sandalwood",
    category: "india",
    categoryLabel: "India Heritage",
    tone: "Deep oiled monsoon teakwood carvings and aromatic Mysore sandalwood paste",
    accent: "#784E33",
    accentText: "#FFFFFF",
    lightCanvas: "#FAF6F3",
    lightCard: "#FFFFFF",
    lightText: "#24150B",
    lightTextMuted: "#735B4E",
    lightWash: "#F8F1EB",
    lightBorder: "#E6D3C4",
    voidCanvas: "#130A05",
    voidCard: "#1E1109",
    voidText: "#FAF4EF",
    voidTextMuted: "#A18878",
    voidWash: "#2A180E",
    voidBorder: "#4A2E1C",
    hover: "#613D26",
  },
  {
    id: "kerala-cardamom",
    name: "Kerala Cardamom & Peppercorn",
    category: "india",
    categoryLabel: "India Heritage",
    tone: "Mist-laden Western Ghats mountain spice estates and rainforest moss",
    accent: "#4A5E44",
    accentText: "#FFFFFF",
    lightCanvas: "#F5F8F5",
    lightCard: "#FFFFFF",
    lightText: "#131C11",
    lightTextMuted: "#596955",
    lightWash: "#EFF4EE",
    lightBorder: "#CAD8C8",
    voidCanvas: "#0B110A",
    voidCard: "#121C11",
    voidText: "#F2F7F1",
    voidTextMuted: "#82967E",
    voidWash: "#1A2718",
    voidBorder: "#2E442B",
    hover: "#3B4B36",
  },

  // ── 8. Great Britain / Heritage & Moorland ────────────────────────
  {
    id: "scottish-heather",
    name: "Scottish Heather Tweed",
    category: "britain",
    categoryLabel: "Britain Heritage",
    tone: "Highland moorland blooming wild heather woven into heavy estate tweed",
    accent: "#685265",
    accentText: "#FFFFFF",
    lightCanvas: "#F7F5F7",
    lightCard: "#FFFFFF",
    lightText: "#1E141D",
    lightTextMuted: "#695867",
    lightWash: "#F5F1F5",
    lightBorder: "#DBD0DB",
    voidCanvas: "#110D11",
    voidCard: "#1A141A",
    voidText: "#F7F3F7",
    voidTextMuted: "#968394",
    voidWash: "#251C24",
    voidBorder: "#413240",
    hover: "#534050",
  },
  {
    id: "oxford-leather",
    name: "Oxford Bodleian Leather",
    category: "britain",
    categoryLabel: "Britain Heritage",
    tone: "Archival goat-morocco leather bindings in Duke Humfrey's library stacks",
    accent: "#703338",
    accentText: "#FFFFFF",
    lightCanvas: "#FAF5F5",
    lightCard: "#FFFFFF",
    lightText: "#230C0E",
    lightTextMuted: "#754C4F",
    lightWash: "#F8EEEE",
    lightBorder: "#E6C9CB",
    voidCanvas: "#130607",
    voidCard: "#1E0B0D",
    voidText: "#FAF3F3",
    voidTextMuted: "#A37477",
    voidWash: "#290E11",
    voidBorder: "#4D1D21",
    hover: "#59272C",
  },
  {
    id: "cotswold-stone",
    name: "Cotswold Honey Freestone",
    category: "britain",
    categoryLabel: "Britain Heritage",
    tone: "Weathered oolitic limestone drystone walls bathed in late afternoon sun",
    accent: "#9A7840",
    accentText: "#FFFFFF",
    lightCanvas: "#FAF7F2",
    lightCard: "#FFFFFF",
    lightText: "#271D0C",
    lightTextMuted: "#77674E",
    lightWash: "#F9F5EC",
    lightBorder: "#ECDEC0",
    voidCanvas: "#141007",
    voidCard: "#20190D",
    voidText: "#FAF6EE",
    voidTextMuted: "#A8987C",
    voidWash: "#2B2110",
    voidBorder: "#4D3B1C",
    hover: "#7E6132",
  },
  {
    id: "cornish-slate",
    name: "Cornish Slate Coast",
    category: "britain",
    categoryLabel: "Britain Heritage",
    tone: "Sheer dark Atlantic headlands and quarry stone cottages in Delabole",
    accent: "#465259",
    accentText: "#FFFFFF",
    lightCanvas: "#F5F6F7",
    lightCard: "#FFFFFF",
    lightText: "#14181B",
    lightTextMuted: "#596166",
    lightWash: "#F1F3F5",
    lightBorder: "#D0D7DC",
    voidCanvas: "#0C0E10",
    voidCard: "#131719",
    voidText: "#F3F5F7",
    voidTextMuted: "#848E94",
    voidWash: "#1C2023",
    voidBorder: "#30383C",
    hover: "#364046",
  },
];

const STORAGE_PALETTE_KEY = "gluvok-identity-id";
const STORAGE_CANVAS_MODE_KEY = "gluvok-canvas-mode";
const STORAGE_BTN_MODE_KEY = "gluvok-btn-mode";

export function PalettePicker() {
  const [activeIdentity, setActiveIdentity] = React.useState<IdentityPalette>(() => {
    if (typeof window !== "undefined") {
      try {
        const savedId = localStorage.getItem(STORAGE_PALETTE_KEY);
        if (savedId) {
          const found = RADICAL_IDENTITIES.find((p) => p.id === savedId);
          if (found) return found;
        }
      } catch {
        // ignore
      }
    }
    return RADICAL_IDENTITIES[0];
  });

  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState<PaletteCategory>("mineral");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [copied, setCopied] = React.useState(false);

  const [canvasMode, setCanvasMode] = React.useState<CanvasMode>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(STORAGE_CANVAS_MODE_KEY);
        if (saved === "void" || saved === "light") return saved;
      } catch {
        // ignore
      }
    }
    return "light";
  });

  const [btnMode, setBtnMode] = React.useState<ButtonStyleMode>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(STORAGE_BTN_MODE_KEY);
        if (saved === "chromatic" || saved === "stealth") return saved;
      } catch {
        // ignore
      }
    }
    return "chromatic";
  });

  // Apply CSS Variables to Root Document
  const applyPalette = React.useCallback(
    (palette: IdentityPalette, canvas: CanvasMode, buttonMode: ButtonStyleMode) => {
      if (typeof document === "undefined") return;
      const root = document.documentElement;
      const isVoid = canvas === "void";

      const canvasBg = isVoid ? palette.voidCanvas : palette.lightCanvas;
      const cardBg = isVoid ? palette.voidCard : palette.lightCard;
      const wash = isVoid ? palette.voidWash : palette.lightWash;
      const border = isVoid ? palette.voidBorder : palette.lightBorder;
      const textColor = isVoid ? palette.voidText : palette.lightText;
      const textMuted = isVoid ? palette.voidTextMuted : palette.lightTextMuted;

      // 1. Core Brand & Accent Tokens
      root.style.setProperty("--accent", palette.accent);
      root.style.setProperty("--accent-hover", palette.hover);
      root.style.setProperty("--accent-text", palette.accentText || "#FFFFFF");
      root.style.setProperty("--olive-accent", palette.accent);
      root.style.setProperty("--olive-hover", palette.hover);
      root.style.setProperty("--olive-text", palette.accent);

      // 2. Wash & Tint Surfaces
      root.style.setProperty("--paper-wash", wash);
      root.style.setProperty("--olive-wash", wash);

      // 3. Borders & Dividers
      root.style.setProperty("--paper-border", border);
      root.style.setProperty("--olive-border", border);
      root.style.setProperty("--border-hairline", border);

      // 4. Backgrounds & Surfaces
      root.style.setProperty("--paper-bg", canvasBg);
      root.style.setProperty("--bg-canvas", canvasBg);
      root.style.setProperty("--paper-card", cardBg);
      root.style.setProperty("--surface-card", cardBg);

      // 5. Typography
      root.style.setProperty("--paper-text", textColor);
      root.style.setProperty("--text-primary", textColor);
      root.style.setProperty("--paper-text-muted", textMuted);
      root.style.setProperty("--text-muted", textMuted);

      // 6. Primary Buttons
      const isChromatic = buttonMode === "chromatic";
      const btnBg = isChromatic ? palette.accent : (isVoid ? "#FFFFFF" : "#111111");
      const btnBorder = isChromatic ? palette.accent : (isVoid ? "#FFFFFF" : "#111111");
      const btnText = isChromatic ? (palette.accentText || "#FFFFFF") : (isVoid ? "#111111" : "#FFFFFF");
      const btnHover = isChromatic ? palette.hover : (isVoid ? "#EAEAEA" : "#222222");

      root.style.setProperty("--primary-btn-bg", btnBg);
      root.style.setProperty("--primary-btn-border", btnBorder);
      root.style.setProperty("--primary-btn-text", btnText);
      root.style.setProperty("--primary-btn-hover", btnHover);

      root.style.setProperty("--btn-primary-bg", btnBg);
      root.style.setProperty("--btn-primary-border", btnBorder);
      root.style.setProperty("--btn-primary-text", btnText);
      root.style.setProperty("--btn-primary-hover", btnHover);

      // 7. Directly set body inline styles to guarantee instant visual repaint
      if (document.body) {
        document.body.style.backgroundColor = canvasBg;
        document.body.style.color = textColor;
      }

      // Root canvas theme class
      if (isVoid) {
        root.classList.add("void-canvas");
        root.classList.remove("light-canvas");
      } else {
        root.classList.add("light-canvas");
        root.classList.remove("void-canvas");
      }
    },
    []
  );

  // Initial mount synchronization
  React.useEffect(() => {
    applyPalette(activeIdentity, canvasMode, btnMode);
  }, [activeIdentity, canvasMode, btnMode, applyPalette]);

  const selectIdentity = React.useCallback(
    (palette: IdentityPalette) => {
      setActiveIdentity(palette);
      applyPalette(palette, canvasMode, btnMode);
      try {
        localStorage.setItem(STORAGE_PALETTE_KEY, palette.id);
      } catch {
        // ignore
      }
    },
    [canvasMode, btnMode, applyPalette]
  );

  const toggleCanvasMode = React.useCallback(
    (mode: CanvasMode) => {
      setCanvasMode(mode);
      applyPalette(activeIdentity, mode, btnMode);
      try {
        localStorage.setItem(STORAGE_CANVAS_MODE_KEY, mode);
      } catch {
        // ignore
      }
    },
    [activeIdentity, btnMode, applyPalette]
  );

  const toggleBtnMode = React.useCallback(
    (mode: ButtonStyleMode) => {
      setBtnMode(mode);
      applyPalette(activeIdentity, canvasMode, mode);
      try {
        localStorage.setItem(STORAGE_BTN_MODE_KEY, mode);
      } catch {
        // ignore
      }
    },
    [activeIdentity, canvasMode, applyPalette]
  );

  const copyConfig = React.useCallback(() => {
    const isVoid = canvasMode === "void";
    const cssText = `/* Gluvok Paper Palette: ${activeIdentity.name} (${activeIdentity.categoryLabel}) */\n--accent: ${activeIdentity.accent};\n--paper-wash: ${isVoid ? activeIdentity.voidWash : activeIdentity.lightWash};\n--paper-text: ${isVoid ? activeIdentity.voidText : activeIdentity.lightText};\n--paper-border: ${isVoid ? activeIdentity.voidBorder : activeIdentity.lightBorder};\n--accent-hover: ${activeIdentity.hover};\n--button-mode: ${btnMode};`;
    navigator.clipboard.writeText(cssText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [activeIdentity, canvasMode, btnMode]);

  const resetDefault = React.useCallback(() => {
    selectIdentity(RADICAL_IDENTITIES[0]);
    toggleCanvasMode("light");
    toggleBtnMode("chromatic");
  }, [selectIdentity, toggleCanvasMode, toggleBtnMode]);

  // Filtered identities
  const filteredIdentities = React.useMemo(() => {
    return RADICAL_IDENTITIES.filter((p) => {
      const matchesCategory =
        selectedCategory === "all" || p.category === selectedCategory;
      const matchesSearch =
        !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end print:hidden">
      {/* Expanded Studio Panel */}
      {isOpen && (
        <div className="mb-3 w-[420px] max-w-[calc(100vw-2rem)] rounded-2xl border border-[#D5D5D0] bg-[#FFFFFF] shadow-2xl backdrop-blur-xl flex flex-col max-h-[85vh] animate-in fade-in slide-in-from-bottom-4 duration-200 overflow-hidden text-[#111111]">
          {/* Header */}
          <div className="px-4 py-3 border-b border-[#EAEAEA] bg-[#FAF9F6] flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              <div
                className="size-3 rounded-full border border-black/10 shadow-inner transition-colors duration-300"
                style={{ backgroundColor: activeIdentity.accent }}
              />
              <span className="font-semibold text-xs tracking-tight text-[#111111]">
                Gluvok Palette Studio
              </span>
              <span className="text-[10px] text-[#666666] font-mono uppercase tracking-wider bg-[#EFEFEA] px-1.5 py-0.5 rounded">
                {activeIdentity.categoryLabel}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={resetDefault}
                title="Reset to default"
                className="p-1 rounded-md text-[#666666] hover:text-[#111111] hover:bg-[#EAEAEA] transition-colors cursor-pointer"
              >
                <RotateCcw className="size-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Minimize studio"
                className="p-1 rounded-md text-[#666666] hover:text-[#111111] hover:bg-[#EAEAEA] transition-colors cursor-pointer"
              >
                <ChevronDown className="size-4" />
              </button>
            </div>
          </div>

          {/* Canvas & Button Control Bar */}
          <div className="px-3.5 py-2.5 border-b border-[#EAEAEA] bg-[#FDFCFB] flex items-center justify-between gap-3 text-xs flex-shrink-0">
            {/* Canvas Mode */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-[#777777] font-medium">Canvas:</span>
              <div className="flex rounded-lg border border-[#E0E0DC] p-0.5 bg-[#F4F4F0]">
                <button
                  type="button"
                  onClick={() => toggleCanvasMode("light")}
                  className={`flex items-center gap-1 px-2 py-0.5 text-[11px] font-medium rounded-md transition-all cursor-pointer ${
                    canvasMode === "light"
                      ? "bg-white text-[#111111] shadow-xs"
                      : "text-[#666666] hover:text-[#111111]"
                  }`}
                >
                  <Sun className="size-3 text-[#E68A00]" />
                  Light Paper
                </button>
                <button
                  type="button"
                  onClick={() => toggleCanvasMode("void")}
                  className={`flex items-center gap-1 px-2 py-0.5 text-[11px] font-medium rounded-md transition-all cursor-pointer ${
                    canvasMode === "void"
                      ? "bg-[#111111] text-white shadow-xs"
                      : "text-[#666666] hover:text-[#111111]"
                  }`}
                >
                  <Moon className="size-3 text-[#A898E6]" />
                  Deep Void
                </button>
              </div>
            </div>

            {/* Button Mode */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-[#777777] font-medium">Button:</span>
              <div className="flex rounded-lg border border-[#E0E0DC] p-0.5 bg-[#F4F4F0]">
                <button
                  type="button"
                  onClick={() => toggleBtnMode("chromatic")}
                  className={`px-2 py-0.5 text-[11px] font-medium rounded-md transition-all cursor-pointer ${
                    btnMode === "chromatic"
                      ? "bg-white text-[#111111] shadow-xs font-semibold"
                      : "text-[#666666] hover:text-[#111111]"
                  }`}
                >
                  Color
                </button>
                <button
                  type="button"
                  onClick={() => toggleBtnMode("stealth")}
                  className={`px-2 py-0.5 text-[11px] font-medium rounded-md transition-all cursor-pointer ${
                    btnMode === "stealth"
                      ? "bg-white text-[#111111] shadow-xs font-semibold"
                      : "text-[#666666] hover:text-[#111111]"
                  }`}
                >
                  Stealth
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="px-3 py-2 border-b border-[#EAEAEA] bg-[#FFFFFF] flex items-center gap-1.5 overflow-x-auto scrollbar-none flex-shrink-0">
            {[
              { id: "mineral", label: "🌸 Mineral & Fig (6)" },
              { id: "rare", label: "💎 True Rare (8)" },
              { id: "japan", label: "🗾 Japan (8)" },
              { id: "italy", label: "🇮🇹 Italy (4)" },
              { id: "france", label: "🇫🇷 France (4)" },
              { id: "nordic", label: "🇸🇪 Nordic (4)" },
              { id: "india", label: "🇮🇳 India (4)" },
              { id: "britain", label: "🇬🇧 Britain (4)" },
              { id: "all", label: "All (42)" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as PaletteCategory)}
                className={`whitespace-nowrap px-2.5 py-1 text-[11px] rounded-full transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#111111] text-white font-semibold shadow-xs"
                    : "bg-[#F7F6F3] text-[#666666] hover:bg-[#EFEFEA] hover:text-[#111111] border border-[#EAEAEA]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="px-3 py-1.5 border-b border-[#EAEAEA] bg-[#FAFAF9] flex items-center gap-2 flex-shrink-0">
            <Search className="size-3.5 text-[#888888]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by pigment, tone, or country (e.g. Tyrian, Lapis, Fig, Matcha, Sienna, Jaipur)..."
              className="w-full bg-transparent text-xs text-[#111111] placeholder:text-[#999999] outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-[10px] text-[#888888] hover:text-[#111111]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Identity Cards Scrollable List */}
          <div className="p-3 overflow-y-auto space-y-2 flex-1 scrollbar-thin">
            {filteredIdentities.length === 0 ? (
              <div className="text-center py-8 text-xs text-[#888888]">
                No palettes match &ldquo;{searchQuery}&rdquo;
              </div>
            ) : (
              filteredIdentities.map((identity) => {
                const isSelected = activeIdentity.id === identity.id;
                return (
                  <div
                    key={identity.id}
                    onClick={() => selectIdentity(identity)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative group ${
                      isSelected
                        ? "border-[#111111] bg-[#FAFAF8] shadow-sm ring-1 ring-[#111111]"
                        : "border-[#EAEAEA] bg-[#FFFFFF] hover:border-[#CCCCCC] hover:bg-[#FDFDFD]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <div
                          className="size-4 rounded-full border border-black/10 shadow-xs flex-shrink-0"
                          style={{ backgroundColor: identity.accent }}
                        />
                        <span className="font-semibold text-xs tracking-tight text-[#111111]">
                          {identity.name}
                        </span>
                        <span className="text-[9px] uppercase tracking-wider text-[#777777] bg-[#F2F1ED] px-1.5 py-0.5 rounded font-mono">
                          {identity.categoryLabel}
                        </span>
                      </div>
                      {isSelected && (
                        <span className="flex items-center gap-1 text-[10px] font-medium text-[#111111] bg-[#EFEFEA] px-1.5 py-0.5 rounded">
                          <Check className="size-2.5" />
                          Active
                        </span>
                      )}
                    </div>

                    <p className="text-[11px] leading-relaxed text-[#666666] mb-2.5">
                      {identity.tone}
                    </p>

                    {/* Color Swatch Previews */}
                    <div className="flex items-center justify-between pt-2 border-t border-[#F0EFEB]">
                      <div className="flex items-center gap-1.5 text-[10px] text-[#777777] font-mono">
                        <div
                          className="size-3 rounded-xs border border-black/10"
                          style={{ backgroundColor: identity.accent }}
                          title="Accent Color"
                        />
                        <span>{identity.accent}</span>
                        <span className="text-[#CCCCCC]">•</span>
                        <div
                          className="size-3 rounded-xs border border-black/10"
                          style={{
                            backgroundColor:
                              canvasMode === "void"
                                ? identity.voidWash
                                : identity.lightWash,
                          }}
                          title="Paper Wash"
                        />
                        <span>
                          {canvasMode === "void"
                            ? identity.voidWash
                            : identity.lightWash}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            selectIdentity(identity);
                            copyConfig();
                          }}
                          className="text-[10px] text-[#555555] hover:text-[#111111] px-1.5 py-0.5 rounded hover:bg-[#EAEAEA] transition-colors flex items-center gap-1"
                          title="Copy CSS variables for this identity"
                        >
                          <Copy className="size-2.5" />
                          CSS
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Active Summary & Copy Action */}
          <div className="p-3 border-t border-[#EAEAEA] bg-[#FAF9F6] flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              <div
                className="size-3 rounded-full border border-black/15 shadow-xs"
                style={{ backgroundColor: activeIdentity.accent }}
              />
              <div className="text-[11px]">
                <span className="font-semibold text-[#111111]">
                  {activeIdentity.name}
                </span>
                <span className="text-[#777777] text-[10px] block">
                  {canvasMode === "void" ? "Void Canvas" : "Light Canvas"} • {activeIdentity.categoryLabel}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={copyConfig}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#111111] text-white hover:bg-[#222222] transition-all cursor-pointer shadow-xs active:scale-95"
            >
              {copied ? (
                <>
                  <CheckCheck className="size-3.5 text-emerald-400" />
                  <span>Copied CSS Config</span>
                </>
              ) : (
                <>
                  <Copy className="size-3.5" />
                  <span>Copy CSS Tokens</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Floating Launcher Pill */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-[#D5D5D0] bg-[#FFFFFF] text-[#111111] shadow-lg hover:shadow-xl hover:border-[#111111] transition-all duration-200 cursor-pointer active:scale-95"
        style={{
          boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.12), 0 2px 6px -1px rgba(0, 0, 0, 0.08)",
        }}
      >
        <div
          className="size-3 rounded-full border border-black/20 shadow-xs transition-transform duration-200 group-hover:scale-110"
          style={{ backgroundColor: activeIdentity.accent }}
        />
        <span className="text-xs font-medium tracking-tight">
          {activeIdentity.name}
        </span>
        <div className="flex items-center gap-1 pl-1 border-l border-[#E5E5E0] text-[#777777] text-[10px] font-mono">
          <Sparkles className="size-3 text-[#111111]" />
          <span>Palettes</span>
        </div>
        {isOpen ? (
          <ChevronDown className="size-3.5 text-[#888888] group-hover:text-[#111111]" />
        ) : (
          <ChevronUp className="size-3.5 text-[#888888] group-hover:text-[#111111]" />
        )}
      </button>
    </div>
  );
}
