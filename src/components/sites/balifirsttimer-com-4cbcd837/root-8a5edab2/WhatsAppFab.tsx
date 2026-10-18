import { WhatsAppIcon } from "../shared/icons";
import { WHATSAPP_HREF } from "./data";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Plan your Bali trip with Bali First Timer on WhatsApp"
      className="group fixed right-4 bottom-4 z-50 flex min-h-13 min-w-13 items-center justify-center rounded-full border border-white/25 bg-[#0B8E73] p-3 text-white shadow-[0_10px_30px_rgba(7,27,36,0.2)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:bg-[#08745F] hover:shadow-[0_15px_34px_rgba(7,27,36,0.28)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#09B8C8] sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
