import { Marquee } from "@/components/ui/marquee";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

const reviews = [
  {
    text: "It was so easy to switch that our important emails are flying out. Everyone should be using this.",
    name: "Giovanni Keppelen",
    title: "CTO & Partner at VOA Hoteis",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    logo: "V",
    logoColor: "bg-green-500",
  },
  {
    text: "All of our customers are located in South America, so having a solution that could send emails from the region closest to our users is very important. Resend's multi-region feature is a game-changer for us.",
    name: "Sam Ducker",
    title: "Co-founder of Anyone",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    logo: "A",
    logoColor: "bg-red-500",
  },
  {
    text: "The speed and ease of integrating with the product was incredible, but what really stood out was their intricate knowledge of email and relentless support day or night. Oh and we also ended up winning Product of the week.",
    name: "Hahnbee Lee",
    title: "Co-Founder at Mintlify",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    logo: "M",
    logoColor: "bg-emerald-800",
  },
  {
    text: "As a developer I love the approach they are taking. Its so refreshing. They are also customer-centric and helpful in terms of getting you up and running, sending beautiful emails that land in the inbox.",
    name: "Zeno Rocha",
    title: "CEO at Resend",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024e",
    logo: "R",
    logoColor: "bg-zinc-800",
  },
  {
    text: "Cloud Nexus has transformed the way we handle our infrastructure. The developer experience is unmatched and the performance is incredible.",
    name: "Jane Doe",
    title: "Engineering Manager",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024f",
    logo: "C",
    logoColor: "bg-blue-500",
  }
];

const ReviewCard = ({
  text,
  name,
  title,
  avatar,
  logo,
  logoColor,
}: {
  text: string;
  name: string;
  title: string;
  avatar: string;
  logo: string;
  logoColor: string;
}) => {
  return (
    <Card className="w-[32rem] max-w-full shrink-0 rounded-2xl border-white/10 bg-black p-8 shadow-none transition-colors hover:border-white/20 sm:p-10">
      <div className="flex h-full flex-col justify-between gap-6">
        <p className="text-zinc-400 font-normal leading-relaxed text-sm sm:text-base">
          &ldquo;{text}&rdquo;
        </p>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image
              src={avatar}
              alt={name}
              width={48}
              height={48}
              className="rounded-full blur-[0.5px] grayscale transition-all hover:blur-none hover:grayscale-0"
            />
            <div
              className={cn(
                "absolute -left-2 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white ring-2 ring-black",
                logoColor
              )}
            >
              {logo}
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">{name}</span>
            <span className="text-sm font-medium text-zinc-500">{title}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24 sm:py-12 mb-12">
      {/* Subtle top gradient line to separate sections if needed */}
      {/* <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" /> */}

      <div className="mx-auto max-w-7xl">


        <div className="relative w-full">
          <Marquee pauseOnHover className="[--duration:50s]">
            {reviews.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </Marquee>

          {/* Gradient overlays for the marquee to fade out edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 max-w-xs bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 max-w-xs bg-gradient-to-l from-black to-transparent" />
        </div>
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#3b82f6]/10 border border-[#3b82f6]/20 w-fit shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_8px_#3b82f6] animate-pulse" />
            <span className="text-[13px] font-medium text-[#3b82f6] tracking-wide uppercase">Loved by builders</span>
          </div>
          <p className="text-[#8b8b8b] text-[15px]">
            Trusted by developers and businesses worldwide for mission-critical applications.
          </p>

        </div>
      </div>
    </section>
  );
}
