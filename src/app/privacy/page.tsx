import type { Metadata } from "next";
import { PageShell, ProseBlock } from "../../components/page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy — AI Carousel Design",
  description: "AI Carousel Design privacy policy. We store nothing on our servers — your slides, settings, and API keys stay on your device.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Privacy() {
  return (
    <PageShell
      eyebrow="PRIVACY"
      title="Privacy policy."
      subtitle="Last updated: June 14, 2026"
    >
      <ProseBlock number="01" heading="Information we collect">
        <p>
          AI Carousel Design runs in your browser. We do not collect, transmit or
          store your personal information on our servers. Your slides,
          settings, accent colors and API keys are saved locally on your
          device using IndexedDB and LocalStorage.
        </p>
      </ProseBlock>
      <ProseBlock number="02" heading="Gemini API key">
        <p>
          When you enter a Gemini API key, it is used only to sign requests
          sent directly from your browser to Google's API. We never intercept,
          log or store your key.
        </p>
      </ProseBlock>
      <ProseBlock number="03" heading="Google AdSense & cookies">
        <p>
          We use Google AdSense to serve ads. AdSense uses cookies to serve
          ads based on prior visits. You can opt out of personalized
          advertising in your Google Ad Settings.
        </p>
      </ProseBlock>
      <ProseBlock number="04" heading="Third-party links">
        <p>
          The site links to external AI tools and social platforms. We do not
          control and are not responsible for the privacy practices of those
          third parties.
        </p>
      </ProseBlock>
      <ProseBlock number="05" heading="Contact">
        <p>
          For privacy concerns, email{" "}
          <a
            href="mailto:harshalskahar389@gmail.com"
            className="text-[#C8A97E] hover:underline"
          >
            harshalskahar389@gmail.com
          </a>
          .
        </p>
      </ProseBlock>
    </PageShell>
  );
}
