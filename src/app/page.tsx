import type { Metadata } from "next";
import { Hero } from "../components/hero";
import { EditorShowcase } from "../components/editor-showcase";
import { HowItWorks } from "../components/how-it-works";
import { Proof } from "../components/proof";
import { Story } from "../components/story";
import { Features } from "../components/features";

export const metadata: Metadata = {
  title: "AI Carousel Design — Free AI Carousel Generator for Instagram",
  description: "Free AI carousel generator for Instagram — no watermark, no account. Drop your AI images, generate viral slide copy with Gemini, export clean PNGs ready to post. Text to carousel in seconds.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <EditorShowcase />
      <HowItWorks />
      <Proof />
      <Story />
      <Features />
    </main>
  );
}
