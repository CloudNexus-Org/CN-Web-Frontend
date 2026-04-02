import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { ReduxProvider } from "@/store/provider";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <Navbar />
      {/* Main content */}
      <main className="flex-1">{children}</main>
      <Footer />
    </ReduxProvider>
  );
}
