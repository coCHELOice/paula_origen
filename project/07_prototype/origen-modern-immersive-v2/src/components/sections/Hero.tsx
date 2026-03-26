
import Button from '../ui/Button';
import { content } from '../../data/origenLanding';

export default function Hero() {
  const { hero } = content;
  
  return (
    <section id="hero" className="relative h-[100svh] w-full flex items-center pt-24 pb-16 overflow-hidden bg-[#151515] scale-on-hover-container">
      {/* Immersive Cinematic Background (Parallax) */}
      <div className="absolute inset-0 w-full h-[120%] -top-[10%] z-0 parallax-bg" data-speed="0.10">
        <video
          autoPlay
          loop
          muted
          playsInline
          onTimeUpdate={(e) => {
            // Enforce max 10s loop duration 
            if (e.currentTarget.currentTime >= 10) {
              e.currentTarget.currentTime = 0;
            }
          }}
          className="w-full h-full object-cover brightness-[1.1] saturate-[0.85] contrast-[0.95] sepia-[0.10] hue-rotate-[-5deg] animate-video-in"
          src="/7866423-uhd_3840_2160_25fps.mp4"
        />
        {/* Cinematic overlays: lift blacks with warm multiply, dark overlay, and bottom gradient */}
        <div className="absolute inset-0 bg-[#A67C52]/10 mix-blend-color"></div>
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#151515]/90 to-transparent"></div>
      </div>

      {/* Asymmetrical Layout Content (Max width 40%) */}
      <div className="relative z-10 w-full mx-auto px-8 md:px-[8vw] flex flex-col items-start justify-center h-full">
        <div className="flex flex-col items-start md:max-w-[45vw] lg:max-w-[40vw]">
          
          <span className="animate-hero-up font-sans text-xs md:text-sm tracking-[0.25em] text-[#EBE9E2]/70 uppercase mb-8">
            {hero.eyebrow}
          </span>
          
          <h1 className="animate-hero-up font-serif text-[46px] md:text-[5rem] lg:text-[6rem] leading-[1.0] tracking-[-0.02em] mb-10 text-[#FDFBFA] drop-shadow-sm">
            {hero.title}
          </h1>
          
          <p className="animate-hero-up-delay-1 font-sans text-lg md:text-xl text-[#EBE9E2]/80 leading-[1.6] mb-14 font-light tracking-[0.03em]">
            {hero.subtitle}
          </p>
          
          <div className="animate-hero-up-delay-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-6 sm:gap-8 w-full sm:w-auto">
            <Button variant="primary" href="#reserva" className="w-full sm:w-auto shadow-lg shadow-black/20">
              {hero.ctaPrimary}
            </Button>
            <Button variant="secondary" href="#programa" className="w-full sm:w-auto">
              {hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
