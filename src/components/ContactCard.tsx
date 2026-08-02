import { createElement, useState, type FormEvent } from "react";
import { ChevronUp } from "lucide";
import type { ContactData } from "../types";
import Icon from "./Icon";

interface ContactCardProps {
  contact: ContactData;
}

type FormStatus = {
  type: "success" | "error";
  message: string;
} | null;

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "YOUR_WEB3FORMS_ACCESS_KEY";

function createMailtoUrl(
  recipient: string,
  name: string,
  email: string,
  message: string,
) {
  const body = [`Nombre: ${name}`, `Correo: ${email}`, "", message].join("\n");
  const query = new URLSearchParams({
    subject: "Contacto desde mi portafolio",
    body,
  });

  return `mailto:${recipient}?${query.toString()}`;
}

export default function ContactCard({ contact }: ContactCardProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>(null);

  const mailtoUrl = createMailtoUrl(contact.email, name, email, message);

  function clearStatus() {
    if (status) {
      setStatus(null);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Nuevo mensaje desde el portafolio");
    formData.append("from_name", "Sitio web del portafolio");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as Web3FormsResponse;

      if (!response.ok || !data.success) {
        setStatus({
          type: "error",
          message:
            data.message ??
            "No se pudo enviar el mensaje. Puedes usar el correo alternativo.",
        });
        return;
      }

      form.reset();
      setName("");
      setEmail("");
      setMessage("");
      setStatus({
        type: "success",
        message: "Mensaje enviado. Gracias por escribirme.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "No se pudo conectar con el servicio. Puedes usar el correo alternativo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-center justify-end gap-2 overflow-hidden border border-border/50 bg-bg/60 p-2 pt-4 backdrop-blur-[1.75px]"
    >
      <div className="flex w-full flex-wrap flex-row items-center justify-between px-4 pb-3">
        <div className="flex flex-row items-center gap-[13px]">
          {contact.social.map((social) => (
            <a
              key={social.icon}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.icon === "linkedin" ? "LinkedIn" : "GitHub"}
              className="group inline-flex rounded-sm transition-motion focus-visible:ring-2 focus-visible:ring-text-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg motion-reduce:transition-none"
            >
              <Icon
                name={social.icon}
                size={16}
                className="hoverable:group-hover:-translate-y-[1px] hoverable:group-hover:border-text-soft"
              />
            </a>
          ))}
        </div>
        <div className="flex flex-row items-center gap-4">
          {contact.buttons.map((button) =>
            button.icon === "mail" ? (
              <a
                key={button.label}
                href={mailtoUrl}
                aria-label="Abrir correo"
                className="group flex cursor-pointer flex-row items-center gap-1 rounded-sm transition-motion focus-visible:ring-2 focus-visible:ring-text-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg motion-reduce:transition-none"
              >
                <Icon
                  name={button.icon}
                  size={16}
                  className="hoverable:group-hover:border-text-soft"
                />
                <span className="whitespace-nowrap text-sm leading-normal text-muted transition-motion hoverable:group-hover:text-text">
                  {button.label}
                </span>
              </a>
            ) : (
              <button
                key={button.label}
                type="button"
                className="group flex cursor-pointer flex-row items-center gap-1 rounded-sm transition-motion active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-text-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg motion-reduce:active:scale-none motion-reduce:transition-none"
              >
                <Icon
                  name={button.icon}
                  size={16}
                  className="hoverable:group-hover:border-text-soft"
                />
                <span className="whitespace-nowrap text-sm leading-normal text-muted transition-motion hoverable:group-hover:text-text">
                  {button.label}
                </span>
              </button>
            ),
          )}
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 bg-surface/60 p-4 backdrop-blur-[1.75px] sm:gap-5">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          <label className="flex flex-col gap-2 text-sm leading-5 text-muted">
            Nombre
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                clearStatus();
              }}
              autoComplete="name"
              maxLength={80}
              placeholder="Tu nombre"
              required
              className="min-h-10 rounded-sm border border-border/70 bg-transparent px-3 py-2 text-sm leading-5 text-text outline-none transition-motion placeholder:text-muted hover:border-border focus:border-text-soft/40 focus-visible:ring-2 focus-visible:ring-accent/10 disabled:cursor-not-allowed disabled:border-border/40 disabled:bg-bg/20 disabled:text-muted motion-reduce:transition-none"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm leading-5 text-muted">
            Correo
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                clearStatus();
              }}
              autoComplete="email"
              maxLength={254}
              placeholder="Tu correo"
              required
              className="min-h-10 rounded-sm border border-border/70 bg-transparent px-3 py-2 text-sm leading-5 text-text outline-none transition-motion placeholder:text-muted hover:border-border focus:border-text-soft/40 focus-visible:ring-2 focus-visible:ring-accent/10 disabled:cursor-not-allowed disabled:border-border/40 disabled:bg-bg/20 disabled:text-muted motion-reduce:transition-none"
            />
          </label>
        </div>
        <div className="relative flex min-h-[112px] flex-row items-start justify-between">
          <textarea
            id="contact-message"
            name="message"
            rows={3}
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
              clearStatus();
            }}
            maxLength={2000}
            required
            spellCheck
            placeholder={contact.placeholder}
            aria-label="Mensaje"
            aria-describedby="contact-status"
            className="h-full min-h-[112px] w-full resize-none rounded-sm border border-border/70 bg-transparent px-3 py-2.5 pr-14 pb-12 text-sm leading-5 text-text outline-none transition-motion placeholder:text-muted hover:border-border focus:border-text-soft/40 focus-visible:ring-2 focus-visible:ring-accent/10 disabled:cursor-not-allowed disabled:border-border/40 disabled:bg-bg/20 disabled:text-muted motion-reduce:transition-none"
          />
          <button
            type="submit"
            aria-label={isSubmitting ? "Enviando mensaje" : "Enviar mensaje"}
            aria-busy={isSubmitting}
            disabled={isSubmitting}
            className="group absolute bottom-3 right-3 flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-sm bg-action transition-motion hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-text-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg motion-reduce:active:scale-none motion-reduce:transition-none"
          >
            {isSubmitting ? (
              <span
                aria-hidden="true"
                className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-action-foreground/30 border-t-action-foreground motion-reduce:animate-none"
              />
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px] text-action-foreground transition-motion hoverable:group-hover:translate-x-[1px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {ChevronUp.map(([tag, attributes], index) =>
                  createElement(tag, { ...attributes, key: index }),
                )}
              </svg>
            )}
          </button>
        </div>
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          aria-hidden="true"
          className="hidden"
        />
      </div>
      <div
        id="contact-status"
        role={status?.type === "error" ? "alert" : "status"}
        aria-live="polite"
        className={`w-full overflow-hidden px-4 text-sm transition-[max-height,opacity,translate] duration-300 ease-out motion-reduce:transition-none ${status ? "max-h-20 translate-y-0 opacity-100" : "max-h-0 -translate-y-1 opacity-0"} ${status?.type === "error" ? "text-red-400" : "text-accent"}`}
      >
        <div className="flex items-start gap-2 pb-1 pt-0.5">
          <span
            aria-hidden="true"
            className={`mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full ${status?.type === "error" ? "bg-red-400" : "bg-accent"}`}
          />
          <span>{status?.message}</span>
        </div>
      </div>
      {status?.type === "error" && (
        <a
          href={mailtoUrl}
          className="rounded-sm px-4 text-sm text-text underline decoration-border underline-offset-4 transition-motion hoverable:hover:text-accent focus-visible:ring-2 focus-visible:ring-text-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg motion-reduce:transition-none"
        >
          Enviar usando mi correo
        </a>
      )}
    </form>
  );
}
