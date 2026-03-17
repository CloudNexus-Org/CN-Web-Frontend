import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ReduxProvider } from "@/store/provider";
import { Navbar } from "@/components/navbar/navbar";
import { cn } from "@/lib/utils";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

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
      className={cn("antialiased", fontMono.variable, fontSans.variable)}
    >
      <body className="flex min-h-screen flex-col font-sans">
        <ThemeProvider>
          <ReduxProvider>
            {/* Navbar */}
            <Navbar />

            {/* Main content */}
            <main className="flex-1">{children}</main>

            {/* Footer placeholder */}
            <footer className="border-t py-6 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} CN. All rights reserved.
            </footer>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
