"use client";

import { useRef, useState, type ReactNode } from "react";

export function BorderGlow({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0, opacity: 0 });

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top, opacity: 1 });
  };

  const onLeave = () => setPos((p) => ({ ...p, opacity: 0 }));

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative rounded-sm"
      style={{ padding: "1.5px" }}
    >
      <div
        className="absolute inset-0 rounded-sm transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: pos.opacity,
          background: `radial-gradient(120px circle at ${pos.x}px ${pos.y}px, #C8A97E, transparent 70%)`,
        }}
      />
      <div
        className="absolute inset-0 rounded-sm pointer-events-none"
        style={{ background: "rgba(200,169,126,0.18)" }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
