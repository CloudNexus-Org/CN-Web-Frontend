import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ReduxProvider } from "@/store/provider";
import { Navbar } from "@/components/navbar/navbar";
import { cn } from "@/lib/utils";

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
      className="antialiased"
    >
      <body className={cn("flex min-h-screen flex-col", GeistSans.className)}>
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
