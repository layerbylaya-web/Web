import Image from 'next/image';

interface ImageStripProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ImageStrip({ images }: ImageStripProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="w-full py-12 md:py-24 bg-blush-paper overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-12">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`relative w-full overflow-hidden ${
                i % 2 === 0 ? 'aspect-[4/5] md:w-5/12' : 'aspect-[3/4] md:w-4/12'
              }`}
            >
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
