import type { Metadata } from "next";
import { PageShell, ProseBlock } from "../../components/page-shell";

export const metadata: Metadata = {
  title: "Terms of Service — AI Carousel Design",
  description: "AI Carousel Design terms of service. Free to use for personal and commercial social-media publishing. Governed by the laws of India.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Terms() {
  return (
    <PageShell
      eyebrow="TERMS"
      title="Terms of service."
      subtitle="Last updated: June 14, 2026"
    >
      <ProseBlock number="01" heading="Terms of use">
        <p>
          By using AI Carousel Design you agree to these terms and to all
          applicable laws and local regulations. If you disagree, you may not
          use the site.
        </p>
      </ProseBlock>
      <ProseBlock number="02" heading="License">
        <p>
          AI Carousel Design is free. You may run the editor, crop your images,
          generate captions and export ZIPs for personal or commercial
          social-media publishing at no charge.
        </p>
      </ProseBlock>
      <ProseBlock number="03" heading="Your responsibility">
        <p>
          You are responsible for securing your own Gemini API key and for
          protecting your locally saved drafts. We cannot recover lost local
          drafts or API key balances.
        </p>
      </ProseBlock>
      <ProseBlock number="04" heading="Disclaimer">
        <p>
          AI Carousel Design is provided "as is". We make no warranties about
          uptime, correctness or performance, or about the output of any
          third-party AI model.
        </p>
      </ProseBlock>
      <ProseBlock number="05" heading="Governing law">
        <p>
          These terms are governed by the laws of India, under the
          jurisdiction of the courts in Ahmedabad, Gujarat.
        </p>
      </ProseBlock>
    </PageShell>
  );
}
