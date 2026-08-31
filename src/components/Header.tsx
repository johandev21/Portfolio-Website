import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#experiencia", label: "Experiencia" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#tecnologias", label: "Tecnologías" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className="w-full px-3 pt-3 md:px-6"
    >
      <div className="mx-auto max-w-4xl">
        <div className="flex h-14 items-center justify-between">
          <nav aria-label="Navegación principal" className="hidden md:block">
            <ul className="flex items-center gap-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="focus-link rounded-none text-sm leading-none text-muted transition-motion hover:text-text"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="focus-control group relative flex h-9 w-9 items-center justify-center rounded-none text-text-soft transition-motion hover:text-accent md:hidden"
            >
              <span
                aria-hidden="true"
                className={`absolute top-1/2 left-1/2 h-px w-4 -translate-x-1/2 bg-current transition-motion ${isMenuOpen ? "rotate-45" : "-translate-y-[3px]"}`}
              />
              <span
                aria-hidden="true"
                className={`absolute top-1/2 left-1/2 h-px w-4 -translate-x-1/2 bg-current transition-motion ${isMenuOpen ? "-rotate-45" : "translate-y-[3px]"}`}
              />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Navegación móvil"
            className="border-t border-border/70 px-4 py-3 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="focus-link block rounded-none px-2 py-2.5 text-sm text-muted transition-motion hover:bg-surface hover:text-text"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
