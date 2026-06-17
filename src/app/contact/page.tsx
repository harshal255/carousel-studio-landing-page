import type { Metadata } from "next";
import { PageShell } from "../../components/page-shell";

export const metadata: Metadata = {
  title: "Contact — AI Carousel Design",
  description: "Get in touch with the AI Carousel Design team. Questions, feedback or custom development inquiries — we reply within 24–48 hours.",
};

const details = [
  {
    k: "EMAIL",
    v: "harshalskahar389@gmail.com",
    href: "mailto:harshalskahar389@gmail.com",
  },
  { k: "LOCATION", v: "Ahmedabad, India" },
  {
    k: "INSTAGRAM",
    v: "@prompts.page",
    href: "https://instagram.com/prompts.page",
    external: true,
  },
];

export default function Contact() {
  return (
    <PageShell
      eyebrow="CONTACT"
      title={
        <>
          Talk to the{" "}
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              color: "#C8A97E",
            }}
          >
            studio.
          </span>
        </>
      }
      subtitle="Questions, feedback or custom development inquiries — email us directly. We usually reply within 24 to 48 hours."
    >
      <ul className="border-t border-[#1F1E1B]">
        {details.map((d) => (
          <li
            key={d.k}
            className="grid grid-cols-[140px_1fr] gap-6 py-6 border-b border-[#1F1E1B] items-baseline"
          >
            <span
              className="text-[#C8A97E]"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.22em",
              }}
            >
              {d.k}
            </span>
            {d.href ? (
              <a
                href={d.href}
                target={d.external ? "_blank" : undefined}
                rel={d.external ? "noreferrer" : undefined}
                className="text-[#F5F3EF] hover:text-[#C8A97E] transition-colors"
                style={{ fontSize: "17px" }}
              >
                {d.v}
              </a>
            ) : (
              <span
                className="text-[#F5F3EF]"
                style={{ fontSize: "17px" }}
              >
                {d.v}
              </span>
            )}
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
