import { useState, useEffect } from "react";
import { MysticStarIcon } from "./MysticIcons";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message =
      language === "es"
        ? "Hola, me interesa una consulta"
        : "Hello, I'm interested in a consultation";
    window.open(
      `https://wa.me/573207897998?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-mystic-radial opacity-50"></div>
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-mystic-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{
            animationDelay: "2s",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-mystic-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{
            animationDelay: "4s",
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        ></div>
      </div>

      {/* Contenido */}
      <div
        className="container mx-auto px-6 relative z-10"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="text-mystic-300 drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]">
              <MysticStarIcon />
            </div>
          </div>

          <h2 className="font-serif text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-mystic-400 via-purple-300 to-mystic-500 animate-gradient">
            {t.hero.title}
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            {t.hero.subtitle}
            <span className="block mt-2 text-mystic-300 font-semibold">
              {t.hero.subtitle2}
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={handleWhatsAppClick} className="btn-primary group">
              <span className="flex items-center gap-2">
                {t.hero.consultButton}
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
            </button>

            <a
              href="#servicios"
              className="text-mystic-300 hover:text-mystic-200 font-semibold flex items-center gap-2 transition-colors"
            >
              {t.hero.viewServices}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Decoración inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-300 to-transparent"></div>
    </section>
  );
}
