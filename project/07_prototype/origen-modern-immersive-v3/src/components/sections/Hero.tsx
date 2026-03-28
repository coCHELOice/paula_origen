import { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { content } from '../../data/origenLanding';

export default function Hero() {
  const { hero } = content;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Cinematic slow playback
    video.playbackRate = 0.85;
    
    // Ensure it plays
    const attemptPlay = () => {
      video.play().catch(() => {
        // Handle potential autoplay block
        console.log("Autoplay waiting for interaction");
      });
    };
    
    attemptPlay();
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full flex items-end sm:items-center overflow-hidden bg-[#151515] scale-on-hover-container"
      style={{ minHeight: '100svh' }}
    >
      {/* Immersive Cinematic Background */}
      <div className="absolute inset-0 w-full h-[120%] -top-[10%] z-0 parallax-bg" data-speed="0.10">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center brightness-[1.05] saturate-[0.9] contrast-[1.0] sepia-[0.05] animate-video-in"
          src="/0_Aerial_Flight_1080p.mp4"
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-[#A67C52]/5 mix-blend-color" />
        {/* Strong left gradient for desktop, full bottom gradient for mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-transparent sm:bg-gradient-to-r sm:from-[#111111] sm:via-[#111111]/60 sm:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-[#151515] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-5 sm:px-8 md:px-[8vw] pb-16 pt-28 sm:pt-32 md:pt-0 flex flex-col justify-end sm:justify-center min-h-[100svh]">
        <div className="flex flex-col items-start w-full sm:max-w-[70vw] md:max-w-[50vw] lg:max-w-[42vw] xl:max-w-[38vw]">

          <span className="animate-hero-up font-sans text-[10px] sm:text-xs tracking-[0.22em] text-[#EBE9E2]/70 uppercase mb-5 sm:mb-8">
            {hero.eyebrow}
          </span>

          <h1 className="animate-hero-sync-headline font-serif text-[clamp(2.6rem,10vw,6.5rem)] leading-[1.0] tracking-[-0.02em] mb-6 sm:mb-10 text-[#FDFBFA] drop-shadow-sm">
            {hero.title}
          </h1>

          <p className="animate-hero-sync-headline font-sans text-base sm:text-lg md:text-xl text-[#EBE9E2]/80 leading-[1.6] mb-10 sm:mb-14 font-light tracking-[0.02em] max-w-[90%] sm:max-w-none">
            {hero.subtitle}
          </p>

          <div className="animate-hero-sync-cta flex flex-col xs:flex-row items-stretch xs:items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <Button
              variant="primary"
              href="#reserva"
              className="w-full xs:w-auto text-center shadow-lg shadow-black/20"
            >
              {hero.ctaPrimary}
            </Button>
            <Button
              variant="secondary"
              href="#programa"
              className="w-full xs:w-auto text-center !text-[#FDFBFA] !border-[#FDFBFA]/30 hover:!border-[#FDFBFA]/50"
            >
              {hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
