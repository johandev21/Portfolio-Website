import { motion } from "motion/react";
import type { ReactNode } from "react";

const revealProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

interface RevealProps {
  children: ReactNode;
}

export default function Reveal({ children }: RevealProps) {
  return <motion.div {...revealProps}>{children}</motion.div>;
}
