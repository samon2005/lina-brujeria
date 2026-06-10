import { Helmet } from "react-helmet-async";
import { useLanguage } from "./context/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import FloatingCTA from "./components/FloatingCTA";
import StarField from "./components/StarField";

function App() {
  const { t, language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="canonical" href="https://tudominio.com" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name:
              language === "es"
                ? "Angelina - Servicios Místicos"
                : "Angelina - Mystic Services",
            description: t.meta.description,
            serviceType:
              language === "es"
                ? ["Tarot", "Brujería", "Rituales", "Limpias Energéticas"]
                : ["Tarot", "Witchcraft", "Rituals", "Energy Cleansing"],
            areaServed: "Online",
            availableLanguage: [language],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-mystic-gradient overflow-hidden">
        <StarField />
        <Header />
        <Hero />
        <About />
        <Process />
        <Services />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Footer />
        <WhatsAppButton />
        <FloatingCTA />
      </div>
    </>
  );
}

export default App;
