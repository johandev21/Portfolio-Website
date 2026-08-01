import type { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="w-full font-serif text-2xl leading-normal text-text">{children}</h2>
  );
}
