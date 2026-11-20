import React from "react";
import { motion } from "motion/react";

/**
 * Reusable Reveal component
 * Smooth scroll-triggered animation using motion/react
 */
export default function Reveal({
  children,
  delay = 0,
  duration = 0.55,
  direction = "up", // "up" | "down" | "left" | "right" | "none"
  distance = 30,
  className = "",
  style = {},
  once = true,
  amount = 0.2,
}) {
  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // fluid cubic bezier
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
