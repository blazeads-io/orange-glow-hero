import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

/* ── Subtle grid – only used sparingly ── */
export const GridPattern = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
    <div className="absolute inset-0 opacity-[0.025]" style={{
      backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
      backgroundSize: "80px 80px",
    }} />
    {/* Fade edges */}
    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
  </div>
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
          transition={{ duration: 0.5, ease: "easeOut" as const, delay: delay + i * 0.06 }}
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

/* ── Horizontal scroll-linked line that grows as section enters ── */
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

/* ── Scroll-linked progress accent bar ── */
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

/* ── Minimal gradient accent – replaces floating orbs ── */
export const GradientBlur = ({ className = "" }: { className?: string }) => (
  <div className={`absolute pointer-events-none ${className}`}>
    <div className="w-full h-full rounded-full bg-primary/10 blur-[120px]" />
  </div>
);

/* ── Scroll-linked counter for stats ── */
export const useScrollScale = (inputRange: [number, number] = [0, 1], outputRange: [number, number] = [0.95, 1]): [React.RefObject<HTMLDivElement | null>, MotionValue<number>] => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, inputRange, outputRange);
  return [ref, scale];
};
