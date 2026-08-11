import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import RootLayout from "./pages/RootLayout";
import PortfolioHome from "./pages/PortfolioHome";
import ProjectDetailPage from "./pages/ProjectDetailPage";

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: PortfolioHome,
});

const projectDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/project/$slug",
  component: ProjectDetailPage,
});

const routeTree = rootRoute.addChildren([indexRoute, projectDetailRoute]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
