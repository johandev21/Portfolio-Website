import { Outlet } from "@tanstack/react-router";
import ToastProvider from "../components/ToastProvider";
import Header from "../components/Header";
import BackToTop from "../components/BackToTop";

export default function RootLayout() {
  return (
    <ToastProvider>
      <main className="min-h-screen w-full bg-bg font-sans text-text">
        <Header />
        <Outlet />
        <BackToTop />
      </main>
    </ToastProvider>
  );
}
