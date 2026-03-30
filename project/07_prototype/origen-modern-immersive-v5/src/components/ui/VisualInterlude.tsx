interface VisualInterludeProps {
  src: string;
  alt?: string;
  className?: string;
  height?: string;
  maxWidth?: string;
  overlay?: number; // 0 to 1
}

export default function VisualInterlude({ 
  src, 
  alt = "Origen Visual Interlude", 
  className = "",
  height = "70vh",
  maxWidth = "100%",
  overlay = 0
}: VisualInterludeProps) {
  return (
    <div 
      className={`relative w-full overflow-hidden my-16 md:my-28 lg:my-36 visual-interlude ${className}`}
      style={{ minHeight: height }}
    >
      <div 
        className="mx-auto w-full h-full relative"
        style={{ maxWidth: maxWidth }}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover reveal-on-scroll"
          style={{ minHeight: height }}
        />
        {overlay > 0 && (
          <div 
            className="absolute inset-0 bg-black" 
            style={{ opacity: overlay }}
          />
        )}
      </div>
    </div>
  );
}
