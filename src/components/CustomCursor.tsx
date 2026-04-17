import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface CustomCursorProps {
  /** CSS selector for the area where the custom cursor should be active. Defaults to "#home". */
  scopeSelector?: string;
}

const CustomCursor = ({ scopeSelector = "#home" }: CustomCursorProps) => {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [insideScope, setInsideScope] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 28 });

  const trailX = useSpring(mouseX, { stiffness: 120, damping: 30 });
  const trailY = useSpring(mouseY, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const isInsideScope = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return false;
      const scope = document.querySelector(scopeSelector);
      return !!scope && scope.contains(target);
    };

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const inside = isInsideScope(e.target);
      setInsideScope(inside);
      if (inside && !visible) setVisible(true);
      if (!inside && visible) setVisible(false);
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => {
      setVisible(false);
      setInsideScope(false);
    };

    const onOverInteractive = (e: MouseEvent) => {
      if (!isInsideScope(e.target)) return;
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]")) {
        setHovering(true);
      }
    };

    const onOutInteractive = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]")) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOverInteractive);
    document.addEventListener("mouseout", onOutInteractive);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOverInteractive);
      document.removeEventListener("mouseout", onOutInteractive);
    };
  }, [isMobile, mouseX, mouseY, visible, scopeSelector]);

  if (isMobile) return null;

  return (
    <>
      {/* Hide default cursor only inside the scoped section */}
      <style>{`${scopeSelector}, ${scopeSelector} * { cursor: none !important; }`}</style>

      {/* Outer trail ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: trailX, y: trailY }}
      >
        <motion.div
          className="rounded-full border border-primary/40 -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: hovering ? 48 : clicking ? 28 : 36,
            height: hovering ? 48 : clicking ? 28 : 36,
            borderColor: hovering
              ? "hsl(var(--primary) / 0.7)"
              : "hsl(var(--primary) / 0.3)",
            opacity: visible && insideScope ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 22 }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: springX, y: springY }}
      >
        <motion.div
          className="rounded-full bg-primary -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: hovering ? 6 : clicking ? 10 : 6,
            height: hovering ? 6 : clicking ? 10 : 6,
            opacity: visible && insideScope ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 350, damping: 20 }}
        />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: trailX, y: trailY }}
      >
        <motion.div
          className="rounded-full bg-primary/10 blur-xl -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: hovering ? 80 : 50,
            height: hovering ? 80 : 50,
            opacity: visible && insideScope ? 0.6 : 0,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 25 }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
