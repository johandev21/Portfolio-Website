import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type RevealVariant = "default" | "heading" | "image" | "project";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}

type RevealStyle = CSSProperties & {
  "--reveal-delay": string;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "default",
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (
      !element ||
      prefersReducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsRevealed(true);
        observer.disconnect();
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const revealDelay = Math.min(Math.max(delay, 0), 240);
  const style: RevealStyle = {
    "--reveal-delay": `${revealDelay}ms`,
  };

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal scroll-reveal--${variant} ${className}`}
      data-revealed={isRevealed ? "" : undefined}
      style={style}
    >
      {children}
    </div>
  );
}
