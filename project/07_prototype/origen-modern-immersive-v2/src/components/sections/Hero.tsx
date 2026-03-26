import { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { content } from '../../data/origenLanding';

export default function Hero() {
  const { hero } = content;
  const videoRef = useRef<HTMLVideoElement>(null);
  const reqRef = useRef<number>();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 0.9;

    const updatePlayrate = () => {
      // Si el componente se desmontó o el video ya se pausó, cortamos el loop
      if (!videoRef.current || video.paused) return;

      const currentTime = video.currentTime;
      const PAUSE_POINT = 8.395;
      const START_SLOWDOWN = 7.0; // aprox 15-20% antes del final de este clip
      const BASE_RATE = 0.9;

      if (currentTime >= PAUSE_POINT) {
        video.pause();
        return;
      }

      if (currentTime >= START_SLOWDOWN) {
        // Normalizamos el progreso en el tramo de desaceleración (de 0 a 1)
        const t = (currentTime - START_SLOWDOWN) / (PAUSE_POINT - START_SLOWDOWN);
        // Curva: velocidad base por (1 - t^2)
        let rate = BASE_RATE * (1 - Math.pow(t, 2));
        // Límite mínimo para evitar estancamiento eterno
        rate = Math.max(0.1, rate);
        video.playbackRate = rate;
      } else if (video.playbackRate !== BASE_RATE) {
        video.playbackRate = BASE_RATE;
      }

      reqRef.current = requestAnimationFrame(updatePlayrate);
    };

    const handlePlay = () => {
      reqRef.current = requestAnimationFrame(updatePlayrate);
    };

    video.addEventListener('play', handlePlay);
    reqRef.current = requestAnimationFrame(updatePlayrate);

    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
      video.removeEventListener('play', handlePlay);
    };
  }, []);
  
  return (
    <section id="hero" className="relative h-[100svh] w-full flex items-center pt-36 md:pt-24 pb-16 overflow-hidden bg-[#151515] scale-on-hover-container">
      {/* Immersive Cinematic Background (Parallax) */}
      <div className="absolute inset-0 w-full h-[120%] -top-[10%] z-0 parallax-bg" data-speed="0.10">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover object-[75%_center] brightness-[1.1] saturate-[0.85] contrast-[0.95] sepia-[0.10] hue-rotate-[-5deg] animate-video-in"
          src="/7866423-uhd_3840_2160_25fps.mp4"
        />
        {/* Cinematic overlays: lift blacks with warm multiply, dark gradient overlay tracking from text side */}
        <div className="absolute inset-0 bg-[#A67C52]/10 mix-blend-color"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/60 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#151515] to-transparent"></div>
      </div>

      {/* Asymmetrical Layout Content (Max width 40%) */}
      <div className="relative z-10 w-full mx-auto px-8 md:px-[8vw] flex flex-col items-start justify-center h-full">
        <div className="flex flex-col items-start md:max-w-[45vw] lg:max-w-[40vw]">
          
          <span className="animate-hero-up font-sans text-xs md:text-sm tracking-[0.25em] text-[#EBE9E2]/70 uppercase mb-8 delay-100">
            {hero.eyebrow}
          </span>
          
          <h1 className="animate-hero-sync-headline font-serif text-[46px] md:text-[5rem] lg:text-[6.5rem] leading-[1.0] tracking-[-0.02em] mb-10 text-[#FDFBFA] drop-shadow-sm">
            {hero.title}
          </h1>
          
          <p className="animate-hero-sync-headline font-sans text-lg md:text-xl text-[#EBE9E2]/80 leading-[1.6] mb-14 font-light tracking-[0.03em]">
            {hero.subtitle}
          </p>
          
          <div className="animate-hero-sync-cta flex flex-col sm:flex-row items-stretch sm:items-center gap-6 sm:gap-8 w-full sm:w-auto">
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
