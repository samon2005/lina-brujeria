import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { ProcessIcons } from "./ProcessIcons";

export default function Process() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === t.process.steps.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? t.process.steps.length - 1 : prev - 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right
      prevSlide();
    }
  };

  return (
    <section id="proceso" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4 animate-gradient">
            {t.process.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.process.subtitle}
          </p>
        </div>

        {/* Carrusel para móviles */}
        <div className="md:hidden relative max-w-sm mx-auto">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {t.process.steps.map((step, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="text-center">
                    {/* Número */}
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-mystic-600 to-purple-700 flex items-center justify-center text-white text-3xl font-bold shadow-lg border-4 border-dark-300">
                      {index + 1}
                    </div>

                    {/* Icono */}
                    <div className="mb-4 text-mystic-300 flex justify-center">
                      {ProcessIcons[step.iconName]}
                    </div>

                    {/* Título */}
                    <h3 className="text-2xl font-bold text-mystic-300 mb-4">
                      {step.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-gray-400 text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-mystic-600/80 hover:bg-mystic-600 text-white flex items-center justify-center transition-all z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-mystic-600/80 hover:bg-mystic-600 text-white flex items-center justify-center transition-all z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-8">
            {t.process.steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-mystic-500 w-8"
                    : "bg-mystic-800 hover:bg-mystic-700"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid para tablet/desktop */}
        <div className="max-w-5xl mx-auto hidden md:block">
          <div className="grid md:grid-cols-4 gap-8">
            {t.process.steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Línea conectora */}
                {index < t.process.steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-mystic-600 to-mystic-800"></div>
                )}

                <div className="relative z-10 text-center group">
                  {/* Número */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-mystic-600 to-purple-700 flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-dark-300">
                    {index + 1}
                  </div>

                  {/* Icono */}
                  <div className="mb-3 group-hover:scale-110 transition-transform duration-300 text-mystic-300">
                    {ProcessIcons[step.iconName]}
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-mystic-300 mb-2">
                    {step.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
