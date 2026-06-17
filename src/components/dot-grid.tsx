import { useEffect, useRef, type CSSProperties } from "react";

interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  className?: string;
  style?: CSSProperties;
}

export function DotGrid({
  dotSize = 1.4,
  gap = 26,
  baseColor = "rgba(245,243,239,0.10)",
  activeColor = "#C8A97E",
  proximity = 140,
  className = "",
  style,
}: DotGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999, inside: false });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;
    let w = 0;
    let h = 0;
    let dots: { x: number; y: number }[] = [];

    const layout = () => {
      const rect = wrap.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      const cols = Math.floor(w / gap);
      const rows = Math.floor(h / gap);
      const offX = (w - cols * gap) / 2 + gap / 2;
      const offY = (h - rows * gap) / 2 + gap / 2;
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          dots.push({ x: offX + c * gap, y: offY + r * gap });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const { x: mx, y: my, inside } = mouseRef.current;
      const prox2 = proximity * proximity;
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        let color = baseColor;
        let size = dotSize;
        if (inside) {
          const dx = d.x - mx;
          const dy = d.y - my;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < prox2) {
            const t = 1 - Math.sqrt(dist2) / proximity;
            color = activeColor;
            ctx.globalAlpha = 0.15 + t * 0.85;
            size = dotSize + t * 1.6;
          } else {
            ctx.globalAlpha = 1;
          }
        } else {
          ctx.globalAlpha = 1;
        }
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(d.x, d.y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        inside: true,
      };
    };
    const onLeave = () => {
      mouseRef.current.inside = false;
    };

    layout();
    rafRef.current = requestAnimationFrame(draw);
    window.addEventListener("resize", layout);
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("resize", layout);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [dotSize, gap, baseColor, activeColor, proximity]);

  return (
    <div ref={wrapRef} className={className} style={style}>
      <canvas ref={canvasRef} className="block size-full" />
    </div>
  );
}
