export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#3b82f6] border-t-transparent" />
        <p className="text-sm text-black/40 dark:text-white/40">Loading...</p>
      </div>
    </div>
  );
}
