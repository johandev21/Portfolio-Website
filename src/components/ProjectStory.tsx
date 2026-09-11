import ReactMarkdown from "react-markdown";
import type { Project } from "../types";

/**
 * Rendered statically (no hydration directive in the Astro page), so the
 * Markdown is turned into HTML at build time and ships zero JavaScript.
 */
export default function ProjectStory({ project }: { project: Project }) {
  const details = project.detailsMarkdown || project.description || "";

  return (
    <div className="mr-auto w-full max-w-3xl">
      {details && (
        <section aria-label="Detalles del proyecto">
          <div className="typeset project-detail-prose text-sm md:text-base">
            <ReactMarkdown>{details}</ReactMarkdown>
          </div>
        </section>
      )}
    </div>
  );
}
