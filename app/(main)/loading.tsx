export default function Loading() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Hero Section Shimmer */}
      <div className="space-y-4 animate-pulse">
        <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded-full" />
        <div className="h-10 w-2/3 sm:w-1/2 bg-slate-200 dark:bg-slate-800 rounded-lg" />
        <div className="h-6 w-full sm:w-3/4 bg-slate-200 dark:bg-slate-800 rounded-lg" />
        <div className="h-6 w-5/6 sm:w-2/3 bg-slate-200 dark:bg-slate-800 rounded-lg" />
      </div>

      {/* Grid Content Shimmer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-pulse pt-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="border border-slate-100 dark:border-slate-800/60 rounded-2xl p-6 space-y-5 bg-card">
            {/* Image/Icon Block */}
            <div className="h-12 w-12 bg-slate-200 dark:bg-slate-800 rounded-xl" />
            
            {/* Text lines */}
            <div className="space-y-3">
              <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-md" />
              <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded-md" />
              <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-800 rounded-md" />
            </div>
            
            {/* Button placeholder */}
            <div className="h-10 w-28 bg-slate-200 dark:bg-slate-800 rounded-lg pt-2" />
          </div>
        ))}
      </div>

      {/* Additional Text Shimmer block */}
      <div className="space-y-4 animate-pulse pt-6">
        <div className="h-8 w-48 bg-slate-200 dark:bg-slate-800 rounded-lg" />
        <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded-md" />
        <div className="h-4 w-11/12 bg-slate-200 dark:bg-slate-800 rounded-md" />
      </div>
    </div>
  );
}
