import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "sofiamarianolima@hotmail.com";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown; // honeypot — real visitors never fill this in
}

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return null;
  }
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
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

  const transporter = getTransporter();
  if (!transporter) {
    console.error("SMTP não configurado: defina SMTP_HOST, SMTP_PORT, SMTP_USER e SMTP_PASS.");
    return NextResponse.json(
      { ok: false, error: "Envio de e-mail indisponível no momento. Tente novamente mais tarde." },
      { status: 503 }
    );
  }

  try {
    await transporter.sendMail({
      from: `"SOFSPACE — Site" <${process.env.SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email.trim(),
      subject: `Novo contato pelo site — ${name.trim()}`,
      text: `Nome: ${name.trim()}\nE-mail: ${email.trim()}\n\nMensagem:\n${message.trim()}`,
      html: `<p><strong>Nome:</strong> ${escapeHtml(name.trim())}</p><p><strong>E-mail:</strong> ${escapeHtml(email.trim())}</p><p><strong>Mensagem:</strong></p><p>${escapeHtml(message.trim()).replace(/\n/g, "<br />")}</p>`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Falha ao enviar e-mail de contato:", error);
    return NextResponse.json(
      { ok: false, error: "Não foi possível enviar sua mensagem. Tente novamente mais tarde." },
      { status: 502 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
