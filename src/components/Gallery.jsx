import { useLanguage } from "../context/LanguageContext";

export default function Gallery() {
  const { t } = useLanguage();

  const galleryItems = [
    {
      image: "/velas.jpg",
      alt: "Candles",
    },
    {
      image: "/1.jpeg",
      alt: "Crystals",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=800&h=800&fit=crop&q=80",
      alt: "Astrology",
    },
    {
      image: "/2.jpeg",
      alt: "Spiritual Items",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?w=800&h=800&fit=crop&q=80",
      alt: "Moon and Stars",
    },
  ];

  return (
    <section id="galeria" className="py-20 relative bg-dark-300/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4 animate-gradient">
            {t.gallery.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-mystic"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-mystic-900/40 to-purple-900/40 group-hover:from-mystic-900/20 group-hover:to-purple-900/20 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-300/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="text-white font-semibold text-sm">
                  {item.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
