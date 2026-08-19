"use client";

import dynamic from "next/dynamic";

const WhatsAppButton = dynamic(
  () => import("@/components/whatsapp/WhatsAppButton"),
  { ssr: false },
);

export function LazyWidgets() {
  return (
    <>
      <WhatsAppButton />
    </>
  );
}
