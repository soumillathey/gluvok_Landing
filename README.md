# Gluvok Industrial Operating Systems — Landing Page

Operational specification and business landing page for Gluvok: an industrial weighbridge automation, dual-camera optical proof, and multi-center ledger reconciliation system.

## Design Philosophy & Guidelines

- **Minimalist UI**: Warm bone/cream foundation (`#FBFBFA`), hairline crisp deckle borders (`#EAEAEA`), zero heavy drop shadows, no pill-shaped primary buttons, no emojis or AI tropes.
- **Typography**:
  - Headings: `Manrope` (`next/font/google`, weight 600-800, tight letter-spacing)
  - Body & Content: `Geist Sans` (`next/font/google`)
  - Numbers, Codes & Metrics: `Geist Mono` (`next/font/google`, `tabular-nums`)

## Active Permanent Visual Identity

The landing page is permanently styled with the **Rikyū Matcha & Tea Moss (利休茶)** palette (Japan Heritage):

```css
/* Gluvok Paper Palette: Rikyū Matcha & Tea Moss (利休茶) (Japan Heritage) */
--accent: #66684F;
--accent-hover: #52543D;
--paper-wash: #F3F4EE;
--paper-text: #24261B;
--paper-border: #D8DBC8;
--bg-canvas: #F8F8F5;
--surface-card: #FFFFFF;
--button-mode: chromatic;
```

- **Canvas Foundation**: Light Paper Canvas (`#F8F8F5`) on pure white deckled cards (`#FFFFFF`).
- **Primary Actions & CTAs**: Chromatic Matcha Green (`#66684F`, hover: `#52543D`).
- **Surface Accents & Tags**: Wabi-sabi roasted tea wash (`#F3F4EE`) with hairline borders (`#D8DBC8`).
- **Typography**: Dark bamboo charcoal text (`#24261B`) with muted moss secondary text (`#6E715B`).

## Archived Palette Studio References (`components/palette-picker.tsx`)

A built-in floating studio allows live re-theming across all primary actions, buttons, badges, status indicators, and settlement cards without hardcoding or page reload.

### 1. Mineral & Fig Signature Collection (6 Palettes)
The foundational palette family anchored in archival library bindings, pressed botanicals, and deckled paper:
1. **Heather Bookcloth** (`#6D667C`) — Misty lavender-grey library spine, archival cloth binding on warm paper.
2. **Archival Mulberry Wax** (`#7F4958`) — Victorian letter sealing wax on heavy deckled cotton stationery.
3. **Pressed Fig & Elderberry** (`#94546B`) — Muted elderberry and dried fig ink, antique botanical print.
4. **Antique Damson Plum** (`#864B62`) — Aristocratic English damson plum with velvety slate-violet undertones.
5. **Smoky Cassis & Violet Ash** (`#5F546B`) — Desaturated French blackcurrant liqueur mixed with cool volcanic ash.
6. **Wild Blackberry Bramble** (`#7A3D54`) — Dark woodland marionberry bramble, earthy warm-plum manuscript ink.

### 2. True Rare Pigments (8 Palettes)
Historically, chemically, and geologically legendary pigments of extraordinary rarity:
1. **Tyrian Imperial Purple** (`#5E1938`) — Antiquity's costliest dye from Mediterranean Murex snails, reserved for emperors.
2. **Afghan Lapis Ultramarine** (`#1F3A70`) — Sar-e-Sang mountain lazurite, more precious than gold in the Renaissance.
3. **Dragon's Blood Socotra** (`#8A272C`) — Wept cinnabar tree resin from isolated cliffs on Socotra Island.
4. **Maya Blue Complex** (`#346B78`) — Centuries-unfaded Mesoamerican organo-clay nano-matrix from sacred cenotes.
5. **Han Imperial Purple** (`#543864`) — Qin-Han terracotta synthetic pigment exhibiting quantum magnetic physics.
6. **YInMn Inorganic Blue** (`#244799`) — First new inorganic blue discovered in 200 years (Oregon State 2009).
7. **Caput Mortuum & Bitumen** (`#5C3C2D`) — Victorian archival velvety amber-brown glaze.
8. **Orpiment King's Gold** (`#B88B2A`) — Crystalline arsenic trisulfide minerals from royal manuscript illuminations.

