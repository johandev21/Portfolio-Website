import { createElement, useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "lucide";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  const storedTheme = window.localStorage.getItem("theme");

  if (storedTheme === "light" || storedTheme === "dark") return storedTheme;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function renderIcon(iconNode: typeof Sun) {
  return createElement(
    "svg",
    {
      "aria-hidden": true,
      className: "h-4 w-4",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
    },
    iconNode.map(([tag, attributes], index) =>
      createElement(tag, { ...attributes, key: index }),
    ),
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const updatedTheme = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem("theme", updatedTheme);
    setTheme(updatedTheme);
  }, [theme]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      const isTyping =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        (target instanceof HTMLElement && target.isContentEditable);

      if (
        event.key.toLowerCase() !== "d" ||
        event.repeat ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        isTyping
      ) {
        return;
      }

      toggleTheme();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleTheme]);

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label={`Cambiar a tema ${nextTheme === "dark" ? "oscuro" : "claro"}`}
      aria-keyshortcuts="d"
      onClick={toggleTheme}
      className="focus-control inline-flex h-9 w-9 items-center justify-center rounded-none text-text-soft transition-motion hover:text-accent"
    >
      {theme === "dark" ? renderIcon(Sun) : renderIcon(Moon)}
    </button>
  );
}
