"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full border-b border-[var(--color-line-strong)] bg-transparent py-3 text-base outline-none transition-colors focus:border-[var(--color-ink)]";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Não foi possível enviar sua mensagem.");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Não foi possível enviar sua mensagem.");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col gap-3 border border-[var(--color-line)] p-8">
        <p className="font-serif-display text-2xl">Mensagem enviada.</p>
        <p className="text-sm leading-relaxed text-[var(--color-ink-soft)]">
          Obrigada pelo contato, Sofia responde em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-xs tracking-[0.18em] text-[var(--color-ink-faint)]">
          NOME
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={`focus-ring ${inputClass}`}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-xs tracking-[0.18em] text-[var(--color-ink-faint)]">
          E-MAIL
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={`focus-ring ${inputClass}`}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs tracking-[0.18em] text-[var(--color-ink-faint)]">
          CONTE UM POUCO SOBRE O SEU PROJETO
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`focus-ring resize-none ${inputClass}`}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-[var(--color-ink-soft)]">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="focus-ring mt-2 inline-flex w-fit items-center border border-[var(--color-ink)] px-8 py-4 text-xs tracking-[0.2em] transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] disabled:opacity-50"
      >
        {status === "sending" ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
      </button>
    </form>
  );
}
