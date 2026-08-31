"use client";

import { useEffect, useRef } from "react";

/** Particle field drifting through a flow field — the ether itself.
 *  Particles trace glowing paths that pulse between cyan and violet. */
export default function EtherFlow({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let t = 0;
    type P = { x: number; y: number; hue: number; life: number };
    let particles: P[] = [];

    function spawn(w: number, h: number): P {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        hue: Math.random() < 0.7 ? 190 : Math.random() < 0.5 ? 300 : 265,
        life: 100 + Math.random() * 200,
      };
    }

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      if (!ctx) return;
      ctx.fillStyle = "#04050a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles = Array.from({ length: 420 }, () =>
        spawn(canvas.width, canvas.height)
      );
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function field(x: number, y: number, w: number, h: number) {
      const nx = (x / w) * 4;
      const ny = (y / h) * 4;
      return (
        Math.sin(nx + t) * Math.cos(ny - t * 0.7) * Math.PI +
        Math.sin(nx * 0.5 - t * 0.3) * 2
      );
    }

    function draw() {
      raf = requestAnimationFrame(draw);
      if (!canvas || !ctx) return;
      t += 0.004;
      const w = canvas.width;
      const h = canvas.height;

      ctx.fillStyle = "rgba(4, 5, 10, 0.035)";
      ctx.fillRect(0, 0, w, h);

      for (const p of particles) {
        const a = field(p.x, p.y, w, h);
        const speed = 1.4 * devicePixelRatio;
        const nx = p.x + Math.cos(a) * speed;
        const ny = p.y + Math.sin(a) * speed;

        ctx.strokeStyle = `hsla(${p.hue}, 100%, 62%, 0.35)`;
        ctx.lineWidth = 1 * devicePixelRatio;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        p.x = nx;
        p.y = ny;
        p.life -= 1;

        if (p.life <= 0 || p.x < 0 || p.x > w || p.y < 0 || p.y > h) {
          Object.assign(p, spawn(w, h));
        }
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
