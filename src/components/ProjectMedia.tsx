import type { MediaItem } from "../types";

interface ProjectMediaProps {
  item: MediaItem;
}

export default function ProjectMedia({ item }: ProjectMediaProps) {
  return (
    <div className="aspect-video w-full overflow-hidden border border-border bg-black">
      <video
        aria-label={item.title}
        className="focus-surface h-full w-full object-contain"
        controls
        playsInline
        poster={item.poster}
        preload="metadata"
      >
        <source src={item.src} type="video/mp4" />
        Tu navegador no puede reproducir este video.
      </video>
    </div>
  );
}
