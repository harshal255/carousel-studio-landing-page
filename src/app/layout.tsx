import type { Metadata } from "next";
import Script from "next/script";
import "../styles/index.css";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { ScrollMarquee } from "../components/scroll-marquee";
import { ClickSpark } from "../components/click-spark";
import { ErrorBoundary } from "../components/error-boundary";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

export const metadata: Metadata = {
  title: "AI Carousel Design — Free AI Carousel Generator for Instagram",
  description: "Free AI carousel generator for Instagram. No watermark, no account. Drop your AI images, generate slide copy with Gemini, export clean PNGs ready to post.",
  keywords: "ai carousel generator, instagram carousel maker, free carousel maker, no watermark carousel, prompts page, gemini api carousel, social media content generator, slide deck creator",
  authors: [{ name: "aicarouseldesign.com" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "AI Carousel Design — Free AI Carousel Generator for Instagram",
    description: "Free AI carousel generator for Instagram. No watermark, no account. Drop your AI images, generate slide copy with Gemini, export clean PNGs ready to post.",
    siteName: "AI Carousel Design",
    images: [{ url: "https://aicarouseldesign.com/og.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Carousel Design — Free AI Carousel Generator for Instagram",
    description: "Free AI carousel generator for Instagram. No watermark, no account. Drop your AI images, generate slide copy with Gemini, export clean PNGs ready to post.",
    site: "@promptspage",
    images: ["https://aicarouseldesign.com/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {GA_ID && GA_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-screen bg-[#0B0B0A] text-[#F5F3EF]">
        <ErrorBoundary>
          <ClickSpark>
            <div className="min-h-screen flex flex-col">
              <Nav />
              <div className="flex-1">
                {children}
              </div>
              <section className="border-t border-[#1F1E1B] py-12 lg:py-16 bg-[#0A0A09]">
                <ScrollMarquee
                  items={[
                    "Type. Drop. Export. Post.",
                    "Made by people who actually post",
                    "Posted nightly on @prompts.page",
                    "Your drafts never leave your browser",
                    "We use it every single night",
                    "No purple gradients here",
                    "Bring your own Gemini key",
                  ]}
                />
              </section>
              <Footer />
            </div>
          </ClickSpark>
        </ErrorBoundary>
      </body>
    </html>
  );
}
