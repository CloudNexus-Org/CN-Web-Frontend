import Spline from '@splinetool/react-spline';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side (Content) */}
          <div className="flex flex-col items-start gap-6 relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-tight">
              Pioneering Innovation <br className="hidden md:block" /> With Smart Solutions
            </h1>
            {/* <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              We design and build scalable digital solutions including web applications, cloud infrastructure, data platforms, and modern software systems.
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <Button size="lg" className="h-12 px-8 text-base rounded-full shadow-sm">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base rounded-full bg-background/50 backdrop-blur-sm border-border/50 shadow-sm hover:bg-accent/50">
                Explore Services
              </Button>
            </div>
          </div>

          {/* Right Side (Visual) */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-end">
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
