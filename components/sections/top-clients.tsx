import { FC } from 'react';
import { Hexagon } from 'lucide-react';

const clients = [
  {
    name: 'pwc',
    logo: (
      <div className="flex items-start font-serif text-2xl sm:text-3xl font-bold lowercase tracking-tight">
        pwc
        <div className="flex mt-1.5 ml-0.5">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-current" />
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-current opacity-40 ml-0.5" />
        </div>
      </div>
    )
  },
  {
    name: 'PiKa',
    logo: <div className="text-2xl sm:text-3xl font-medium tracking-wide">PiKa</div>
  },
  {
    name: 'Humata',
    logo: (
      <div className="flex items-center gap-2 text-xl sm:text-2xl font-semibold tracking-tight">
        <div className="relative flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7">
          <Hexagon className="w-full h-full text-current" strokeWidth={2.5} />
          <span className="absolute text-[10px] sm:text-xs font-bold font-mono mt-0.5">/</span>
        </div>
        Humata
      </div>
    )
  },
  {
    name: 'udio',
    logo: <div className="text-2xl sm:text-3xl font-black tracking-tighter">udio</div>
  },
  {
    name: 'LangChain',
    logo: (
      <div className="flex items-center gap-1.5 text-xl sm:text-2xl font-bold tracking-tight">
        <span className="text-lg sm:text-xl grayscale opacity-80">🦜🔗</span> LangChain
      </div>
    )
  },
  {
    name: 'Resend',
    logo: <div className="text-xl sm:text-2xl font-semibold tracking-tight">Resend</div>
  },
];

export const TopClients: FC = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-black overflow-hidden flex flex-col items-center ">
      <div className="w-full max-w-7xl px-4 md:px-8 flex flex-col items-center justify-center gap-10 ">

        <div className="relative w-full flex items-center justify-center">
          {/* Mask Gradients for fade out effect on edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          <div className="group flex overflow-hidden w-full [--gap:2.5rem] md:[--gap:4rem] [--duration:30s] gap-[var(--gap)]">
            {Array(4).fill(0).map((_, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]"
              >
                {clients.map((client, j) => (
                  <div
                    key={j}
                    className="flex items-center justify-center text-[#8b8b8b] hover:text-[#ededed] transition-colors duration-300 cursor-default shrink-0"
                  >
                    {client.logo}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <p className="text-[14px] md:text-[15px] font-medium text-[#8b8b8b] tracking-wide text-center">
          Trusted by fast-growing companies worldwide
        </p>

      </div>
    </section>
  );
}
