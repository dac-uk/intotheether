"use client";

import { useEffect, useRef } from "react";

const GLYPHS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノΞξ0123456789ABCDEF";

/** Katakana/hex digital rain — the ether falling through the city. */
export default function MatrixRain({
  className = "",
  opacity = 0.55,
}: {
  className?: string;
  opacity?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let drops: number[] = [];
    let speeds: number[] = [];
    const fontSize = 15;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx!.scale(devicePixelRatio, devicePixelRatio);
      const cols = Math.floor(canvas.offsetWidth / fontSize);
      drops = Array.from({ length: cols }, () =>
        Math.floor(Math.random() * -60)
      );
      speeds = Array.from({ length: cols }, () => 0.5 + Math.random() * 0.9);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let last = 0;
    function draw(t: number) {
      raf = requestAnimationFrame(draw);
      if (t - last < 50) return;
      last = t;
      if (!canvas || !ctx) return;

      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.fillStyle = "rgba(4, 5, 10, 0.12)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        if (y > 0) {
          // head glyph glows bright; occasional magenta anomaly
          const anomaly = Math.random() < 0.003;
          ctx.fillStyle = anomaly ? "#ff2ec4" : "#b9fdff";
          ctx.fillText(char, x, y);
          ctx.fillStyle = anomaly
            ? "rgba(255, 46, 196, 0.5)"
            : "rgba(0, 229, 255, 0.55)";
          ctx.fillText(
            GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
            x,
            y - fontSize
          );
        }
        drops[i] += speeds[i];
        if (y > h && Math.random() > 0.975) {
          drops[i] = Math.floor(Math.random() * -30);
          speeds[i] = 0.5 + Math.random() * 0.9;
        }
      }
    }

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
