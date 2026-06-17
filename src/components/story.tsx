import { Eyebrow } from "./eyebrow";
import { Reveal, SplitText } from "./reveal";
import { CircularText } from "./circular-text";

export function Story() {
  return (
    <section id="story" className="border-b border-[#1F1E1B] py-24 lg:py-32">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <Reveal>
          <Eyebrow>WHY WE BUILT IT</Eyebrow>
          <h2
            className="mt-6 text-[#F5F3EF] max-w-[820px]"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "clamp(30px, 4vw, 54px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            <SplitText text="We were spending two hours every night fixing slides in " />
            <SplitText
              text="Figma."
              delay={0.85}
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "#C26D4D",
              }}
            />{" "}
            <SplitText text="So we built our own tool." delay={1} />
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-10 lg:gap-14">
          <Reveal delay={0.1}>
            <p
              className="text-[#D8D2C8]"
              style={{ fontSize: "15px", lineHeight: 1.8 }}
            >
              We post on @prompts.page almost every day. Each post is a slide
              breakdown of an AI image — what prompt was used, what lighting,
              what camera. Building those decks in Figma was painful: aligning
              wordmarks, cropping images to 4:5, copying long prompts.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="text-[#D8D2C8]"
              style={{ fontSize: "15px", lineHeight: 1.8 }}
            >
              AI Carousel Design does that work for us. The layout is locked, the
              crops happen automatically, and the captions are generated in one
              click. Everything lives in your browser — no accounts, no
              uploads, no subscriptions. We made it free so you can use it too.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-14 flex items-center gap-8">
            <CircularText
              text="OPEN · THE · EDITOR · NOW · "
              radius={54}
              duration={10}
            />
            <div>
              <div
                className="text-[#F5F3EF]"
                style={{ fontSize: "15px", fontWeight: 500 }}
              >
                Try it yourself
              </div>
              <div
                className="text-[#B5B0A8] mt-1"
                style={{ fontSize: "13px", lineHeight: 1.6 }}
              >
                Free. No account. Opens in your browser.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
