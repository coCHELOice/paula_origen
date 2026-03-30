import { useEffect, useState } from 'react';

export default function StickyCtaMobile() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-500 ease-out ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-brand-bg/95 backdrop-blur-sm border-t border-brand-text/10 px-4 py-3 flex items-center gap-3 safe-bottom">
        <a
          href="#reserva"
          className="flex-1 bg-brand-accent text-[#FDFBFA] text-center uppercase tracking-[0.14em] text-[12px] font-medium py-[14px] transition-colors duration-300 hover:bg-[#6D3620] active:bg-[#4C2415]"
        >
          Reserva tu lugar
        </a>
        <a
          href="https://wa.me/56997992863"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="shrink-0 w-[52px] h-[52px] flex items-center justify-center border border-brand-text/15 bg-transparent hover:bg-brand-bgAlt transition-colors duration-300"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-brand-text/70" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.11 1.523 5.836L.057 23.882a.5.5 0 00.606.61l6.198-1.47A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.677-.508-5.211-1.394l-.374-.222-3.878.919.92-3.799-.245-.386A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
