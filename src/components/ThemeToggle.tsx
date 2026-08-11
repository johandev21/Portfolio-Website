import { createElement, useEffect, useState } from "react";
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

  const nextTheme = theme === "dark" ? "light" : "dark";

  const handleToggle = () => {
    const updatedTheme = nextTheme;
    window.localStorage.setItem("theme", updatedTheme);
    setTheme(updatedTheme);
  };

  return (
    <button
      type="button"
      aria-label={`Cambiar a tema ${nextTheme === "dark" ? "oscuro" : "claro"}`}
      onClick={handleToggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-none text-text-soft transition-motion hover:text-accent focus-visible:ring-2 focus-visible:ring-text-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      {theme === "dark" ? renderIcon(Sun) : renderIcon(Moon)}
    </button>
  );
}
