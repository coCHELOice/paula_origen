import { useEffect, useRef, useState } from 'react';
import Button from '../ui/Button';
import { content } from '../../data/origenLanding';

export default function Hero() {
  const { hero } = content;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 0.80;

    // Suave fade-out antes del final → fade-in al reiniciar
    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const remaining = video.duration - video.currentTime;

      // Empieza a hacer fade-out 1.8s antes del final
      if (remaining <= 1.8 && !fading) {
        setFading(true);
      }
    };

    const handleEnded = () => {
      // Si loop=false lo manejamos nosotros para controlar la transición
      video.currentTime = 0;
      setTimeout(() => {
        video.play().catch(() => {});
        setFading(false);
      }, 400); // pequeña pausa negra en el corte para el fade-in
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    video.play().catch(() => {});

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full flex items-end sm:items-center overflow-hidden bg-[#0E0E0E]"
      style={{ minHeight: '100svh' }}
    >
      {/* ── Cinematic Background Video ── */}
      <div className="absolute inset-0 z-0">
        {/* Video con fade suave en loop */}
        <video
          ref={videoRef}
          muted
          playsInline
          className={`w-full h-full object-cover object-center transition-opacity duration-[1800ms] ease-in-out ${
            fading ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            filter: 'saturate(0.85) contrast(1.02) brightness(0.95)',
          }}
          src="/0_Aerial_Flight_1080p.mp4"
        />

        {/* ── Capa 1: viñeta lateral izquierda (donde va el texto) ── */}
        {/*   muy pronunciada en desktop, más suave en mobile           */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(10,9,8,0.75) 0%, rgba(10,9,8,0.45) 38%, rgba(10,9,8,0.12) 65%, transparent 100%)',
          }}
        />

        {/* ── Capa 2: gradiente inferior (ancla el texto en mobile) ── */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: '55%',
            background:
              'linear-gradient(to top, rgba(10,9,8,0.82) 0%, rgba(10,9,8,0.45) 40%, transparent 100%)',
          }}
        />

        {/* ── Capa 3: velo global muy sutil – levanta los negros del video ── */}
        {/*   No opaca, sólo da profundidad y mantiene el color cálido        */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(18,12,8,0.22)' }}
        />
      </div>

      {/* ── Content ── */}
      <div
        className="relative z-10 w-full px-5 sm:px-8 md:px-[8vw] pb-16 pt-28 sm:pt-32 md:pt-0
                   flex flex-col justify-end sm:justify-center"
        style={{ minHeight: '100svh' }}
      >
        <div className="flex flex-col items-start w-full sm:max-w-[70vw] md:max-w-[52vw] lg:max-w-[44vw] xl:max-w-[40vw]">

          <span className="animate-hero-up font-sans text-[10px] sm:text-xs tracking-[0.24em] text-[#EBE9E2]/65 uppercase mb-5 sm:mb-8">
            {hero.eyebrow}
          </span>

          <h1 className="animate-hero-sync-headline font-serif text-[clamp(2.6rem,10vw,6.5rem)] leading-[1.0] tracking-[-0.02em] mb-6 sm:mb-10 text-[#FDFCF9] drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
            {hero.title}
          </h1>

          <p className="animate-hero-sync-headline font-sans text-base sm:text-lg md:text-xl text-[#EBE9E2]/75 leading-[1.65] mb-10 sm:mb-14 font-light tracking-[0.02em] max-w-[90%] sm:max-w-none drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)]">
            {hero.subtitle}
          </p>

          <div className="animate-hero-sync-cta flex flex-col xs:flex-row items-stretch xs:items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <Button
              variant="primary"
              href="#reserva"
              className="w-full xs:w-auto text-center shadow-lg shadow-black/30"
            >
              {hero.ctaPrimary}
            </Button>
            <Button
              variant="secondary"
              href="#programa"
              className="w-full xs:w-auto text-center !text-[#FDFCF9] !border-[#FDFCF9]/30 hover:!border-[#FDFCF9]/55"
            >
              {hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
