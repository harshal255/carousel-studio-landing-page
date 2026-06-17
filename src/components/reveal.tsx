"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode, type CSSProperties, Children } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function BlurWords({
  text,
  className,
  style,
  stagger = 0.05,
}: {
  text: string;
  className?: string;
  style?: CSSProperties;
  stagger?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const words = text.split(" ");
  return (
    <span ref={ref} className={className} style={style}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", marginRight: "0.28em" }}
          initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            duration: 0.7,
            delay: i * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}

export function SplitText({
  text,
  className,
  style,
  stagger = 0.018,
  delay = 0,
  duration = 0.7,
}: {
  text: string;
  className?: string;
  style?: CSSProperties;
  stagger?: number;
  delay?: number;
  duration?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const words = text.split(" ");
  let charIndex = 0;

  return (
    <span ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {Array.from(word).map((char, charIdx) => {
            const currentIdx = charIndex++;
            return (
              <motion.span
                key={charIdx}
                aria-hidden
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: "0.4em", filter: "blur(8px)" }}
                animate={
                  inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined
                }
                transition={{
                  duration,
                  delay: delay + currentIdx * stagger,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {char}
              </motion.span>
            );
          })}
          {wordIdx < words.length - 1 && (
            <span style={{ display: "inline-block" }}>&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
}

export function ShinyText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={className}
      style={{
        backgroundImage:
          "linear-gradient(110deg, #C8A97E 30%, #F5E6C8 50%, #C8A97E 70%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        animation: "shineMove 4.5s linear infinite",
      }}
    >
      {children}
      <style>{`@keyframes shineMove { to { background-position: -200% 0; } }`}</style>
    </span>
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function AnimatedList({
  children,
  className,
  stagger = 0.09,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
