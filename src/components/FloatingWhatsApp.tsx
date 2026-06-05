import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919398845947"
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-4 py-4 rounded-full bg-[var(--color-whatsapp)] text-white shadow-2xl pulse-whatsapp hover:scale-105 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden group-hover:inline text-sm font-semibold pr-1">Chat with Us</span>
    </a>
  );
}
