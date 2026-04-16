import { useEffect, useRef } from "react";

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
    };
    resize();
    window.addEventListener("resize", resize);

    const cols = 80;
    const rows = 30;

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const spacingX = w / (cols - 1);
      const spacingY = h / (rows - 1);
      const centerY = h * 0.5;

      time += 0.008;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacingX;
          const baseY = j * spacingY;

          // Wave displacement
          const distFromCenter = (baseY - centerY) / (h * 0.4);
          const waveFactor = Math.exp(-distFromCenter * distFromCenter * 2);
          const wave =
            Math.sin(i * 0.12 + time * 2) * 25 * waveFactor +
            Math.sin(i * 0.07 - time * 1.5 + j * 0.1) * 15 * waveFactor;

          const y = baseY + wave;

          // Brightness: brighter near the wave crest
          const brightness = 0.08 + waveFactor * 0.55;
          
          // Glow on the wave ridge
          const ridgeDist = Math.abs(distFromCenter);
          const isRidge = ridgeDist < 0.15;
          const glowAlpha = isRidge ? 0.6 + Math.sin(i * 0.15 + time * 3) * 0.3 : 0;

          // Base dot
          const dotSize = 1 + waveFactor * 1.2;
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(147, 180, 255, ${brightness})`;
          ctx.fill();

          // Glow for ridge particles
          if (glowAlpha > 0.3) {
            ctx.beginPath();
            ctx.arc(x, y, dotSize * 3, 0, Math.PI * 2);
            const grad = ctx.createRadialGradient(x, y, 0, x, y, dotSize * 4);
            grad.addColorStop(0, `rgba(180, 210, 255, ${glowAlpha * 0.5})`);
            grad.addColorStop(1, "rgba(180, 210, 255, 0)");
            ctx.fillStyle = grad;
            ctx.fill();
          }
        }
      }

      // Bright wave line across the center
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      for (let i = 0; i <= cols; i++) {
        const x = (i / cols) * w;
        const wave =
          Math.sin(i * 0.12 + time * 2) * 25 +
          Math.sin(i * 0.07 - time * 1.5) * 15;
        ctx.lineTo(x, centerY + wave);
      }
      ctx.strokeStyle = "rgba(180, 215, 255, 0.15)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Glowing sweep highlight
      const sweepX = ((Math.sin(time * 0.7) + 1) / 2) * w;
      const sweepGrad = ctx.createRadialGradient(sweepX, centerY, 0, sweepX, centerY, 200);
      sweepGrad.addColorStop(0, "rgba(200, 220, 255, 0.12)");
      sweepGrad.addColorStop(1, "rgba(200, 220, 255, 0)");
      ctx.fillStyle = sweepGrad;
      ctx.fillRect(sweepX - 200, centerY - 200, 400, 400);

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
