import { Eyebrow } from "./eyebrow";
import { AnimatedList, Reveal, SplitText } from "./reveal";

const steps = [
  {
    n: "01",
    title: "Drop in your AI images",
    body: "Upload one or many AI images from Midjourney, ChatGPT, Higgsfield — any tool. The order does not matter. The studio reads each file name and the actual visuals, so you can rearrange them any time and the content keeps making sense.",
  },
  {
    n: "02",
    title: "Set your topic, prompt and tool",
    body: "Type your topic in plain English. Add the prompt you used and the tool you used (Midjourney v7, ChatGPT 2.0, etc.). These two fields are what makes your carousel a real storytelling breakdown, not just pretty pictures.",
  },
  {
    n: "03",
    title: "Get 5 hook suggestions",
    body: "Tap Brainstorm hooks and Gemini returns 5 click-worthy first-slide lines in different angles — shock, aspirational, clean, curiosity, contrarian. Click any one and it becomes your cover slide.",
  },
  {
    n: "04",
    title: "Generate the slide content",
    body: "One click and the studio writes the whole deck — cover, breakdown slides matched to each image, and the prompt-reveal slide. Highlights are auto-tagged so they pick up your accent color.",
  },
  {
    n: "05",
    title: "Refine anything you don't like",
    body: "Don't love the hook? Hit Refine and type what to change in plain English ('make it punchier', 'less salesy'). Same for any slide. Reorder images freely — the copy stays in sync.",
  },
  {
    n: "06",
    title: "Caption + 30 SEO keywords",
    body: "The Instagram caption writer drafts a hook line, a value sentence, a tool mention and a DM trigger. Underneath it appends up to 30 comma-separated SEO keywords tuned for your topic. Copy, paste, post.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="border-b border-[#1F1E1B] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 mb-16">
            <div>
              <Eyebrow>HOW IT WORKS</Eyebrow>
              <h2
                className="mt-6 text-[#F5F3EF]"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: "clamp(32px, 3.8vw, 52px)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.018em",
                }}
              >
                <SplitText text="Six steps from an image folder to a " />
                <SplitText
                  text="posted carousel."
                  delay={0.55}
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    color: "#C8A97E",
                  }}
                />
              </h2>
            </div>
            <div className="flex items-end">
              <p
                className="text-[#B5B0A8] max-w-md"
                style={{ fontSize: "15px", lineHeight: 1.7 }}
              >
                The studio reads your images, writes the slides, and gives you
                a caption with up to 30 SEO keywords — all in your browser,
                with your own Gemini key.
              </p>
            </div>
          </div>
        </Reveal>

        <AnimatedList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`relative p-8 border-t border-[#1F1E1B] h-full ${
                (i + 1) % 3 !== 0 ? "lg:border-r" : ""
              } ${i % 2 === 0 ? "md:border-r" : ""} group hover:bg-[#141413]/50 transition-colors`}
            >
              <div className="flex items-baseline justify-between mb-8">
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "44px",
                    color: "#C8A97E",
                  }}
                >
                  {s.n}
                </span>
              </div>
              <h3
                className="text-[#F5F3EF] mb-3"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  fontSize: "19px",
                  letterSpacing: "-0.005em",
                }}
              >
                {s.title}
              </h3>
              <p
                className="text-[#B5B0A8]"
                style={{ fontSize: "14px", lineHeight: 1.7 }}
              >
                {s.body}
              </p>
              <div className="mt-6 h-px w-12 bg-[#C8A97E]/40 group-hover:w-24 group-hover:bg-[#C8A97E] transition-all duration-500" />
            </div>
          ))}
        </AnimatedList>
      </div>
    </section>
  );
}
