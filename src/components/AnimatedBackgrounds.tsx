import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, useMemo } from "react";

/* ── Floating Orbs – glowing drifting gradient blobs ── */
export const FloatingOrb = ({
  className = "",
  size = 300,
  color = "primary",
  delay = 0,
  duration = 20,
}: {
  className?: string;
  size?: number;
  color?: string;
  delay?: number;
  duration?: number;
}) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    animate={{
      x: [0, 40, -30, 20, 0],
      y: [0, -30, 20, -40, 0],
      scale: [1, 1.15, 0.9, 1.1, 1],
    }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    style={{ width: size, height: size }}
  >
    <div className={`w-full h-full rounded-full bg-${color}/15 blur-[100px]`} />
  </motion.div>
);

/* ── Subtle grid overlay ── */
export const GridPattern = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
      backgroundSize: "60px 60px",
    }} />
    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
  </div>
);

/* ── Floating Particles – small dots that rise and fade ── */
export const FloatingParticles = ({ count = 30, className = "" }: { count?: number; className?: string }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.4 + 0.1,
      })),
    [count]
  );

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary"
          style={{ left: `${p.left}%`, width: p.size, height: p.size, bottom: -10 }}
          animate={{ y: [0, -800], opacity: [0, p.opacity, p.opacity, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
        />
      ))}
    </div>
  );
};

/* ── Glowing Dots – pulsing accent dots ── */
export const GlowingDot = ({
  className = "",
  size = 6,
  delay = 0,
}: {
  className?: string;
  size?: number;
  delay?: number;
}) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    animate={{ scale: [1, 1.8, 1], opacity: [0.4, 1, 0.4] }}
    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay }}
  >
    <div className="relative">
      <div
        className="rounded-full bg-primary"
        style={{ width: size, height: size }}
      />
      <div
        className="absolute inset-0 rounded-full bg-primary blur-md"
        style={{ width: size * 3, height: size * 3, top: -size, left: -size }}
      />
    </div>
  </motion.div>
);

/* ── Rotating Rings – orbital animation ── */
export const RotatingRings = ({ className = "" }: { className?: string }) => (
  <div className={`absolute pointer-events-none ${className}`}>
    {[350, 500, 650].map((size, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border"
        style={{
          width: size,
          height: size,
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
          borderColor: `hsl(var(--primary) / ${0.08 - i * 0.02})`,
        }}
        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
        transition={{ duration: 30 + i * 15, repeat: Infinity, ease: "linear" }}
      >
        {/* Accent dot on ring */}
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-primary/40"
          style={{ top: -4, left: "50%", marginLeft: -4 }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
        />
      </motion.div>
    ))}
  </div>
);

/* ── Noise Texture Overlay ── */
export const NoiseOverlay = ({ className = "", opacity = 0.03 }: { className?: string; opacity?: number }) => (
  <div
    className={`absolute inset-0 pointer-events-none ${className}`}
    style={{
      opacity,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
      backgroundRepeat: "repeat",
      backgroundSize: "128px 128px",
    }}
  />
);

/* ── Word-by-word blur reveal heading ── */
export const RevealText = ({
  text,
  className = "",
  delay = 0,
  as: Tag = "h1",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}) => {
  const words = text.split(" ");
  return (
    <Tag className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(12px)", opacity: 0, y: 15 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: delay + i * 0.06 }}
          className="mr-[0.3em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
};

/* ── Scroll-linked parallax wrapper ── */
export const ParallaxSection = ({
  children,
  speed = 0.15,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

/* ── Horizontal scroll-linked line ── */
export const ScrollLine = ({ className = "" }: { className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.4"],
  });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        className="h-px w-full"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "left",
          background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.4), transparent)",
        }}
      />
    </div>
  );
};

/* ── Animated accent bar ── */
export const SectionAccent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.5"],
  });

  return (
    <div ref={ref} className="flex justify-center mb-8">
      <motion.div
        className="h-1 rounded-full bg-primary"
        style={{ width: useTransform(scrollYProgress, [0, 1], ["0rem", "4rem"]) }}
      />
    </div>
  );
};

/* ── Stagger children on scroll ── */
export const StaggerContainer = ({
  children,
  className = "",
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: stagger } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const staggerChild = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

/* ── Minimal gradient blur ── */
export const GradientBlur = ({ className = "" }: { className?: string }) => (
  <div className={`absolute pointer-events-none ${className}`}>
    <div className="w-full h-full rounded-full bg-primary/10 blur-[120px]" />
  </div>
);

/* ── Vertical gradient lines ── */
export const VerticalGradientLines = ({ count = 5, className = "" }: { count?: number; className?: string }) => (
  <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
    <div className="relative w-full h-full max-w-7xl mx-auto">
      {Array.from({ length: count }, (_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 w-px h-full"
          style={{
            left: `${((i + 1) / (count + 1)) * 100}%`,
            background: "linear-gradient(180deg, transparent, hsl(var(--primary) / 0.06), transparent)",
          }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
        />
      ))}
    </div>
  </div>
);

/* ── Scroll-linked scale hook ── */
export const useScrollScale = (inputRange: [number, number] = [0, 1], outputRange: [number, number] = [0.95, 1]): [React.RefObject<HTMLDivElement | null>, MotionValue<number>] => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, inputRange, outputRange);
  return [ref, scale];
};
