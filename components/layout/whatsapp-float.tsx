import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export function WhatsAppFloat() {
  const t = useTranslations();

  return (
    <a
      href="https://wa.me/905360400669"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ile iletisime gec"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-green/90 focus-ring"
    >
      <MessageCircle className="h-4 w-4" />
      {t("contact.whatsapp")}
    </a>
  );
}
