import { Outlet, useLocation } from "@tanstack/react-router";
import ToastProvider from "../components/ToastProvider";
import Header from "../components/Header";

export default function RootLayout() {
  const location = useLocation();
  const isProjectRoute = location.pathname.startsWith("/project/");

  return (
    <ToastProvider>
      <main className="min-h-screen w-full bg-bg font-sans text-text">
        {!isProjectRoute && <Header />}
        <Outlet />
      </main>
    </ToastProvider>
  );
}