### 3. Country Heritage Themes (28 Palettes)

#### 🗾 Japan Heritage (8 Palettes)
- **Aizome Indigo (勝色)** (`#223A5E`) — Samurai victory indigo on crisp Echizen washi.
- **Rikyū Matcha & Tea Moss (利休茶)** (`#66684F`) — Wabi-sabi roasted green tea leaves & Kyoto tea garden moss.
- **Bengara Ochre & Torii (弁柄)** (`#9C4133`) — Weathered vermilion timber torii gates & red iron oxide.
- **Hai-sakura Ash Blossom (灰桜)** (`#947382`) — Edo-period cherry blossom shrouded in temple incense ash.
- **Kuro-sumi Calligraphy Ink (黒墨)** (`#3D3B40`) — Pine-soot inkstone wash, minimal calligraphy on silk vellum.
- **Kogane & Raw Silk Washi (黄金・生絹)** (`#A37B32`) — Weathered gold leaf gilding on vintage sliding screens.
- **Arashiyama Bamboo Grove (青竹)** (`#436E58`) — Freshly sliced green bamboo stalks in cool morning mist.
- **Fuji-nezu Wisteria Grey (藤鼠)** (`#6F667B`) — Edo chic wisteria-tinted river stone, dusty purple-grey textile.

#### 🇮🇹 Italy Heritage (4 Palettes)
- **Venetian Cinabro** (`#99332D`) — Renaissance Venetian red mercuric sulfide on Fabriano rag paper.
- **Terra di Siena** (`#9C6237`) — Uncalcined Tuscan iron-hydrated earth from Siena hills.
- **Tuscan Cypress Grove** (`#3A5440`) — Slender cypress avenues and olive terraces of Val d'Orcia.
- **Florentine Carta Vellum** (`#856847`) — Gold-tooled Florentine goatskin binding on antique eggshell parchment.

#### 🇫🇷 France Heritage (4 Palettes)
- **Sèvres Royal Porcelain** (`#1E3A6E`) — Cobalt oxide glaze of 18th-century royal manufacture porcelain.
- **Roussillon Ochre de Provence** (`#A8532E`) — Calcined clay cliffs of Luberon and Provençal terra cotta tile.
- **Chartreuse Elixir Herb** (`#788A38`) — Carthusian monastery secret recipe of 130 alpine plants since 1605.
- **Montmartre Zinc & Slate** (`#5C6570`) — Weathered Parisian zinc mansard rooftops and damp cobblestone.

#### 🇸🇪 Nordic Heritage (4 Palettes)
- **Falu Röd Copper Mine** (`#7C2824`) — Traditional Swedish timber cottage red pigment from Falun copper mine.
- **Gotland Limestone Fossil** (`#696B64`) — Baltic Sea fossilized coral limestone cliffs and sheep pastures.
- **Stockholm Fjord Mist** (`#2C4656`) — Cold Baltic archipelago waters cutting through pine granite islands.
- **Arctic Cloudberry Amber** (`#B87228`) — Golden arctic bog amber berries under the midnight sun.

#### 🇮🇳 India Heritage (4 Palettes)
- **Nil Indigo Vats** (`#1D3354`) — Centuries-old Indigofera tinctoria dyeing pits of Rajasthan.
- **Jaipur Pink Sandstone** (`#9C5858`) — Terracotta-pink sedimentary stone of Hawa Mahal palace facades.
- **Malabar Aged Teak & Sandalwood** (`#784E33`) — Deep oiled monsoon teakwood carvings & sandalwood paste.
- **Kerala Cardamom & Peppercorn** (`#4A5E44`) — Western Ghats mountain spice estates & rainforest moss.

#### 🇬🇧 Great Britain Heritage (4 Palettes)
- **Scottish Heather Tweed** (`#685265`) — Highland moorland wild heather woven into heavy estate tweed.
- **Oxford Bodleian Leather** (`#703338`) — Archival goat-morocco bindings in Duke Humfrey's library stacks.
- **Cotswold Honey Freestone** (`#9A7840`) — Weathered oolitic limestone drystone walls in afternoon sun.
- **Cornish Slate Coast** (`#465259`) — Sheer dark Atlantic headlands & Delabole quarry stone cottages.

