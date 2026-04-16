import { motion } from "framer-motion";

interface FloatingOrbProps {
  className?: string;
  delay?: number;
  duration?: number;
  size?: string;
}

export const FloatingOrb = ({ className = "", delay = 0, duration = 20, size = "w-72 h-72" }: FloatingOrbProps) => (
  <motion.div
    className={`absolute rounded-full blur-3xl pointer-events-none ${size} ${className}`}
    animate={{
      x: [0, 30, -20, 10, 0],
      y: [0, -40, 20, -10, 0],
      scale: [1, 1.1, 0.95, 1.05, 1],
      opacity: [0.3, 0.5, 0.3, 0.45, 0.3],
    }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

export const GridPattern = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`}>
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
      backgroundSize: "60px 60px",
    }} />
  </div>
);

export const FloatingParticles = ({ count = 20, color = "primary" }: { count?: number; color?: string }) => (
  <>
    {Array.from({ length: count }).map((_, i) => (
      <motion.div
        key={i}
        className={`absolute w-1 h-1 rounded-full bg-${color} pointer-events-none`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30 - Math.random() * 40, 0],
          x: [0, (Math.random() - 0.5) * 40, 0],
          opacity: [0, 0.6, 0],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          delay: Math.random() * 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </>
);

export const AnimatedLine = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{ scaleX: 1, opacity: 0.1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.5, delay, ease: "easeOut" as const }}
    style={{ height: "1px", background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)" }}
  />
);

export const GlowingDot = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    animate={{
      scale: [1, 1.5, 1],
      opacity: [0.3, 0.8, 0.3],
    }}
    transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="w-2 h-2 rounded-full bg-primary" />
    <div className="absolute inset-0 w-2 h-2 rounded-full bg-primary blur-md" />
  </motion.div>
);
