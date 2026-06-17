import type { Metadata } from "next";
import { PageShell } from "../../components/page-shell";

export const metadata: Metadata = {
  title: "About — AI Carousel Design",
  description: "AI Carousel Design is built by prompts.page — a small team of prompt engineers and developers in Ahmedabad, India. Free, local, and open.",
};

export default function About() {
  return (
    <PageShell
      eyebrow="ABOUT"
      title={
        <>
          About{" "}
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              color: "#C8A97E",
            }}
          >
            AI Carousel Design.
          </span>
        </>
      }
    >
      <div
        className="text-[#D8D2C8] space-y-6"
        style={{ fontSize: "16px", lineHeight: 1.8 }}
      >
        <p>
          We are a small team of prompt engineers, creative directors and
          developers based in Ahmedabad, India, working under the creative
          banner of <span className="text-[#F5F3EF]">prompts.page</span>. We
          build open-source, utility-focused web tools for digital creators
          who care about visual storytelling.
        </p>
        <p>
          AI Carousel Design started as our own bottleneck. Every night we were
          building prompt breakdown slides in Figma — aligning wordmarks,
          cropping 4:5 images, copying long prompts. We replaced that pipeline
          with a single web app that locks the layout, handles the boring
          parts, and lets us focus on the idea.
        </p>
        <p>
          The studio stores everything on your device using IndexedDB. We do
          not run trackers, we do not lock features behind paywalls, and we
          never see your API keys. Free, local, and quiet.
        </p>
      </div>
    </PageShell>
  );
}
