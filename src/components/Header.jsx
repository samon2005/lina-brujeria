import { useState, useEffect } from "react";
import { CrystalBallIcon } from "./MysticIcons";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "#inicio", label: t.nav.home },
    { href: "#sobre-mi", label: t.nav.about },
    { href: "#servicios", label: t.nav.services },
    {
      href: "#testimonios",
      label: language === "es" ? "Testimonios" : "Testimonials",
    },
    { href: "#faq", label: "FAQ" },
    { href: "#contacto", label: t.nav.contact },
  ];

  const handleMenuClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-200/80 backdrop-blur-xl shadow-2xl border-b border-mystic-900/30"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="group-hover:scale-110 transition-transform duration-300 text-mystic-400">
              <CrystalBallIcon />
            </div>
            <h1 className="text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-mystic-400 to-purple-300 group-hover:from-mystic-300 group-hover:to-purple-200 transition-all duration-300">
              Ezequiel Sánchez
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-mystic-400 transition-all duration-300 relative group py-1"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-mystic-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            {/* Botón de cambio de idioma */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-mystic-600/20 hover:bg-mystic-600/40 border border-mystic-500/30 rounded-lg transition-all duration-300 text-mystic-300 hover:text-mystic-200 hover:scale-105"
              title={
                language === "es" ? "Switch to English" : "Cambiar a Español"
              }
            >
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
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              <span className="font-semibold">
                {language === "es" ? "EN" : "ES"}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-mystic-300 hover:text-mystic-200 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-dark-200/95 backdrop-blur-xl rounded-lg border border-mystic-900/30 p-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleMenuClick}
                className="block text-gray-300 hover:text-mystic-400 transition-colors py-2 px-4 rounded hover:bg-mystic-900/20"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                handleMenuClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-mystic-600/20 hover:bg-mystic-600/40 border border-mystic-500/30 rounded-lg transition-all duration-300 text-mystic-300 hover:text-mystic-200 mt-2"
            >
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
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              <span className="font-semibold">
                {language === "es" ? "English" : "Español"}
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
