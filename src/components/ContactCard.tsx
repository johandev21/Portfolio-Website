import { createElement, useState, type FormEvent } from "react";
import { Button } from "@base-ui/react/button";
import { Input } from "@base-ui/react/input";
import { Toast } from "@base-ui/react/toast";
import { ChevronUp } from "lucide";
import type { ContactData } from "../types";
import cvUrl from "../assets/johan-carrasco-cv.pdf";
import Icon from "./Icon";

type ContactCardProps = {
  contact: ContactData;
};

type Web3FormsResponse = {
  success?: boolean;
};

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "YOUR_WEB3FORMS_ACCESS_KEY";

const ERROR_MESSAGE =
  "Algo salió mal al enviar tu mensaje. Por favor, inténtalo de nuevo.";

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
  const toastManager = Toast.useToastManager();

  const mailtoUrl = createMailtoUrl(contact.email, name, email, message);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

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
        toastManager.add({
          type: "error",
          title: "Error",
          description: ERROR_MESSAGE,
          actionProps: {
            children: "Enviar usando mi correo",
            onClick: () => window.open(mailtoUrl, "_blank"),
          },
        });
        return;
      }

      form.reset();
      setName("");
      setEmail("");
      setMessage("");
      toastManager.add({
        type: "success",
        title: "Mensaje enviado",
        description: "Gracias por escribirme.",
      });
    } catch {
      toastManager.add({
        type: "error",
        title: "Error",
        description: ERROR_MESSAGE,
        actionProps: {
          children: "Enviar usando mi correo",
          onClick: () => window.open(mailtoUrl, "_blank"),
        },
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
              className="group inline-flex rounded-none transition-motion focus-visible:ring-2 focus-visible:ring-text-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg motion-reduce:transition-none"
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
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir correo"
                className="group flex cursor-pointer flex-row items-center gap-1 rounded-none transition-motion focus-visible:ring-2 focus-visible:ring-text-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg motion-reduce:transition-none"
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
              <a
                key={button.label}
                href={cvUrl}
                download="johan-carrasco-cv.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="Descargar CV"
                className="group flex cursor-pointer flex-row items-center gap-1 rounded-none transition-motion active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-text-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg motion-reduce:active:scale-none motion-reduce:transition-none"
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
            ),
          )}
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 bg-surface/60 p-4 backdrop-blur-[1.75px] sm:gap-5">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          <label className="flex flex-col gap-2 text-sm leading-5 text-muted">
            Nombre
            <Input
              type="text"
              name="name"
              value={name}
              onValueChange={(value) => {
                setName(value);
              }}
              autoComplete="name"
              maxLength={80}
              placeholder="Tu nombre"
              required
              className="min-h-10 rounded-none border border-border/70 bg-transparent px-3 py-2 text-sm leading-5 text-text outline-none transition-motion placeholder:text-muted hover:border-border focus:border-text-soft/40 focus-visible:ring-2 focus-visible:ring-accent/10 disabled:cursor-not-allowed disabled:border-border/40 disabled:bg-bg/20 disabled:text-muted motion-reduce:transition-none"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm leading-5 text-muted">
            Correo
            <Input
              type="email"
              name="email"
              value={email}
              onValueChange={(value) => {
                setEmail(value);
              }}
              autoComplete="email"
              maxLength={254}
              placeholder="Tu correo"
              required
              className="min-h-10 rounded-none border border-border/70 bg-transparent px-3 py-2 text-sm leading-5 text-text outline-none transition-motion placeholder:text-muted hover:border-border focus:border-text-soft/40 focus-visible:ring-2 focus-visible:ring-accent/10 disabled:cursor-not-allowed disabled:border-border/40 disabled:bg-bg/20 disabled:text-muted motion-reduce:transition-none"
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
            }}
            maxLength={2000}
            required
            spellCheck
            placeholder={contact.placeholder}
            aria-label="Mensaje"
            className="h-full min-h-[112px] w-full resize-none rounded-none border border-border/70 bg-transparent px-3 py-2.5 pr-14 pb-12 text-sm leading-5 text-text outline-none transition-motion placeholder:text-muted hover:border-border focus:border-text-soft/40 focus-visible:ring-2 focus-visible:ring-accent/10 disabled:cursor-not-allowed disabled:border-border/40 disabled:bg-bg/20 disabled:text-muted motion-reduce:transition-none"
          />
          <Button
            type="submit"
            aria-label={isSubmitting ? "Enviando mensaje" : "Enviar mensaje"}
            aria-busy={isSubmitting}
            disabled={isSubmitting}
            className="group absolute bottom-3 right-3 flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-none bg-action transition-motion hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-text-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg motion-reduce:active:scale-none motion-reduce:transition-none"
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
          </Button>
        </div>
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          aria-hidden="true"
          className="hidden"
        />
      </div>
    </form>
  );
}
