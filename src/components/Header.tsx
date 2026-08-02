import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;

      if (isMenuOpen || currentScrollY < 96) {
        setIsHidden(false);
      } else if (scrollingDown && currentScrollY - lastScrollY.current > 4) {
        setIsHidden(true);
      } else if (!scrollingDown && lastScrollY.current - currentScrollY > 4) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

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
      className={`fixed inset-x-0 top-0 z-40 px-4 pt-3 transition-motion md:px-6 ${isHidden ? "md:-translate-y-full md:opacity-0 md:pointer-events-none" : ""}`}
    >
      <div className="mx-auto max-w-[860px] border border-border/70 bg-bg/85 shadow-lg backdrop-blur-md">
        <div className="flex h-14 items-center justify-between px-4 md:px-5">
          <a
            href="#inicio"
            onClick={closeMenu}
            className="rounded-sm font-serif text-lg leading-none text-text transition-motion hover:text-accent focus-visible:ring-2 focus-visible:ring-text-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            JC
            <span className="sr-only">Johan Carrasco</span>
          </a>

          <nav aria-label="Navegación principal" className="hidden md:block">
            <ul className="flex items-center gap-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-sm text-xs leading-none text-muted transition-motion hover:text-text focus-visible:ring-2 focus-visible:ring-text-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="group flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-sm text-text-soft transition-motion hover:text-accent focus-visible:ring-2 focus-visible:ring-text-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:hidden"
            >
              <span
                aria-hidden="true"
                className={`h-px w-4 bg-current transition-motion ${isMenuOpen ? "translate-y-1 rotate-45" : ""}`}
              />
              <span
                aria-hidden="true"
                className={`h-px w-4 bg-current transition-motion ${isMenuOpen ? "-translate-y-1 -rotate-45" : ""}`}
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
                    className="block rounded-sm px-2 py-2.5 text-sm text-muted transition-motion hover:bg-surface hover:text-text focus-visible:ring-2 focus-visible:ring-text-soft"
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
