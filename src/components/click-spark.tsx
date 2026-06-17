"use client";

import { useRef, useCallback, type ReactNode } from "react";

interface Spark {
  id: number;
  x: number;
  y: number;
  angle: number;
}

export function ClickSpark({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);
  const nextId = useRef(0);

  const animateSparks = useCallback(() => {
    const svg = svgRef.current;
    if (!svg || sparksRef.current.length === 0) return;

    const duration = 500;
    const sparkCount = 8;
    const length = 12;

    sparksRef.current.forEach((spark) => {
      const existing = svg.querySelector(`[data-spark="${spark.id}"]`);
      if (existing) return;

      for (let i = 0; i < sparkCount; i++) {
        const angle = spark.angle + (i / sparkCount) * Math.PI * 2;
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        const start = Date.now();

        line.setAttribute("data-spark", String(spark.id));
        line.setAttribute("stroke", "#C8A97E");
        line.setAttribute("stroke-width", "1.5");
        line.setAttribute("stroke-linecap", "round");
        svg.appendChild(line);

        const tick = () => {
          const elapsed = Date.now() - start;
          const t = Math.min(1, elapsed / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          const dist = eased * 28;
          const opacity = 1 - t;

          const x1 = spark.x + Math.cos(angle) * (dist * 0.4);
          const y1 = spark.y + Math.sin(angle) * (dist * 0.4);
          const x2 = spark.x + Math.cos(angle) * (dist * 0.4 + length * (1 - t * 0.6));
          const y2 = spark.y + Math.sin(angle) * (dist * 0.4 + length * (1 - t * 0.6));

          line.setAttribute("x1", String(x1));
          line.setAttribute("y1", String(y1));
          line.setAttribute("x2", String(x2));
          line.setAttribute("y2", String(y2));
          line.setAttribute("opacity", String(opacity));

          if (t < 1) {
            requestAnimationFrame(tick);
          } else {
            line.remove();
          }
        };
        requestAnimationFrame(tick);
      }
    });

    sparksRef.current = [];
  }, []);

  const onClick = useCallback(
    (e: React.MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      sparksRef.current.push({
        id: nextId.current++,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        angle: Math.random() * Math.PI * 2,
      });
      animateSparks();
    },
    [animateSparks]
  );

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className="relative"
      style={{ isolation: "isolate" }}
    >
      <svg
        ref={svgRef}
        className="absolute inset-0 size-full pointer-events-none"
        style={{ zIndex: 10, overflow: "visible" }}
      />
      {children}
    </div>
  );
}
