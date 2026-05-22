import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function FloatingCTA() {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isClosed) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
  };

  const handleCTA = () => {
    const message =
      language === "es"
        ? "Hola, me interesa una consulta"
        : "Hello, I'm interested in a consultation";
    window.open(
      `https://wa.me/573207897998?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 right-6 z-40 animate-slide-up">
      <div className="card-glass max-w-sm hover-shine relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-mystic-300 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="flex items-start gap-3 mb-3">
          <div className="text-mystic-300 flex-shrink-0">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-mystic-300 mb-1">
              {t.floatingCTA.title}
            </h3>
            <p className="text-sm text-gray-300">{t.floatingCTA.description}</p>
          </div>
        </div>

        <button onClick={handleCTA} className="btn-primary w-full text-sm">
          {t.floatingCTA.button}
        </button>
      </div>
    </div>
  );
}
