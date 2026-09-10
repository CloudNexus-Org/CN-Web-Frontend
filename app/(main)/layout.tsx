import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { LazyWidgets } from "@/components/lazy-widgets";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <LazyWidgets />
    </>
  );
}
