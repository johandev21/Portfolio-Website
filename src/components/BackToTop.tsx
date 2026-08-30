import { useEffect, useState, createElement } from "react";
import { ChevronUp } from "lucide";

const icon = (
  <svg
    aria-hidden="true"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    {ChevronUp.map(([tag, attributes], index) =>
      createElement(tag, { ...attributes, key: index }),
    )}
  </svg>
);

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frameId: number | null = null;

    const updateVisibility = () => {
      frameId = null;
      setIsVisible(window.scrollY > 480);
    };

    const handleScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateVisibility);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label="Volver arriba"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      onClick={handleClick}
      className={`fixed right-5 bottom-5 z-50 inline-flex h-10 w-10 items-center justify-center border border-border bg-surface/90 text-text-soft shadow-lg backdrop-blur-sm transition-motion hover:border-text-soft hover:text-text focus-visible:ring-2 focus-visible:ring-text-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:translate-y-0 motion-reduce:transition-none md:right-8 md:bottom-8 ${isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"}`}
    >
      {icon}
    </button>
  );
}
