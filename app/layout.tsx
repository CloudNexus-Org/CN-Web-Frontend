import type { Metadata } from "next";
import { GeistSans } from "@/lib/fonts/geist-sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationLoader } from "@/components/navigation-loader";
import { SmoothScroll } from "@/components/smooth-scroll";
import { I18nProvider } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "Cloud Nexus - Custom Software Development & IT Solutions Company",
    template: "%s | Cloud Nexus",
  },
  description:
    "Cloud Nexus is a leading software development company offering custom software, mobile app development, cloud services, AI/ML solutions, UI/UX design, and IT consulting. Based in Bhopal, India.",
  keywords: [
    "Cloud Nexus",
    "software development company",
    "custom software development",
    "mobile app development",
    "cloud services",
    "AI ML solutions",
    "IT consulting",
    "web development",
    "UI UX design",
    "DevOps",
    "SaaS development",
    "Bhopal IT company",
    "India software company",
  ],
  authors: [{ name: "Cloud Nexus Technologies" }],
  creator: "Cloud Nexus Technologies",
  publisher: "Cloud Nexus Technologies",
  metadataBase: new URL("https://cloudnexus.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cloudnexus.in",
    siteName: "Cloud Nexus",
    title: "Cloud Nexus - Custom Software Development & IT Solutions Company",
    description:
      "Cloud Nexus is a leading software development company offering custom software, mobile app development, cloud services, AI/ML solutions, UI/UX design, and IT consulting.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cloud Nexus - Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Nexus - Custom Software Development & IT Solutions",
    description:
      "Leading software development company offering custom software, mobile apps, cloud services, AI/ML solutions, and IT consulting.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
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
          <I18nProvider>
            <NavigationLoader />
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
