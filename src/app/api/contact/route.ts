import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "sofiamarianolima@hotmail.com";
// Resend's shared sandbox sender — works with no domain verification as
// long as the account is only sending to its own verified account email.
const FROM_ADDRESS = process.env.RESEND_FROM || "SOFSPACE — Site <onboarding@resend.dev>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown; // honeypot — real visitors never fill this in
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Corpo da requisição inválido." }, { status: 400 });
  }

  const { name, email, message, company } = body;

  // Honeypot: bots tend to fill every field, humans never see this one.
  if (typeof company === "string" && company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !message.trim() ||
    !EMAIL_RE.test(email.trim()) ||
    name.length > 200 ||
    email.length > 200 ||
    message.length > 5000
  ) {
    return NextResponse.json({ ok: false, error: "Preencha os campos corretamente." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY não configurada.");
    return NextResponse.json(
      { ok: false, error: "Envio de e-mail indisponível no momento. Tente novamente mais tarde." },
      { status: 503 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: CONTACT_TO_EMAIL,
    replyTo: trimmedEmail,
    subject: `Novo contato pelo site — ${trimmedName}`,
    text: `Nome: ${trimmedName}\nE-mail: ${trimmedEmail}\n\nMensagem:\n${trimmedMessage}`,
    html: `<p><strong>Nome:</strong> ${escapeHtml(trimmedName)}</p><p><strong>E-mail:</strong> ${escapeHtml(trimmedEmail)}</p><p><strong>Mensagem:</strong></p><p>${escapeHtml(trimmedMessage).replace(/\n/g, "<br />")}</p>`,
  });

  if (error) {
    console.error("Falha ao enviar e-mail de contato:", error);
    return NextResponse.json(
      { ok: false, error: "Não foi possível enviar sua mensagem. Tente novamente mais tarde." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
