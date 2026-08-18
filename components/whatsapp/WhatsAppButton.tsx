"use client";

import { FaWhatsapp } from "react-icons/fa";

const PHONE_NUMBER = "+91 92010 04208";

const DEFAULT_MESSAGE =
  "Hi CloudNexus! I'm interested in your services. Please share more information.";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      title="Chat with us on WhatsApp"
      aria-label="Chat with CloudNexus on WhatsApp"
      className="
        fixed
        bottom-18
        right-7
        z-5
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-xl
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-2xl
        active:scale-95
        focus:outline-none
        focus:ring-4
        focus:ring-green-300
      "
    >
      <FaWhatsapp className="text-3xl" />
    </button>
  );
}