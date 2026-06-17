"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  message: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex-1 flex items-center justify-center py-32 px-6">
          <div className="text-center max-w-lg mx-auto">
            <div
              className="text-[#C26D4D]"
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(96px, 18vw, 160px)",
                lineHeight: 1,
                opacity: 0.2,
              }}
            >
              500
            </div>
            <h1
              className="mt-4 text-[#F5F3EF]"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "clamp(28px, 4vw, 44px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Something broke on our end.
            </h1>
            <p
              className="mt-5 text-[#B5B0A8]"
              style={{ fontSize: "16px", lineHeight: 1.7 }}
            >
              An unexpected error occurred. Try refreshing the page — your
              browser-saved drafts are safe.
            </p>
            {this.state.message && (
              <p
                className="mt-4 text-[#C26D4D]/70"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.08em" }}
              >
                {this.state.message}
              </p>
            )}
            <div className="mt-10">
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 border border-[#C26D4D]/50 text-[#F5F3EF] hover:border-[#C26D4D] px-6 py-3 rounded-sm transition-colors"
                style={{ fontSize: "12px", letterSpacing: "0.14em" }}
              >
                RELOAD PAGE
              </button>
            </div>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
