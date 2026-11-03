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
      {isVideo ? (
        <div className="aspect-video w-full overflow-hidden border border-border bg-black">
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
        </div>
      ) : (
        <a
          href={item.src}
          data-lightbox-item
          data-lightbox-title={item.title}
          data-lightbox-caption={item.caption}
          aria-label={`Ampliar imagen: ${item.title}`}
          className="focus-surface group relative block aspect-video w-full cursor-zoom-in overflow-hidden border border-border bg-surface"
        >
          <img
            src={item.src}
            alt={item.title}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            draggable="false"
            className="h-full w-full object-cover object-top"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-2.5 bottom-2.5 flex h-8 w-8 items-center justify-center border border-white/25 bg-black/55 text-white opacity-70 transition-motion group-hover:opacity-100 group-focus:opacity-100"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.75"
              viewBox="0 0 24 24"
            >
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          </span>
        </a>
      )}
      {item.caption && (
        <figcaption className="text-xs leading-normal text-muted">
          {item.caption}
        </figcaption>
      )}
    </figure>
  );
}
