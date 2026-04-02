import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    default: "CN",
    template: "%s | CN",
  },
  description: "CN — Company website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", "font-sans", geist.variable)}
    >
      <body suppressHydrationWarning className={cn("flex min-h-screen flex-col", GeistSans.className)}>
        <ThemeProvider>
          {/* Marketing pages = pure RSC tree, no Redux hydration overhead */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
