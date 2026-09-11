import type { ContactData } from "../types";
import ContactCard from "./ContactCard";
import ToastProvider from "./ToastProvider";

/**
 * Astro islands are isolated, so the Toast provider lives together with its
 * only consumer (the contact form) in a single hydrated island.
 */
export default function ContactIsland({ contact }: { contact: ContactData }) {
  return (
    <ToastProvider>
      <ContactCard contact={contact} />
    </ToastProvider>
  );
}
