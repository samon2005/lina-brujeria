import {
  TarotIcon,
  CleansingIcon,
  LoveIcon,
  ProsperityIcon,
  ProtectionIcon,
  BathIcon,
} from "./MysticIcons";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t, language } = useLanguage();

  const handleWhatsAppClick = (serviceIndex) => {
    const serviceName = t.services.list[serviceIndex].title;
    const message = `${t.services.whatsappMessage} ${serviceName}`;
    window.open(
      `https://wa.me/573115807057?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const icons = [
    TarotIcon,           // Lectura de Tarot
    CleansingIcon,       // Limpias Energéticas
    LoveIcon,            // Rituales de Amor
    ProsperityIcon,      // Rituales de Prosperidad
    ProtectionIcon,      // Protección Espiritual
    BathIcon,            // Baños Espirituales
    LoveIcon,            // Cazamientos de Almas y Corazones
    LoveIcon,            // Endulzamientos de Amor y Sexuales
    CleansingIcon,       // Limpia y Purificación del Alma
    ProtectionIcon,      // Tumba Trabajos
    ProtectionIcon,      // Alejamientos
    ProtectionIcon,      // Separaciones
    ProtectionIcon,      // Protecciones para Cualquier Motivo
    ProtectionIcon,      // Rompemos Hechizos y Brujerías
    LoveIcon,            // Recuperación de Pareja
  ];

  return (
    <section id="servicios" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4 animate-gradient">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {t.services.list.map((service, index) => {
            const IconComponent = icons[index];
            return (
              <div
                key={index}
                className="card-glass group hover:scale-105 transition-all duration-500 hover-shine overflow-hidden"
              >
                <div className="text-center mb-4 text-mystic-300 group-hover:text-mystic-200 transition-colors duration-300">
                  <div className="inline-block group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <IconComponent />
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-mystic-300 mb-3 text-center">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-4 text-center">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-400"
                    >
                      <svg
                        className="w-5 h-5 text-mystic-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleWhatsAppClick(index)}
                  className="w-full bg-gradient-to-r from-mystic-700 to-mystic-600 hover:from-mystic-600 hover:to-mystic-500 text-white py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-mystic"
                >
                  {t.services.contactButton}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="card-glass max-w-3xl mx-auto hover-shine">
            <h3 className="text-2xl font-serif font-bold text-mystic-300 mb-4">
              {language === "es"
                ? "¿No encuentras lo que buscas?"
                : "Can't find what you're looking for?"}
            </h3>
            <p className="text-gray-300 mb-6">
              {language === "es"
                ? "Cada situación es única. Contáctame para una consulta personalizada y encuentra la solución que necesitas."
                : "Every situation is unique. Contact me for a personalized consultation and find the solution you need."}
            </p>
            <button
              onClick={() => {
                const message =
                  language === "es"
                    ? "Hola, me interesa una consulta personalizada"
                    : "Hello, I'm interested in a personalized consultation";
                window.open(
                  `https://wa.me/573115807057?text=${encodeURIComponent(message)}`,
                  "_blank",
                );
              }}
              className="btn-primary"
            >
              {language === "es"
                ? "Consulta Personalizada"
                : "Personalized Consultation"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
