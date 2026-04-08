import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black">
      <div className="flex flex-col items-center gap-6">
        <div className="relative animate-[fadeInScale_0.5s_ease-out_both]">
          <div className="relative h-12 w-48 sm:h-14 sm:w-56">
            <Image
              src="/asset/cn-logo.png"
              alt="Cloud Nexus"
              className="object-contain dark:invert dark:hue-rotate-180"
              fill
              sizes="224px"
              priority
            />
          </div>
        </div>

        <div className="flex items-center gap-1.5 animate-[fadeIn_0.4s_ease-out_0.3s_both]">
          <div className="h-1.5 w-1.5 rounded-full bg-[#215B97] animate-[pulse_1.2s_ease-in-out_infinite]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#215B97] animate-[pulse_1.2s_ease-in-out_0.2s_infinite]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#215B97] animate-[pulse_1.2s_ease-in-out_0.4s_infinite]" />
        </div>
      </div>
    </div>
  );
}
