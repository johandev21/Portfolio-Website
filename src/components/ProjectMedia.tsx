import type { MediaItem } from "../types";

interface ProjectMediaProps {
  item: MediaItem;
  priority?: boolean;
}

export default function ProjectMedia({
  item,
  priority = false,
}: ProjectMediaProps) {
  const isVideo = item.type === "video";

  return (
    <figure className="flex flex-col gap-2">
      <div
        className={`aspect-video w-full overflow-hidden border border-border ${
          isVideo ? "bg-black" : "bg-surface"
        }`}
      >
        {isVideo ? (
          <video
            aria-label={item.title}
            className="focus-surface h-full w-full object-contain"
            controls
            playsInline
            poster={item.poster}
            preload="metadata"
          >
            {item.src && <source src={item.src} type="video/mp4" />}
            Tu navegador no puede reproducir este video.
          </video>
        ) : (
          <img
            src={item.src}
            alt={item.title}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        )}
      </div>
      {item.caption && (
        <figcaption className="text-xs leading-normal text-muted">
          {item.caption}
        </figcaption>
      )}
    </figure>
  );
}

