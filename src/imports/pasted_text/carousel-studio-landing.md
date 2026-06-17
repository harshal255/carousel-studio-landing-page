# AI System Prompt: Human-Style Next.js 15 Landing Page for Carousel Studio

Copy the entire block below into your Figma-to-code or AI generation tool (such as v0.dev, Bolt.new, Lovable.dev, or Claude) to create a pixel-perfect, highly responsive, and SEO-optimized landing page.

```text
You are a Lead Frontend Architect and Elite UI/UX Designer specialized in creating "Human-Generated" landing pages. Build a highly responsive, modern Next.js 15 Landing Page for "Carousel Studio" by prompts.page.

Your absolute priority is to avoid the sterile, generic "AI Slop" look (neon purple gradients, Inter font monoculture, bubbly bento grids, and over-optimized corporate buzzwords). Instead, design an editorial-grade, human-crafted web experience.

---

## 1. DESIGN SYSTEM & VISUAL RULES (THE "ANTI-AI" MANIFESTO)

### 🎨 Color Palette (Organic, Earthy, Matte)
- Primary Background: Matte coal-black (#0B0B0A or #0E0E0D). No neon backgrounds, no indigo/purple glows.
- Typography Colors: 
  - Primary: Alabaster cream (#F5F3EF) for absolute readability.
  - Secondary: Soft sand-gray (#B5B0A8) for descriptions.
  - Accent Text: Warm Terracotta/Ochre (#C26D4D) or Deep Gold (#C8A97E).
- Borders & Dividers: Muted charcoal/brass (#2A2824 or #1F1E1B) - thin 1px lines that define structured spacing.
- Button Highlight: Low-contrast warm gold (#C8A97E) with black text, or clean transparent outlines with warm borders.

### 📐 Typography (Character-Rich & Editorial)
- Main Font: "Outfit" (sans-serif) in variable weights (300, 400, 700, 900) for body text and headers.
- Editorial Font Pair: Integrate "EB Garamond" or "Playfair Display" (serif, weight 400 or italic) for select accent titles, stats, or client quotes. This breaks the generic tech monoculture and feels human.
- Monospace: JetBrains Mono or PT Mono (only for prompt codes, stats numbers, or ASCII design markers).
- Letter Spacing: Use tracking-widest for small caps labels, tracking-tight for huge headers.
- Capitalization: Use Sentence case for standard headings; uppercase only for tags/eyebrows.

### ⚡ Layout, Border, and Asymmetry Rules
- Sharp Radii: Do NOT use bubble rounded corners or pill buttons. Set a clean, structured border-radius of 4px to 8px max (`rounded-sm` or `rounded-md`).
- Staggered Layouts: Break the grid. Avoid symmetrical 3-column rows. Use asymmetric widths (e.g., a 60/40 or 70/30 grid split), staggered card heights, and text blocks that overlap borders.
- Hand-Crafted Imperfections: Include subtle hand-drawn SVG divider loops, rough sketch arrows, or clean ASCII annotations (like `[01 // 05]`, `→`, `●`, `*`) to frame headings.
- Non-Generic Assets: No glossy 3D spheres, glowing globes, or generic tech icons. Use real wireframes, organic hand-made textures, or mock layout wireframes.

---

## 2. COMPLETE PAGE COPY DECK (VERBATIM TEXT)

Ensure all text below is implemented exactly as written. Do not summarize or use lorem ipsum.

### [A] Sticky Navigation Header
- **Logo Text**: "Carousel Studio" (Outfit Bold) + `[PRO / BY PROMPTS.PAGE]` (PT Mono, size 9px, colored in warm gold #C8A97E).
- **Links**: 
  - `[01] THE MANIFESTO`
  - `[02] SCROLL GALLERY`
  - `[03] THE STORY`
  - `[04] FEATURES`
  - `[05] FAQ`
- **CTA Button**: "Launch Editor" (Outline style, border color #C8A97E, sharp 4px corners).

### [B] Hero Section
- **Eyebrow Tag**: `[01 / CREATOR WORKSPACE]` (Outfit, uppercase, tracking-widest, color: #C8A97E).
- **H1 Headline**: "Use this website to create carousels for AI content that actually go viral on Instagram."
- **Subheadline Paragraph**: "Most carousels look like generic Canva templates. That is why people swipe past them. Carousel Studio gives you the exact design framework, layout presets, and prompt-oriented canvas that powered @prompts.page to millions of organic impressions. Stop blending in with the AI slop."
- **Primary Button Text**: "Start Creating (Free)"
- **Secondary Link Text**: "Browse raw templates"

### [C] Hero Visual Showcase (Playbook-Compliant Slide Stack)
Implement four distinct card elements positioned in a fanned-out, overlapping deck using the BounceCards component. The design must reflect the exact brand guidelines of the prompts.page Instagram Carousel Playbook (100% full-bleed background images, lowercase wordmark top-left, and typography constrained to the bottom 25-35% of the slide).
- **Card 1 (Cover / Hero)**: 
  - Background: Full-bleed dramatic portrait image (represented in CSS as a rich olive/earthy backdrop).
  - Top Left Wordmark: `prompts.page` in Gilroy Light (font-size 11px, letter-spacing 2.5px, lowercase).
  - Category Badge: `[01 / CINEMATIC MOODS]` (Outfit uppercase, tracking-widest, color: #C8A97E).
  - Content Title: "THE DAY 18 FRAMEWORK: COLOR-BASED MOODS" (Outfit Bold, large, bottom-aligned).
  - Bottom Progress Bar: 1/4 progress track at the bottom.
- **Card 2 (Breakdown Slide)**: 
  - Background: Full-bleed image showing a photography lighting setup.
  - Top Left Wordmark: `prompts.page` (lowercase, letter-spacing 2.5px).
  - Content Callout Chips: Two distinct fit-content chips left-aligned: `TEAL & ORANGE` and `85MM LENS` (Gilroy Light, uppercase, 9px, white outline).
  - Content Text: "Step 1: Establishing Contrast. Do not let your colors blend into a muddy gray. Use a complementary split like Teal and Orange to keep the eyes locked on the subject."
  - Bottom Progress Bar: 2/4 progress track.
- **Card 3 (Prompt Reveal Slide)**: 
  - Background: Near-black textured background.
  - Top Left Wordmark: `prompts.page` (lowercase, letter-spacing 2.5px).
  - Prompt Section Header: `PROMPT` (uppercase, letter-spacing 3px, white at 45% opacity) + `MIDJOURNEY v7` (9px uppercase, letter-spacing 2px, white at 30%).
  - Prompt Text: "A high-fashion editorial photograph of a model in a structured silhouette dress, strong teal shadows contrasting with warm orange key light, dramatic split-lighting setup, shot on 85mm, Vogue editorial style, cinematic mood --ar 4:5 --v 7" (Styled in JetBrains Mono, thin italic, color: rgba(255,255,255,0.38) for a ghosted aesthetic).
  - Bottom Row: Chat-bubble SVG icon + "Get this prompt in your DM →" (Gilroy Light, white at 55%).
  - Bottom Progress Bar: 3/4 progress track.
- **Card 4 (Call to Action Slide)**: 
  - Background: Full-bleed high-fashion photo with a soft bottom gradient.
  - Top Left Wordmark: `prompts.page` (lowercase, letter-spacing 2.5px).
  - Content Title: "Comment CINEMA" (Outfit Bold, centered, large text).
  - Action Button: Semi-transparent pill shape: `background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25)` -> Text: "CINEMA" (Outfit Bold, letter-spacing 2px).
  - Subtext: "All 9 prompts sent directly to your DMs."
  - Bottom Progress Bar: 4/4 progress track (100% full).

### [D] "How It Works" Editorial Section
- **Eyebrow**: `[02 / THE STORYTELLING SYSTEM]`
- **Section Title**: "Four steps to create an aesthetic, scroll-stopping slide deck."
- **Step 1 Card**:
  - Step Number: `01`
  - Headline: "Input Your Core Concept"
  - Description: "Type your raw idea. Whether it is fashion, product shots, or AI tutorials, outline your key talking points in simple bullet points. We do not do automated generic writing; we help you format your actual thoughts."
- **Step 2 Card**:
  - Step Number: `02`
  - Headline: "Apply Aesthetic Presets"
  - Description: "Choose from layout settings curated by professional designers. Switch typography from modern editorial serifs to minimal technical styles instantly. Every preset enforces perfect alignment and margin rules."
- **Step 3 Card**:
  - Step Number: `03`
  - Headline: "Inject Cinematic Prompts"
  - Description: "Paste your Midjourney or DALL-E prompts directly. The editor renders clean, code-styled copy blocks so your audience can easily read, save, and duplicate your prompt engineering work."
- **Step 4 Card**:
  - Step Number: `04`
  - Headline: "Generate the Storytelling Caption"
  - Description: "Use the built-in Gemini engine to write caption text that reads like a human. It structures the copy with a high-impact hook, value-driven body, and a comments-trigger CTA alongside 30 viral SEO keywords."

### [E] The Carousel Studio Story (Verbatim Case Study & Origin)
Design this section with an asymmetrical, editorial magazine layout. Left Column: A large vertical ASCII block reading `[BUILD LOG // V1]`. Right Column: The raw narrative.
- **Section Eyebrow**: `[03 / THE ORIGIN STORY]`
- **Section H2 Heading**: "Figma alignment was taking us two hours a night. So we coded our own pipeline."
- **Paragraph 1 (The Bottleneck)**: "We post daily on @prompts.page. Our community loves prompt breakdowns, but building them was a nightmare. Every night, we fought with Figma layers. We spent hours aligning wordmarks, calculating 4:5 crops, creating gradient backgrounds, and copying prompt strings. It was repetitive, tedious, and took our focus away from the creative direction."
- **Paragraph 2 (Coding the Solution)**: "We built Carousel Studio to handle the mechanics. We locked in the layouts—forcing the lowercase wordmarks to sit top-left and constraints that keep copy on the bottom 30% of the screen. We added client-side image cropping to fit 4:5 ratios instantly. No server databases, no cloud subscriptions. Everything stays private, running entirely in your browser through local storage."
- **Paragraph 3 (The Gemini API Engine & Export)**: "To finish the loop, we integrated the Gemini API. With a single click, it reads your slide outlines and drafts a caption that sounds human—delivering a hook, a value body, and a comments trigger. When you're done, you download a ZIP archive containing clean, numbered PNGs ready to post, alongside a copy-to-clipboard caption. No friction. Just viral carousels in under ten minutes."

### [F] Asymmetric Features Section (The "Anti-Bento" Grid)
- **Left Sticky Panel**:
  - Headline: "A workspace tailored for prompt engineers."
  - Description: "Traditional design tools make you fight with layers, alignments, and grids. Carousel Studio is built specifically for AI creators. It isolates the design layout, letting you focus entirely on your imagery and prompt logic."
- **Right Column (SpotlightCards with Warm Spotlight Effects)**:
  - **Feature 1**:
    - Title: "Direct Canvas Text Editing"
    - Body: "Double-click any text inside the slide preview to edit it directly on the canvas. No more hunting through complex sidebar panels to fix a typo."
  - **Feature 2**:
    - Title: "AI Super-Prompter"
    - Body: "Automatically expand simple prompts into highly detailed, camera-specific Midjourney/Seedream parameters. It injects Arri Alexa setups, lens specifications, and side-lit shadow rules."
  - **Feature 3**:
    - Title: "Continuous Swipe Preview"
    - Body: "View your slides side-by-side in a responsive horizontal layout. Move your cursor to simulate a swipe, ensuring split-graphics flow seamlessly from page to page."
  - **Feature 4**:
    - Title: "Dynamic Palette Extractor"
    - Body: "Upload your AI image, and the canvas instantly samples the dominant color tones, suggesting perfect matching background gradients and border accents."
  - **Feature 5**:
    - Title: "Ghosted Prompt Reveal"
    - Body: "Displays long prompts in thin, low-opacity italic text, making them readable but hard to scrape. It automatically splits long prompts across continuation slides and appends the 'Get prompt in DM' line."

### [G] "Day 18" Cinematic Gallery (Real Copy-Pasteable Prompts)
Showcase 4 responsive cards containing the actual prompts from the "Color-Based Cinematic Moods" pack.
- **Section Eyebrow**: `[04 / READY-TO-USE PROMPTS]`
- **Section Title**: "Day 18: Color-Based Cinematic Moods"
- **Card 1: Teal & Orange Split**
  - Prompt: "A high-fashion editorial photograph of a model in a structured silhouette dress, strong teal shadows contrasting with warm orange key light, dramatic split-lighting setup, shot on 85mm, Vogue editorial style, cinematic mood --ar 4:5 --v 7"
  - Gradient Background Representation: Linear gradient from Deep Slate Blue (#1C2826) to Muted Clay (#C08A6E)
- **Card 2: Monochromatic Blue Noir**
  - Prompt: "A gritty cinematic film frame of a detective standing under a street lamp in heavy rain, monochromatic blue hues, sharp backlighting illuminating rain droplets, high contrast shadows, noir movie aesthetic --ar 16:9 --v 7"
  - Gradient Background Representation: Linear gradient from Deep Navy Blue (#0F172A) to Midnight Slate (#1E293B)
- **Card 3: Vintage Tungsten Glow**
  - Prompt: "Vintage warm tungsten interior shot, soft hazy atmosphere, golden light spilling from a desk lamp, cozy retro study room, nostalgic film grain, low key lighting --ar 4:5 --v 7"
  - Gradient Background Representation: Linear gradient from Golden Ochre (#78350F) to Burnt Umber (#451A03)
- **Card 4: Desaturated Industrial Grit**
  - Prompt: "Raw urban portrait, desaturated color grading, high contrast harsh side-light, texture-rich concrete background, raw industrial editorial style, shot on Arri Alexa --ar 4:5 --style raw"
  - Gradient Background Representation: Linear gradient from Stone Gray (#44403C) to Muted Steel (#1C1917)
- **Button Action**: Incorporate a click listener that writes the prompt to clipboard and shifts state from "Copy Prompt" to "Copied!" for 2000ms.

### [H] Community Metrics & Globe Section
- **Left Column Quote**: 
  - Text: "I went from spending two hours in Figma aligning slides to exporting a viral carousel in under ten minutes. The Gemini caption writer wrote a script that got me 14,000 saves on Instagram in the first week."
  - Citation: "— @prompts.page Founder" (Styled in EB Garamond Serif, italicized).
- **Right Column Globe**:
  - Render the MagicUI Globe component. Customize the coordinates and dots to glow in warm ochre/gold (#C8A97E) rather than futuristic cyan/blue.
  - Below Globe Stats:
    - Metric 1: "12.4M+" (CountUp) -> Label: "Organic Impressions"
    - Metric 2: "45,000+" (CountUp) -> Label: "Carousels Generated"
    - Metric 3: "15,800+" (CountUp) -> Label: "Active Prompt Engineers"

### [I] FAQ Section
- **Section Eyebrow**: `[05 / FREQUENTLY ASKED]`
- **Section Title**: "Frequently Asked Questions"
- **Accordion 1**:
  - Question: "Why is Carousel Studio hosted on a subdomain?"
  - Answer: "For optimal SEO! The landing page lives on customdomain.com as a static, pre-rendered Next.js page that loads instantly and ranks high in search indexes. The full React design editor lives at app.customdomain.com, keeping your active canvas and draft database secure and private in your local browser storage."
- **Accordion 2**:
  - Question: "Do I need my own Gemini API Key?"
  - Answer: "Yes. To keep Carousel Studio entirely free and open, we let you input your own Gemini API Key. This connects the app directly to Google's API, meaning you pay nothing for generating infinite copywriting captions and SEO tag lists."
- **Accordion 3**:
  - Question: "Can I export slides for LinkedIn?"
  - Answer: "Absolutely. The tool allows you to export your deck as a high-resolution PDF (the standard format for swipeable LinkedIn document posts) or a ZIP file containing numbered portrait PNG images optimized for Instagram."

---

## 3. GOOGLE ADSENSE MONETIZATION REQUIRED PAGES

Build separate static routes inside Next.js (`/about`, `/contact`, `/privacy`, and `/terms`) containing the exact verbatim content below. These pages are styled minimally in matte black, with cream Outfit text and a 1px border grid layout, satisfying Google AdSense policy requirements.

### [/about] - About Us Page
- **H1 Headline**: "About Carousel Studio"
- **Content Narrative**:
  - "We are a team of prompt engineers, creative directors, and developers based in Ahmedabad, India, working under the creative banner of prompts.page. We build open-source, utility-focused web tools that empower digital creators to publish high-end visual storytelling."
  - "Carousel Studio was built to solve our own bottleneck: designing slide-by-slide prompt breakdowns on Instagram. We wanted to eliminate the visual clutter of traditional design tools and replace it with a structured, strict layout engine that is locked into high-fashion typography rules."
  - "Our core philosophy is absolute transparency. The editor stores all draft data on your device using browser IndexedDB. We do not run tracking scripts, we do not lock features behind paywalls, and we do not collect your personal API keys. We keep the web clean, fast, and human."

### [/contact] - Contact Us Page
- **H1 Headline**: "Contact Our Creative Studio"
- **Paragraph**: "Have a question, feedback, or custom development inquiries? Reach out directly to the prompts.page team. We typically respond within 24 to 48 hours."
- **Contact Details (PT Mono)**:
  - Email: harshalskahar389@gmail.com
  - Location: Ahmedabad, India
  - Instagram: @prompts.page
- **Contact Form Fields**:
  - Full Name (Input, border #1F1E1B, focus border #C8A97E, Outfit font)
  - Email Address (Input, border #1F1E1B, focus border #C8A97E, Outfit font)
  - Message Text (Textarea, border #1F1E1B, focus border #C8A97E, Outfit font)
  - Submit Button: "Send Message" (Gold #C8A97E fill, black text)

### [/privacy] - Privacy Policy Page
- **H1 Headline**: "Privacy Policy"
- **Last Updated**: June 14, 2026
- **Verbatim Policy Sections**:
  - **1. Information We Collect**: "Carousel Studio operates as a browser-first application. We do not collect, transmit, or store your personal information on our servers. Your generated slides, customized niches, color schemes, and API keys are stored locally on your own device using the browser's IndexedDB and LocalStorage."
  - **2. Gemini API Key Security**: "When you enter a Gemini API Key in the settings panel, it is used solely to sign request headers sent directly from your browser to Google's API servers. We never intercept, log, or store your key on our systems."
  - **3. Google AdSense & Cookies**: "We use Google AdSense to serve advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits. You may opt out of personalized advertising by visiting your Google Ad Settings."
  - **4. Third-Party Links**: "Our site links to external AI tools and social platforms. We have no control over, and assume no responsibility for, the content or privacy practices of these third-party services."
  - **5. Contact Information**: "For privacy concerns, contact us at harshalskahar389@gmail.com."

### [/terms] - Terms of Service Page
- **H1 Headline**: "Terms of Service"
- **Last Updated**: June 14, 2026
- **Verbatim Terms Sections**:
  - **1. Terms of Use**: "By accessing Carousel Studio (customdomain.com and app.customdomain.com), you agree to comply with these terms, all applicable laws, and local regulations. If you disagree, you are prohibited from using this site."
  - **2. Open-Access Software License**: "Carousel Studio is provided as a free tool. You are granted permission to run the editor, crop imagery, generate copywriting captions, and export PDF or ZIP files for personal or commercial social media publishing without licensing fees."
  - **3. User Account Security**: "You are solely responsible for securing your own Gemini API keys and protecting your local browser-saved draft files. Carousel Studio cannot recover lost local drafts or API key balances."
  - **4. Disclaimer of Liability**: "Carousel Studio is provided 'as is'. We make no warranties, expressed or implied, regarding the uptime, correctness, or performance of the application or the output images generated by third-party AI models."
  - **5. Governing Law**: "These terms are governed by the laws of India, under the jurisdiction of courts in Ahmedabad, Gujarat."

---

## 4. TECHNICAL CONFIGURATION & IMPLEMENTATION DETAILS

### Conditional Class Merge Helper (`lib/utils.ts` or `utils/cn.ts`)
Ensure you write the standard shadcn class merge utility so it can compile:
```typescript
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Global Styles (`app/globals.css`)
Ensure you define Tailwind v4 custom theme styles:
```css
@import "tailwindcss";

@theme {
  --font-sans: 'Outfit', sans-serif;
  --font-serif: 'EB Garamond', serif;
  --font-mono: 'JetBrains Mono', monospace;

  --color-bg: #0B0B0A;
  --color-fg: #F5F3EF;
  --color-accent: #C8A97E;
  --color-accent-hover: #B5976D;
  --color-terracotta: #C26D4D;
  --color-border: #1F1E1B;
  --color-card: #141413;
  --color-card-hover: #1A1A19;
}

body {
  background-color: var(--color-bg);
  color: var(--color-fg);
  font-family: var(--font-sans);
}
```

Ensure all components are fully responsive across all device sizes (use tailwind breakpoints `sm:`, `md:`, `lg:`, `xl:` to scale sizes, paddings, and flex/grid direction). Double-check all React Bits endpoints are loaded from `https://reactbits.dev/r/...` using the `TS-TW` variant. Write clean, complete components.

ask me anything else regarding website
```
