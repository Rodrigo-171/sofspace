"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "contato@sofspace.com.br";

const inputClass =
  "w-full border-b border-[var(--color-line-strong)] bg-transparent py-3 text-base outline-none transition-colors focus:border-[var(--color-ink)]";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Novo projeto — contato via site (${name || "sem nome"})`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
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

      <button
        type="submit"
        className="focus-ring mt-2 inline-flex w-fit items-center border border-[var(--color-ink)] px-8 py-4 text-xs tracking-[0.2em] transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
      >
        ENVIAR MENSAGEM
      </button>
    </form>
  );
}
