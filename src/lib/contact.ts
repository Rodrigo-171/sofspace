const WHATSAPP_NUMBER = "5511951758210";
const WHATSAPP_DEFAULT_MESSAGE = "Olá! Gostaria de conversar sobre um projeto.";

export const WHATSAPP_DISPLAY = "+55 11 95175-8210";

export function getWhatsAppLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
