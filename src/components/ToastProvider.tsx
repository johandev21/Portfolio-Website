import { createElement, type ReactNode } from "react";
import { Toast } from "@base-ui/react/toast";
import { X } from "lucide";

const toastManager = Toast.createToastManager();

const closeIcon = (
  <svg
    aria-hidden="true"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    {X.map(([tag, attributes], index) =>
      createElement(tag, { ...attributes, key: index }),
    )}
  </svg>
);

function ToastList() {
  const { toasts } = Toast.useToastManager();

  return toasts.map((toast) => (
    <Toast.Root
      key={toast.id}
      toast={toast}
      className="pointer-events-auto flex w-full items-start justify-between gap-3 border border-border/70 bg-surface/95 p-3 shadow-xl backdrop-blur-sm transition-motion data-[starting-style]:translate-y-1 data-[starting-style]:opacity-0 data-[ending-style]:translate-y-1 data-[ending-style]:opacity-0 motion-reduce:transition-none"
    >
      <Toast.Content className="flex w-full items-start gap-2.5">
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <Toast.Title className="text-sm font-medium leading-5 text-text" />
          <Toast.Description className="text-sm leading-5 text-muted" />
          <Toast.Action className="focus-link mt-1 inline-flex w-fit cursor-pointer rounded-none text-sm text-text underline decoration-border underline-offset-4 transition-motion hoverable:hover:text-text motion-reduce:transition-none" />
        </div>
      </Toast.Content>
      <Toast.Close
        aria-label="Cerrar notificación"
        className="focus-control flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-none text-muted transition-motion hoverable:hover:bg-border/30 hoverable:hover:text-text motion-reduce:transition-none"
      >
        {closeIcon}
      </Toast.Close>
    </Toast.Root>
  ));
}

export default function ToastProvider({ children }: { children: ReactNode }) {
  return (
    <Toast.Provider toastManager={toastManager}>
      {children}
      <Toast.Portal>
        <Toast.Viewport className="pointer-events-none fixed right-4 top-24 z-[100] flex w-[min(calc(100vw-2rem),400px)] flex-col items-stretch gap-2 md:right-8">
          <ToastList />
        </Toast.Viewport>
      </Toast.Portal>
    </Toast.Provider>
  );
}
