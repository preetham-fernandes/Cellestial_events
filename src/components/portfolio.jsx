import Image from 'next/image';
import decor1 from '@/assets/decor1.jpg';
import decor2 from '@/assets/decor2.jpg';
import decor3 from '@/assets/decor3.jpg';
import decor4 from '@/assets/decor4.jpg';
import decor5 from '@/assets/decor5.jpg';
import decor6 from '@/assets/decor6.jpg';

const portfolioItems = [
  { src: decor1, alt: "Wedding Decoration" },
  { src: decor2, alt: "Birthday Party" },
  { src: decor3, alt: "Corporate Event" },
  { src: decor4, alt: "Themed Decoration" },
  { src: decor5, alt: "Outdoor Event" },
  { src: decor6, alt: "Gala Dinner" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-600">
          Events Gallery
        </h2>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className="relative group h-64 overflow-hidden rounded-lg shadow-lg bg-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-bold"></p> {/* To add image name- {item.alt} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
