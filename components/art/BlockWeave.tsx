"use client";

import { useEffect, useRef } from "react";

/** Abstract chain visual: blocks pulse into existence left to right,
 *  linked by data threads — a heartbeat of finality. */
export default function BlockWeave({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let t = 0;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function draw() {
      raf = requestAnimationFrame(draw);
      if (!canvas || !ctx) return;
      t += 0.012;
      const w = canvas.width;
      const h = canvas.height;
      const dpr = devicePixelRatio;
      ctx.fillStyle = "rgba(4,5,10,0.25)";
      ctx.fillRect(0, 0, w, h);

      const n = 9;
      const gap = w / (n + 1);
      const cy = h / 2;
      const slot = Math.floor(t) % n;

      for (let i = 0; i < n; i++) {
        const x = gap * (i + 1);
        const phase = ((i - t) % n + n) % n;
        const wob = Math.sin(t * 2 + i * 1.7) * h * 0.12;
        const y = cy + wob;
        const size = (14 + Math.sin(t + i) * 3) * dpr;
        const isHead = i === slot;

        // links
        if (i > 0) {
          const px = gap * i;
          const pwob = Math.sin(t * 2 + (i - 1) * 1.7) * h * 0.12;
          ctx.strokeStyle = isHead
            ? "rgba(255,46,196,0.7)"
            : "rgba(0,229,255,0.25)";
          ctx.lineWidth = 1 * dpr;
          ctx.beginPath();
          ctx.moveTo(px + size, cy + pwob);
          ctx.lineTo(x - size, y);
          ctx.stroke();

          // data packets travelling the link
          const pk = (t * 1.5 + i * 0.3) % 1;
          const pkx = px + size + (x - px - size * 2) * pk;
          const pky = cy + pwob + (y - cy - pwob) * pk;
          ctx.fillStyle = "rgba(61,255,158,0.9)";
          ctx.fillRect(pkx, pky - 1.5 * dpr, 3 * dpr, 3 * dpr);
        }

        // block (rotated square)
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(Math.PI / 4 + Math.sin(t + i) * 0.1);
        const alpha = 0.35 + 0.65 * (1 - phase / n);
        if (isHead) {
          ctx.shadowColor = "#ff2ec4";
          ctx.shadowBlur = 24 * dpr;
          ctx.strokeStyle = "rgba(255,46,196,1)";
          ctx.fillStyle = "rgba(255,46,196,0.25)";
        } else {
          ctx.shadowColor = "#00e5ff";
          ctx.shadowBlur = 10 * dpr;
          ctx.strokeStyle = `rgba(0,229,255,${alpha})`;
          ctx.fillStyle = `rgba(0,229,255,${alpha * 0.12})`;
        }
        ctx.lineWidth = 1.5 * dpr;
        ctx.strokeRect(-size, -size, size * 2, size * 2);
        ctx.fillRect(-size, -size, size * 2, size * 2);
        // inner core
        ctx.strokeRect(-size * 0.45, -size * 0.45, size * 0.9, size * 0.9);
        ctx.restore();
      }
    }

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
