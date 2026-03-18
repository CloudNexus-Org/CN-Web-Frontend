import Spline from '@splinetool/react-spline';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side (Content) */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-8 relative z-10 w-full">
            
            {/* Label */}
            <div className="inline-flex items-center rounded-full border border-border/40 bg-background/50 backdrop-blur-sm px-3 py-1 text-sm font-medium text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="flex h-2 w-2 rounded-full bg-blue-500/80 mr-2 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              Cloud Nexus
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.15] md:leading-[1.15] lg:leading-[1.15]">
              <span className="block animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both whitespace-nowrap text-[8.5vw] sm:text-5xl lg:text-6xl pb-1 md:pb-2">
                Pioneering Innovation.
              </span>
              <span className="flex flex-wrap justify-center lg:justify-start gap-x-3 text-muted-foreground/90 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both text-[8.5vw] sm:text-5xl lg:text-6xl">
                <span>Smart</span>
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-text-shimmer pb-1">
                  Solutions.
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 fill-mode-both pt-2">
              Building the digital infrastructure of tomorrow with precision and scale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000 fill-mode-both">
              <Button size="lg" className="rounded-md">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="rounded-md bg-background/50 backdrop-blur-sm border-border/50 hover:bg-accent/50">
                Explore Services
              </Button>
            </div>
          </div>

          {/* Right Side (Visual) */}
          <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[600px] flex items-center justify-center lg:justify-end">
            <div className="absolute inset-0 lg:-right-32 lg:scale-110 pointer-events-none sm:pointer-events-auto">
              <Spline
                scene="https://prod.spline.design/s5qNGeR6oT0MDO0i/scene.splinecode"
                className="w-full h-full object-contain"
              />

              {/* Fade out edges of the 3D scene to blend seamlessly into the pure black background */}
              <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-x-0 top-0 h-24 md:h-40 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-x-0 bottom-0 h-24 md:h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
            </div>
          </div>

        </div>
      </div>

      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl opacity-30 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-primary/20 to-transparent" />
    </section>
  );
}
