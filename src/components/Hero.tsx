import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
  objectPosition?: string;
  priority?: boolean;
}

export default function Hero({ title, subtitle, description, imageSrc, imageAlt, ctaText, ctaLink, objectPosition = "center", priority = true }: HeroProps) {
  return (
    <section className="relative w-full h-[70vh] lg:h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          className="object-cover"
          style={{ objectPosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso/80 via-deep-espresso/20 to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        {subtitle && (
          <p className="text-sm md:text-base tracking-[0.2em] uppercase text-blush-paper mb-6 font-medium">
            {subtitle}
          </p>
        )}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            {description}
          </p>
        )}
        {ctaText && ctaLink && (
          <a 
            href={ctaLink}
            className="inline-block px-10 py-4 bg-transparent border border-metallic-gold text-metallic-gold hover:bg-metallic-gold hover:text-deep-espresso transition-all duration-300 uppercase tracking-widest text-sm"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