## Running Locally

Use `pnpm` exclusively:

```bash
# Development
pnpm run dev

# Production Build & Start
pnpm run build
pnpm run start --port 3000

# Verification Gates
pnpm run lint
pnpm exec tsc --noEmit
```


## Enterprise ROI Calculator (`lib/roi-calculator.ts` & `components/roi-calculator.tsx`)

An industrial financial model for weighbridge automation feasibility and staffing cost reduction:

### Core Features
- **High-Capacity Staffing Model**: Supports up to 250 operators per shift across 1 to 4 daily shifts (covering single turns up to 24/7 continuous industrial operations).
- **Relief Staffing Multiplier**: Optional configurable multiplier (1.0x to 1.5x) accounting for mandatory weekly offs, leave coverage, and shift rotation (`Required Headcount = CEILING(O * S * R)`).
- **Loaded Cost Breakdown**: Computes loaded operator cost (base salary + optional employment overhead for PF, ESI, uniforms, and benefits).
- **Automation Assumptions Deck**:
  - Target staffing-cost reduction slider (0% to 100%, default 70%).
  - One-time deployment Capex (hardware, sensors, setup).
  - Monthly SaaS software fees and recurring maintenance/connectivity.
  - Optional non-staffing benefits (reduced manual admin, documentation, and reconciliation effort).
- **Dynamic Results Dashboard**:
  - 10 Key Metrics: Headcount, Monthly Staffing, Annual Staffing, Monthly Gross Savings, Monthly Net Savings, Annual Net Savings, Deployment Capex, Payback Period, First-Year ROI %, and 3-Year Cumulative Net Benefit.
  - Interactive SVG Charts: Monthly Cost Comparison Bar Chart and 36-Month Cumulative Cash Flow Timeline with visual break-even axis.
  - Safety Boundary Guards: Automatically detects negative net savings, zero deployment cost (ROI not applicable, immediate payback), and zero salary.
- **Before vs. After Staffing Comparison**: High-contrast bento cards showing operational realities with clear disclaimers distinguishing analytical headcount equivalents from workforce recommendations.
- **Scenario Analysis**: Conservative, Expected, and Optimistic models side-by-side.
- **Mathematical Formula Disclosure**: Collapsible section explaining all equations.
- **Lead Generation Integration**: Tailored assessment request form pre-populated with active calculator parameters.

### Routes & Testing
- Direct dedicated page: `/roi-calculator`
- Embedded landing section: `/#calculator`
- Cloud console gateway: `/app`
- Vitest automated tests: `pnpm test` (`lib/roi-calculator.test.ts`)


## Core Messaging & Landing Page Architecture

The landing page centers on 6 core industrial pillars:

1. **100% Prevention of Weight Manipulation**:
   - Hardware-level anti-tamper lock directly communicating with digital scale indicators (Mettler-Toledo, Avery, Cardinal, Essae).
   - Eliminates manual typing, tare overwrite, axle lifting, and operator-driver collusion.

2. **Direct Weighbridge Images for Every Dispute**:
   - Synchronous multi-angle photographic captures (front plate/cab, top-down cargo bed load, rear axle placement).
   - Stored permanently in the immutable cloud ledger and watermarked on slips to resolve supplier/transporter claims in seconds.

3. **High-Speed Automatic ANPR**:
   - Neural OCR engine identifies commercial truck plates in under 1 second in harsh industrial lighting and weather conditions.
   - Auto-associates purchase orders and delivery challans without gate queue delays.

4. **Mitigating On-Site Operator Dependence (Unmanned Centers)**:
   - Autonomous weighbridge stations with automated boom barriers, bilingual driver guidance, and self-service kiosks.
   - Slashes recurring operator payroll by 60%–80% and enables 24/7 continuous operations.

5. **Real-Time Cloud Ledger (Inbound & Outbound)**:
   - Sub-second streaming of all incoming raw materials and outgoing product dispatches.
   - Automated multi-channel notifications (SMS, WhatsApp, webhooks).

6. **Global Remote Access & Analytical Graphs**:
   - Worldwide cloud control tower accessible from any smartphone, tablet, or PC.
   - Visual analytical graphs tracking daily tonnage throughput, turnaround times (TAT), and anomaly detection.
