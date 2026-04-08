import { FC } from 'react';
import Image from 'next/image';

const clients = [
  { name: 'Deutsche Bank', logo: '/clients/deutsche-bank.svg' },
  { name: 'Bank of America', logo: '/clients/bank-of-america.svg' },
  { name: 'NEC', logo: '/clients/nec.svg' },
  { name: 'TD Bank', logo: '/clients/td-bank.svg' },
  { name: 'CVS Health', logo: '/clients/cvs-health.svg' },
  { name: 'Black Knight', logo: '/clients/black-knight.svg' },
  { name: 'Maniyar INC', logo: '/clients/maniyar-inc.svg' },
  { name: 'ITEInfotech', logo: '/clients/iteinfotech.svg' },
  { name: 'Y&L Consulting', logo: '/clients/yl-consulting.svg' },
  { name: 'Bhashini', logo: '/clients/bhashini.svg' },
  { name: 'Rekkoz', logo: '/clients/rekkoz.svg' },
  { name: 'Karmyogi Bharat', logo: '/clients/karmyogi-bharat.svg' },
  { name: 'VSN', logo: '/clients/vsn.svg' },
];

export const TopClients: FC = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-white dark:bg-black overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 md:px-8 flex flex-col items-center justify-center gap-10">

        <div className="relative w-full flex items-center justify-center">
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

          <div className="group flex overflow-hidden w-full [--gap:3rem] md:[--gap:4rem] [--duration:40s] gap-[var(--gap)]">
            {Array(2).fill(0).map((_, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]"
              >
                {clients.map((client, j) => (
                  <div
                    key={j}
                    className="flex items-center justify-center shrink-0 opacity-40 hover:opacity-90 dark:opacity-50 dark:hover:opacity-100 transition-opacity duration-300 cursor-default"
                    title={client.name}
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={140}
                      height={40}
                      className="h-8 sm:h-10 w-auto object-contain dark:invert"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <p className="text-[12px] md:text-[13px] font-medium text-black/40 dark:text-[#8b8b8b] tracking-wide text-center">
          Trusted by enterprises and fast-growing companies worldwide
        </p>

      </div>
    </section>
  );
};
