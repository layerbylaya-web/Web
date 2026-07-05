'use client';
import { useState } from 'react';
import Image from 'next/image';

const images = [
  { src: '/assets/images/enhanced/portfolio/portfolio-01.jpg', alt: 'Portfolio Image 1', category: 'Bridal' },
  { src: '/assets/images/enhanced/portfolio/portfolio-02.jpg', alt: 'Portfolio Image 2', category: 'Fashion' },
  { src: '/assets/images/enhanced/portfolio/portfolio-03.jpg', alt: 'Portfolio Image 3', category: 'Fashion' },
  { src: '/assets/images/enhanced/portfolio/portfolio-04.jpg', alt: 'Portfolio Image 4', category: 'Bridal' },
  { src: '/assets/images/enhanced/portfolio/portfolio-05.jpg', alt: 'Portfolio Image 5', category: 'Bridal' },
  { src: '/assets/images/enhanced/portfolio/portfolio-06.jpg', alt: 'Portfolio Image 6', category: 'Party' },
  { src: '/assets/images/enhanced/portfolio/portfolio-07.jpg', alt: 'Portfolio Image 7', category: 'Commercial' },
  { src: '/assets/images/enhanced/portfolio/portfolio-08.jpg', alt: 'Portfolio Image 8', category: 'Party' },
  { src: '/assets/images/enhanced/portfolio/portfolio-09.jpg', alt: 'Portfolio Image 9', category: 'Fashion' },
  { src: '/assets/images/enhanced/portfolio/portfolio-10.jpg', alt: 'Portfolio Image 10', category: 'Commercial' },
  { src: '/assets/images/enhanced/portfolio/portfolio-11.jpg', alt: 'Portfolio Image 11', category: 'Fashion' },
  { src: '/assets/images/enhanced/portfolio/portfolio-12.jpg', alt: 'Portfolio Image 12', category: 'Bridal' },
];

const categories = ['All', 'Bridal', 'Fashion', 'Party', 'Commercial'];

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs uppercase tracking-widest pb-1 transition-all ${activeCategory === cat ? 'border-b border-metallic-gold text-metallic-gold' : 'text-deep-espresso/60 hover:text-deep-espresso hover:border-b hover:border-deep-espresso'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid Simulation */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 lg:gap-8 space-y-4 lg:space-y-8">
        {filteredImages.map((img, i) => (
          <div 
            key={i} 
            className="relative w-full overflow-hidden group cursor-pointer break-inside-avoid"
            onClick={() => openLightbox(i)}
          >
            <Image 
              src={img.src} 
              alt={img.alt} 
              width={800} 
              height={1200} 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-deep-espresso/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
               <span className="text-white text-xs tracking-widest uppercase">{img.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-deep-espresso/95 flex items-center justify-center p-4">
          <button 
            className="absolute top-8 right-8 text-white uppercase text-xs tracking-widest hover:text-metallic-gold transition-colors z-50"
            onClick={() => setLightboxOpen(false)}
          >
            Close
          </button>
          
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image 
              src={filteredImages[currentImageIndex].src} 
              alt={filteredImages[currentImageIndex].alt} 
              fill 
              className="object-contain" 
            />
          </div>

          <button 
            className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 text-white p-4 hover:text-metallic-gold transition-colors"
            onClick={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1))}
          >
            Prev
          </button>
          <button 
            className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 text-white p-4 hover:text-metallic-gold transition-colors"
            onClick={() => setCurrentImageIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0))}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
