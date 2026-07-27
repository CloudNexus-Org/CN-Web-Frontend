"use client";

import dynamic from "next/dynamic";

const WhatsAppButton = dynamic(
  () => import("@/components/whatsapp/WhatsAppButton"),
  { ssr: false },
);

const ChatbotWidget = dynamic(
  () =>
    import("@/components/chatbot/ChatbotWidget").then((mod) => ({
      default: mod.ChatbotWidget,
    })),
  { ssr: false },
);

export function LazyWidgets() {
  return (
    <>
      <WhatsAppButton />
      <ChatbotWidget />
    </>
  );
}
