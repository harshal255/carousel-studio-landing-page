Here is the absolute, granular detail of every feature currently implemented in your **Carousel Studio** application, explaining exactly how it is structured, what inputs it accepts, and how it behaves under the hood:

---

### 1. Brand Setup & Dynamic Color System
* **Brand Name Wordmark (`brandName`)**:
  - **Inputs**: A text input field.
  - **Behavior**: Updates the logo text in the header of the app and dynamically updates the lowercase wordmark positioned at the top-left of every slide (e.g., `brandname.co`).
* **Niche Identifier (`niche`)**:
  - **Inputs**: A text input field (e.g., "AI Creative Studio").
  - **Behavior**: Stores creator niche metadata which is sent to the Gemini API prompt helper to customize AI-generated slides and keywords.
* **Accent Color System (`accentColor`)**:
  - **Inputs**: A popover containing a color picker canvas or manual hex code input field.
  - **Behavior**: Controls the global highlighting color. Any text wrapped in asterisks (`*like this*`) inside slide titles or descriptions dynamically pulls this color. It is also used to fill slide progress bars, button states, and selected navigation tabs.
* **Suggested Accent Color Extractor (`suggestedPalette`)**:
  - **Inputs**: Interactive color swatch buttons.
  - **Behavior**: Extracted dynamically from the color tones of uploaded slide images. Clicking any suggested color instantly updates `accentColor` and applies it across the entire canvas.

---

### 2. Custom Typography Engine
* **Font Preset Selector**:
  - **Inputs**: A custom dropdown.
  - **Options**:
    1. **Editorial**: Pairs *Neue Kabel Bold* for headings with *Neue Kabel Light* for body copy and wordmarks.
    2. **Modern**: Pairs *Gilroy ExtraBold* with *Gilroy Light*.
    3. **Minimal**: Pairs *Drowner* display font with *PT Mono* spacing.
* **Custom Font Uploader**:
  - **Inputs**: A file upload prompt accepting `.ttf`, `.otf`, `.woff`, and `.woff2` extensions.
  - **Under the Hood**:
    1. Reads the selected file as an `ArrayBuffer` via `FileReader`.
    2. Dynamically loads the font into the active document using the browser's native `FontFace` API.
    3. Converts the font file into a Base64 data URI stylesheet.
    4. Appends a new `<style>` block to the document head to make the font persistent for the session.
    5. Adds the font to the `customFonts` list and automatically applies it to the slide canvas.

---

### 3. Branding Logo Editor
* **Logo Asset Uploader**:
  - **Inputs**: File picker accepting SVG, PNG, and JPEG assets.
  - **Behavior**: Reads the image file using `FileReader` as a Base64 URL and stores it in the `logoUrl` state.
* **Display Layout Selector**:
  - **Inputs**: Button group options.
  - **Behavior**:
    - **Text Only**: Displays the lowercase `brandName` string in Neue Kabel/Gilroy light.
    - **Logo Only**: Displays the uploaded logo image.
    - **Logo + Text**: Places the logo icon directly next to the brand name text.
* **Logo Sizing Slider**:
  - **Inputs**: Range slider mapping from `16px` to `80px`.
  - **Behavior**: Adjusts the pixel width of the logo image asset in the slide header in real-time.
* **Logo Opacity Slider**:
  - **Inputs**: Opacity range mapping from `0%` to `100%`.
  - **Behavior**: Controls the alpha transparency of the logo watermark.

---

### 4. Client-Side Gemini AI Engine
* **API Configuration panel**:
  - **Inputs**: Password-masked text input for the Gemini API Key (sanitizes trailing/leading spaces or invisible characters) and an active Model Selector dropdown (toggling between configured model sizes).
  - **Behavior**: Keeps the API key completely private on the client side, sending HTTP requests directly from the user's browser to the Google Generative Language endpoints.
* **Viral Hook Brainstormer (`handleSuggestHooks`)**:
  - **Inputs**: Topic input, AI Tool name, and optional Base Prompts.
  - **Behavior**: Sends context parameters to Gemini and requests exactly 5 click-worthy hooks matching these specific playbook angles: *Shock/reveal*, *Aspirational*, *Clean/direct*, *Curiosity/secret*, and *Contrarian*. Displays the results as clickable cards. Clicking a card sets it as the primary cover slide hook.
* **Visual-to-Slide Deck Generator (`handleAiGenerate`)**:
  - **Inputs**: Uploaded slide images, topic, selected hook, and AI prompt.
  - **Behavior**:
    1. Downscales uploaded photos to `512px` in the browser to optimize token payloads and upload speed.
    2. Packages images as base64 data.
    3. Sends a detailed prompt instructing Gemini to return a structured JSON response matching the playbook guidelines.
    4. Automatically generates the cover slide, breakdown keyword slides (mapping relevant keywords and subtexts directly to their corresponding images), and the prompt reveal slide.
    5. Automatically structures all heading/body texts with asterisk accent tags (`*highlight*`) for rendering color states.
    6. Generates a matching accent color hex and typeface suggestion based on the image mood.

---

### 5. Instagram Copywriter & SEO Generator
* **Storytelling Caption Builder**:
  - **Behavior**: Automatically takes the slide deck structure and drafts a single-paragraph Instagram/LinkedIn caption containing a hook sentence, a 1-sentence value statement, an explicit tool mention, and a comments-trigger DM line (e.g. "Comment **TRIGGER** to get details").
* **SEO Keyword Extractor**:
  - **Behavior**: Appends up to 30 comma-separated keywords (no hashtags) related to prompt engineering, creative workflows, and the active generator tool at the end of the caption text.
* **Copy Clipboard Tool**:
  - **Behavior**: A copy button copies the caption and tags to the clipboard and gives visual "Copied!" feedback.

---

### 6. Client-Side ZIP Export Engine
* **Render Loop (`handleDownload`)**:
  - **Behavior**: Loops through the slides array and locates each slide DOM container in the workspace using the element ID `#export-slide-i`.
* **Rasterization Engine**:
  - **Behavior**: Uses the `html-to-image` `toPng` utility to capture the slide elements. Renders them with `quality: 0.95` and `pixelRatio: 1` to output clean PNG files.
* **ZIP Compilation**:
  - **Behavior**: Uses `JSZip` to store the generated PNG files sequentially (e.g., `slide-1.png`, `slide-2.png`) and bundles a `caption_and_keywords.txt` file containing the copywriting.
* **Save Trigger**:
  - **Behavior**: Compiles the ZIP into a raw data blob and triggers a native browser download window named after the brand (e.g., `brandname_carousel.zip`) using `FileSaver`.

---

### 7. Browser-Safe Draft History & Autosave
* **IndexedDB Draft Database (`draftDb`)**:
  - **Behavior**: Connects to the local browser database storage to avoid server databases.
* **Autosave Engine**:
  - **Behavior**: Automatically captures and saves the active project state (brand name, accent color, slides, images, opacity settings, captions) when returning to the dashboard or closing/refreshing the tab.
* **Draft Snapshots**:
  - **Behavior**: The Draft History modal lets creators name and save static snapshots, preview thumbnails, delete old files, or restore past drafts to overwrite the active workspace.