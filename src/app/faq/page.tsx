import type { Metadata } from "next";
import { PageShell } from "../../components/page-shell";
import { Faq as FaqSection } from "../../components/faq";

export const metadata: Metadata = {
  title: "FAQ — AI Carousel Design",
  description: "Answers to common questions about AI Carousel Design — the free AI carousel generator for Instagram. No watermark, no account, no subscription.",
};

export default function FaqPage() {
  return (
    <PageShell
      eyebrow="QUESTIONS"
      title={
        <>
          The short{" "}
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              color: "#C8A97E",
            }}
          >
            answers.
          </span>
        </>
      }
      subtitle="Everything we get asked most often, in one place."
    >
      <div className="-mx-6 lg:-mx-10">
        <FaqSection />
      </div>
    </PageShell>
  );
}
