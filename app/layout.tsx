import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationLoader } from "@/components/navigation-loader";
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
      className={cn("antialiased", GeistSans.variable)}
    >
      <body suppressHydrationWarning className={cn("flex min-h-screen flex-col", GeistSans.className)}>
        <ThemeProvider>
          <NavigationLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
