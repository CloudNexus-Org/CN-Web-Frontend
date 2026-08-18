import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Cloud Nexus - Our Story, Mission & Values",
  description:
    "Discover Cloud Nexus - a leading software development company with 200+ team members in Bhopal, India. Learn about our mission, values, and commitment to innovation.",
  alternates: { canonical: "/company" },
  openGraph: {
    title: "About Cloud Nexus - Our Story, Mission & Values",
    description:
      "Discover Cloud Nexus - a leading software development company with 200+ team members in Bhopal, India.",
    url: "https://cloudnexus.in/company",
  },
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
