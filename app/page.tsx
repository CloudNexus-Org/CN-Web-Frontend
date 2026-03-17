import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to CN",
};

export default function HomePage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Welcome to CN</h1>
        <p className="mt-2 text-muted-foreground">
          Your architecture is ready. Start building!
        </p>
      </div>
    </div>
  );
}
