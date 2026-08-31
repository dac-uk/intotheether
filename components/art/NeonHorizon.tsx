"use client";

import { useEffect, useRef } from "react";

/** Synthwave perspective grid rolling toward a neo-Tokyo skyline sun. */
export default function NeonHorizon({ className = "" }: { className?: string }) {
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
      t += 0.008;

      const w = canvas.width;
      const h = canvas.height;
      const horizon = h * 0.45;
      ctx.clearRect(0, 0, w, h);

      // sky gradient
      const sky = ctx.createLinearGradient(0, 0, 0, horizon);
      sky.addColorStop(0, "#04050a");
      sky.addColorStop(1, "#1a0b2e");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, horizon);

      // sun — striped magenta disc
      const sunR = Math.min(w, h) * 0.18;
      const sunX = w / 2;
      const sunY = horizon - sunR * 0.15;
      const sun = ctx.createLinearGradient(0, sunY - sunR, 0, sunY + sunR);
      sun.addColorStop(0, "#ffc24b");
      sun.addColorStop(0.5, "#ff2ec4");
      sun.addColorStop(1, "#9d6bff");
      ctx.save();
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunR, 0, Math.PI * 2);
      ctx.clip();
      ctx.fillStyle = sun;
      ctx.fillRect(sunX - sunR, sunY - sunR, sunR * 2, sunR * 2);
      // horizontal blinds over the sun
      ctx.fillStyle = "#04050a";
      const blinds = 7;
      for (let i = 0; i < blinds; i++) {
        const y = sunY - sunR + ((i + ((t * 3) % 1)) * (sunR * 2)) / blinds;
        const bh = (i / blinds) * 8 * devicePixelRatio;
        ctx.fillRect(sunX - sunR, y, sunR * 2, bh);
      }
      ctx.restore();

      // skyline silhouette
      ctx.fillStyle = "#07060f";
      const seed = 12;
      let x = 0;
      let n = seed;
      const rand = () => {
        n = (n * 16807) % 2147483647;
        return n / 2147483647;
      };
      while (x < w) {
        const bw = (20 + rand() * 60) * devicePixelRatio;
        const bh = (20 + rand() * 90) * devicePixelRatio;
        ctx.fillRect(x, horizon - bh, bw, bh);
        // windows
        if (rand() > 0.4) {
          ctx.fillStyle = rand() > 0.5 ? "rgba(0,229,255,0.5)" : "rgba(255,46,196,0.4)";
          for (let wy = horizon - bh + 6; wy < horizon - 8; wy += 14 * devicePixelRatio) {
            for (let wx = x + 4; wx < x + bw - 6; wx += 12 * devicePixelRatio) {
              if (Math.sin(wx * wy + t * 2) > 0.6) ctx.fillRect(wx, wy, 3, 4);
            }
          }
          ctx.fillStyle = "#07060f";
        }
        x += bw + 2;
      }

      // ground
      const ground = ctx.createLinearGradient(0, horizon, 0, h);
      ground.addColorStop(0, "#0d0518");
      ground.addColorStop(1, "#04050a");
      ctx.fillStyle = ground;
      ctx.fillRect(0, horizon, w, h - horizon);

      // perspective grid
      ctx.strokeStyle = "rgba(0,229,255,0.45)";
      ctx.lineWidth = 1 * devicePixelRatio;
      const cx = w / 2;
      // radial lines
      for (let i = -14; i <= 14; i++) {
        ctx.beginPath();
        ctx.moveTo(cx, horizon);
        ctx.lineTo(cx + i * w * 0.12, h + 40);
        ctx.stroke();
      }
      // rolling horizontal lines
      const rows = 14;
      for (let i = 0; i < rows; i++) {
        const p = (i / rows + (t % (1 / rows)) * rows / rows) % 1;
        const eased = Math.pow(p + (t % 1) / rows, 2.2);
        const y = horizon + eased * (h - horizon);
        ctx.globalAlpha = Math.min(1, p + 0.15);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
        ctx.globalAlpha = 1;
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
