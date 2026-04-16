import { useEffect, useRef } from "react";

interface FloatingText {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  fontSize: number;
  rotation: number;
  rotSpeed: number;
}

const ParticleWave = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
      // Reposition floating texts on resize
      floatingTexts.forEach((t) => {
        t.x = Math.random() * canvas.offsetWidth;
        t.y = Math.random() * canvas.offsetHeight;
      });
    };

    // Create floating brand name instances (replacing dots)
    const textCount = 20;
    const floatingTexts: FloatingText[] = Array.from({ length: textCount }, () => ({
      x: Math.random() * (canvas.offsetWidth || 800),
      y: Math.random() * (canvas.offsetHeight || 600),
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.12 + 0.08,
      fontSize: Math.random() * 14 + 12,
      rotation: (Math.random() - 0.5) * 0.4,
      rotSpeed: (Math.random() - 0.5) * 0.002,
    }));

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      time += 0.008;

      // Draw floating brand names
      floatingTexts.forEach((t) => {
        t.x += t.vx;
        t.y += t.vy;
        t.rotation += t.rotSpeed;

        if (t.x < -150 || t.x > w + 150) t.vx *= -1;
        if (t.y < -30 || t.y > h + 30) t.vy *= -1;

        const pulse = Math.sin(time * 1.5 + t.fontSize) * 0.03;

        ctx.save();
        ctx.translate(t.x, t.y);
        ctx.rotate(t.rotation);
        ctx.font = `700 ${t.fontSize}px Inter, system-ui, sans-serif`;
        ctx.fillStyle = `rgba(147, 180, 255, ${t.opacity + pulse})`;
        ctx.letterSpacing = "4px";
        ctx.fillText("VIBEADS DIGITAL", 0, 0);
        ctx.restore();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default ParticleWave;
