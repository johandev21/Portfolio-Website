import { useEffect } from "react";

export type VariantKey = "A" | "B" | "C";
export type PreviewOption = "media" | "wireframe" | "text";
export type DensityOption = "comfortable" | "compact";

interface VariantInfo {
  key: VariantKey;
  name: string;
}

const VARIANTS: VariantInfo[] = [
  { key: "A", name: "Variante A — Vertical Editorial" },
  { key: "B", name: "Variante B — Asimétrico Dividido" },
  { key: "C", name: "Variante C — Cuadrícula Enmarcada" },
];

interface PrototypeSwitcherProps {
  currentVariant: VariantKey;
  onVariantChange: (variant: VariantKey) => void;
  previewMode: PreviewOption;
  onPreviewChange: (preview: PreviewOption) => void;
  densityMode: DensityOption;
  onDensityChange: (density: DensityOption) => void;
}

export default function PrototypeSwitcher({
  currentVariant,
  onVariantChange,
  previewMode,
  onPreviewChange,
  densityMode,
  onDensityChange,
}: PrototypeSwitcherProps) {
  const currentIndex = VARIANTS.findIndex((v) => v.key === currentVariant);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (
        activeTag === "input" ||
        activeTag === "textarea" ||
        (document.activeElement as HTMLElement)?.isContentEditable
      ) {
        return;
      }
      if (e.key === "ArrowLeft") {
        const nextIdx = (currentIndex - 1 + VARIANTS.length) % VARIANTS.length;
        onVariantChange(VARIANTS[nextIdx].key);
      } else if (e.key === "ArrowRight") {
        const nextIdx = (currentIndex + 1) % VARIANTS.length;
        onVariantChange(VARIANTS[nextIdx].key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, onVariantChange]);

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + VARIANTS.length) % VARIANTS.length;
    onVariantChange(VARIANTS[nextIdx].key);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % VARIANTS.length;
    onVariantChange(VARIANTS[nextIdx].key);
  };

  return (
    <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 flex-wrap items-center gap-3 border border-border bg-bg/90 px-4 py-2 text-xs text-text shadow-xl backdrop-blur-md rounded-full">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Variante anterior"
          className="rounded px-2 py-1 bg-surface text-text hover:bg-border transition-motion cursor-pointer"
        >
          &lt;
        </button>
        <span className="font-semibold text-text whitespace-nowrap">
          {VARIANTS[currentIndex]?.name}
        </span>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Variante siguiente"
          className="rounded px-2 py-1 bg-surface text-text hover:bg-border transition-motion cursor-pointer"
        >
          &gt;
        </button>
      </div>

      <div className="hidden sm:flex items-center gap-1.5 border-l border-border pl-3">
        <span className="text-muted">Vista:</span>
        <button
          type="button"
          onClick={() => onPreviewChange("media")}
          className={`rounded px-2 py-0.5 text-xs transition-motion cursor-pointer ${
            previewMode === "media"
              ? "bg-accent text-bg font-medium"
              : "text-muted hover:text-text"
          }`}
        >
          Visual
        </button>
        <button
          type="button"
          onClick={() => onPreviewChange("wireframe")}
          className={`rounded px-2 py-0.5 text-xs transition-motion cursor-pointer ${
            previewMode === "wireframe"
              ? "bg-accent text-bg font-medium"
              : "text-muted hover:text-text"
          }`}
        >
          Esquema
        </button>
        <button
          type="button"
          onClick={() => onPreviewChange("text")}
          className={`rounded px-2 py-0.5 text-xs transition-motion cursor-pointer ${
            previewMode === "text"
              ? "bg-accent text-bg font-medium"
              : "text-muted hover:text-text"
          }`}
        >
          Texto
        </button>
      </div>

      <div className="hidden sm:flex items-center gap-1.5 border-l border-border pl-3">
        <span className="text-muted">Densidad:</span>
        <button
          type="button"
          onClick={() => onDensityChange("comfortable")}
          className={`rounded px-2 py-0.5 text-xs transition-motion cursor-pointer ${
            densityMode === "comfortable"
              ? "bg-accent text-bg font-medium"
              : "text-muted hover:text-text"
          }`}
        >
          Normal
        </button>
        <button
          type="button"
          onClick={() => onDensityChange("compact")}
          className={`rounded px-2 py-0.5 text-xs transition-motion cursor-pointer ${
            densityMode === "compact"
              ? "bg-accent text-bg font-medium"
              : "text-muted hover:text-text"
          }`}
        >
          Compacto
        </button>
      </div>
    </div>
  );
}
