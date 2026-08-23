import { lazyRouteComponent } from "@tanstack/react-router";

export const ProjectDetailRouteComponent = lazyRouteComponent(
  () => import("./ProjectDetailPage"),
);

export function preloadProjectDetailPage() {
  return ProjectDetailRouteComponent.preload?.() ?? Promise.resolve();
}
