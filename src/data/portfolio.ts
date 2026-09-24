export type PortfolioCategory = 'Bridal' | 'Fashion' | 'Party' | 'Commercial';

export type PortfolioImage = {
  id: string;
  src: string;
  category: PortfolioCategory;
  title: string;
  alt: string;
};

// Captions describe visible styling. Categories preserve the existing gallery groupings.
export const portfolioImages: PortfolioImage[] = [
  { id: '01', src: '/assets/images/portfolio/portfolio-01.jpg', category: 'Bridal', title: 'Red veil, silver eyes', alt: 'Bride in a red embroidered veil with silver shimmer eyes and red stone jewellery' },
  { id: '02', src: '/assets/images/portfolio/portfolio-02.jpg', category: 'Fashion', title: 'Blue shimmer, black frames', alt: 'Beauty close-up with blue shimmer eyes, glossy lips and black sunglasses' },
  { id: '03', src: '/assets/images/portfolio/portfolio-03.jpg', category: 'Fashion', title: 'Green and coral colour', alt: 'Editorial portrait with green and coral eye makeup and watermelon earrings' },
  { id: '04', src: '/assets/images/portfolio/portfolio-04.jpg', category: 'Bridal', title: 'Cobalt eyes', alt: 'Close-up portrait with cobalt shimmer eyes, glossy nude lips and blue styling' },
  { id: '05', src: '/assets/images/portfolio/portfolio-05.jpg', category: 'Bridal', title: 'Soft smoke, sculpted finish', alt: 'Beauty portrait with smoky eyes, luminous skin and a smooth low bun' },
  { id: '06', src: '/assets/images/portfolio/portfolio-06.jpg', category: 'Party', title: 'Berry lips, black satin', alt: 'Evening beauty portrait with berry lips, pink eyes and black satin gloves' },
  { id: '07', src: '/assets/images/portfolio/portfolio-07.jpg', category: 'Commercial', title: 'Red lip, clean skin', alt: 'Close-up portrait with a defined red lip, soft eye makeup and blonde hair' },
  { id: '08', src: '/assets/images/portfolio/portfolio-08.jpg', category: 'Party', title: 'Rose shimmer', alt: 'Evening portrait with rose shimmer eyes, winged liner and a pale pink outfit' },
  { id: '09', src: '/assets/images/portfolio/portfolio-09.jpg', category: 'Fashion', title: 'Graphic liner', alt: 'Portrait with graphic black eyeliner, glowing skin and mint green styling' },
  { id: '10', src: '/assets/images/portfolio/portfolio-10.jpg', category: 'Commercial', title: 'Silver light', alt: 'Editorial portrait with silver shimmer eyes, nude lips and layered crystal jewellery' },
  { id: '11', src: '/assets/images/portfolio/portfolio-11.jpg', category: 'Fashion', title: 'Gold and lilac', alt: 'Beauty portrait with gold eyes, lilac nails and a coin headpiece against blue' },
  { id: '12', src: '/assets/images/portfolio/portfolio-12.jpg', category: 'Bridal', title: 'Silk and gold', alt: 'Bridal portrait with a red and blue silk saree, gold jewellery and soft rose makeup' },
];
