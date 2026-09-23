import { useEffect, useRef, type RefObject } from "react";
import { portfolioData } from "../data/portfolio";
import cvUrl from "../assets/johan-carrasco-cv.pdf";
import Icon from "./Icon";

interface NavItem {
  href: string;
  label: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

interface ConnectItem {
  key: string;
  label: string;
  href: string;
  external?: boolean;
  download?: string;
}

const FOCUSABLE_SELECTOR = "a[href], button:not([disabled])";
const GROUP_LABEL_CLASS = "text-sm leading-none text-muted";
const LINK_CLASS =
  "animate-menu-item focus-link block py-2 text-3xl leading-snug font-medium text-text transition-motion hoverable:hover:text-accent";

const { contact } = portfolioData;

const connectItems: ConnectItem[] = [
  ...contact.social.map((social) => ({
    key: social.icon,
    label: social.icon === "linkedin" ? "LinkedIn" : "GitHub",
    href: social.href,
    external: true,
  })),
  { key: "mail", label: "Correo", href: `mailto:${contact.email}` },
  {
    key: "cv",
    label: "CV",
    href: cvUrl,
    external: true,
    download: "johan-carrasco-cv.pdf",
  },
];

interface MenuLinkProps {
  href: string;
  label: string;
  delay: number;
  onSelect: () => void;
  external?: boolean;
  download?: string;
}

function MenuLink({
  href,
  label,
  delay,
  onSelect,
  external,
  download,
}: MenuLinkProps) {
  return (
    <li>
      <a
        href={href}
        onClick={onSelect}
        style={{ animationDelay: `${delay}ms` }}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        download={download}
        className={LINK_CLASS}
      >
        {label}
      </a>
    </li>
  );
}

export default function MobileMenu({
  navItems,
  onClose,
  triggerRef,
}: MobileMenuProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [triggerRef]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        FOCUSABLE_SELECTOR,
      );
      if (!focusables?.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 48rem)");
    const handleDesktopChange = () => {
      if (desktopQuery.matches) onClose();
    };

    handleDesktopChange();
    desktopQuery.addEventListener("change", handleDesktopChange);
    return () => desktopQuery.removeEventListener("change", handleDesktopChange);
  }, [onClose]);

  return (
    <div
      ref={dialogRef}
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-label="Menú"
      className="animate-menu-panel fixed inset-0 z-[60] flex flex-col bg-bg md:hidden"
    >
      <div className="w-full border-b border-border/70">
        <div className="mx-auto max-w-4xl px-3 pt-3">
          <div className="flex h-14 items-center justify-end">
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Cerrar menú"
              onClick={onClose}
              className="focus-control inline-flex h-9 w-9 items-center justify-center rounded-none text-text transition-motion hoverable:hover:text-accent"
            >
              <Icon name="close" size={16} />
            </button>
          </div>
        </div>
      </div>

      <nav
        aria-label="Navegación móvil"
        className="min-h-0 flex-1 overscroll-contain overflow-y-auto"
      >
        <div className="mx-auto max-w-4xl px-3 pt-7 pb-10">
          <p className={GROUP_LABEL_CLASS}>Secciones</p>
          <ul className="mt-2 flex flex-col">
            {navItems.map((item, index) => (
              <MenuLink
                key={item.href}
                href={item.href}
                label={item.label}
                delay={30 + index * 25}
                onSelect={onClose}
              />
            ))}
          </ul>

          <p className={`mt-12 ${GROUP_LABEL_CLASS}`}>Conectar</p>
          <ul className="mt-2 flex flex-col">
            {connectItems.map((item, index) => (
              <MenuLink
                key={item.key}
                href={item.href}
                label={item.label}
                delay={30 + (navItems.length + index) * 25}
                onSelect={onClose}
                external={item.external}
                download={item.download}
              />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
