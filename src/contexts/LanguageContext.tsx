import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero Section
    'hero.title.line1': 'Data-Driven Landing Pages',
    'hero.title.line2': 'Built From Real Market Research',
    'hero.subtitle': 'Get a landing page created directly from your business plan with real market analysis and competitor research - not generic templates.',
    'hero.cta': 'Create Your Business Plan - $300',
    'hero.guarantee': '7-day money-back guarantee',
    'hero.feature1': 'Mobile-Optimized Design',
    'hero.feature2': 'Fast 3-5 Day Delivery',
    'hero.feature3': 'One Revision Round',

    // Features Section
    'features.title': 'Everything You Need for a Professional Online Presence',
    'features.subtitle': 'Your landing page includes all essential elements to establish credibility and convert visitors into customers.',
    'features.responsive.title': 'Mobile-First Design',
    'features.responsive.desc': 'Your landing page works perfectly on all devices with responsive design that looks great everywhere.',
    'features.fast.title': 'Lightning Fast Loading',
    'features.fast.desc': 'Optimized for speed to keep visitors engaged and improve your search engine rankings.',
    'features.conversion.title': 'Conversion Optimized',
    'features.conversion.desc': 'Built with proven conversion principles to turn more visitors into paying customers.',
    'features.professional.title': 'Professional Design',
    'features.professional.desc': 'Clean, modern design that builds trust and credibility with your potential customers.',
    'features.seo.title': 'SEO Foundation',
    'features.seo.desc': 'Basic SEO optimization to help your landing page get found in search engines.',
    'features.support.title': 'Launch Support',
    'features.support.desc': 'Get help setting up and launching your new landing page successfully.',

    // Process Section
    'process.title': 'Simple 4-Step Process',
    'process.subtitle': 'From business plan to live landing page in just 3-5 days',
    'process.step1.title': 'Create Business Plan',
    'process.step1.desc': 'Complete our business insights form to help us understand your goals and target audience.',
    'process.step2.title': 'Design & Development',
    'process.step2.desc': 'Our team creates your custom landing page with professional design and optimized content.',
    'process.step3.title': 'Review & Refine',
    'process.step3.desc': 'You get one revision round to perfect your landing page before launch.',
    'process.step4.title': 'Launch & Support',
    'process.step4.desc': 'We help you launch your landing page and provide basic support for a smooth start.',

    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Real results from real businesses',

    // Urgency Section
    'urgency.badge': 'Limited Time Offer',
    'urgency.title.line1': 'Special Launch Pricing',
    'urgency.title.line2': 'Ends Soon',
    'urgency.subtitle': "We're only accepting 10 new clients this month to ensure quality delivery. Once these spots are filled, the next batch starts at our regular $1,000 price.",
    'urgency.timer.title': 'Special Pricing Expires In:',
    'urgency.spots.title': 'Spots Left',
    'urgency.spots.subtitle': 'This month at special pricing',
    'urgency.spots.taken': 'Spots Taken',
    'urgency.pricing.current': 'This Month Only',
    'urgency.pricing.special': 'Special Price',
    'urgency.pricing.complete': 'Complete Package',
    'urgency.pricing.regular': 'Regular Price',
    'urgency.pricing.next': 'Starting Next Month',
    'urgency.cta': 'Secure Your Spot Now - $300',
    'urgency.guarantee': 'Next batch starts at $1,000 • 7-day money-back guarantee',
    'urgency.timer.days': 'Days',
    'urgency.timer.hours': 'Hours',
    'urgency.timer.minutes': 'Minutes',
    'urgency.timer.seconds': 'Seconds',

    // Guarantee Section
    'guarantee.title': 'Your Success is Guaranteed',
    'guarantee.subtitle': 'We stand behind our work with these promises',
    'guarantee.quality.title': '7-Day Guarantee',
    'guarantee.quality.desc': 'Not satisfied with your landing page? Get a full refund within 7 days, no questions asked.',
    'guarantee.delivery.title': 'On-Time Delivery',
    'guarantee.delivery.desc': 'Your landing page will be completed within 3-5 days after your business plan submission.',
    'guarantee.professional.title': 'Professional Quality',
    'guarantee.professional.desc': 'Every landing page meets our high standards for design, functionality, and performance.',

    // Floating Chat
    'chat.title': 'Need Help?',
    'chat.subtitle': 'Contact us on WhatsApp',
    'chat.whatsapp': 'WhatsApp Now',

    // Common
    'language.toggle': 'Español',
  },
  es: {
    // Hero Section
    'hero.title.line1': 'Páginas de Aterrizaje Basadas en Datos',
    'hero.title.line2': 'Construidas con Investigación de Mercado Real',
    'hero.subtitle': 'Obtén una página de aterrizaje creada directamente desde tu plan de negocio con análisis de mercado real e investigación de competidores - no plantillas genéricas.',
    'hero.cta': 'Crear Tu Plan de Negocio - $300',
    'hero.guarantee': 'Garantía de devolución de dinero de 7 días',
    'hero.feature1': 'Diseño Optimizado para Móviles',
    'hero.feature2': 'Entrega Rápida 3-5 Días',
    'hero.feature3': 'Una Ronda de Revisión',

    // Features Section
    'features.title': 'Todo lo que Necesitas para una Presencia Profesional en Línea',
    'features.subtitle': 'Tu página de aterrizaje incluye todos los elementos esenciales para establecer credibilidad y convertir visitantes en clientes.',
    'features.responsive.title': 'Diseño Mobile-First',
    'features.responsive.desc': 'Tu página de aterrizaje funciona perfectamente en todos los dispositivos con diseño responsive que se ve genial en todas partes.',
    'features.fast.title': 'Carga Ultra Rápida',
    'features.fast.desc': 'Optimizado para velocidad para mantener a los visitantes comprometidos y mejorar tu ranking en motores de búsqueda.',
    'features.conversion.title': 'Optimizado para Conversión',
    'features.conversion.desc': 'Construido con principios de conversión probados para convertir más visitantes en clientes que pagan.',
    'features.professional.title': 'Diseño Profesional',
    'features.professional.desc': 'Diseño limpio y moderno que construye confianza y credibilidad con tus clientes potenciales.',
    'features.seo.title': 'Base SEO',
    'features.seo.desc': 'Optimización básica de SEO para ayudar a que tu página de aterrizaje sea encontrada en motores de búsqueda.',
    'features.support.title': 'Soporte de Lanzamiento',
    'features.support.desc': 'Obtén ayuda configurando y lanzando tu nueva página de aterrizaje exitosamente.',

    // Process Section
    'process.title': 'Proceso Simple de 4 Pasos',
    'process.subtitle': 'Del plan de negocio a página en vivo en solo 3-5 días',
    'process.step1.title': 'Crear Plan de Negocio',
    'process.step1.desc': 'Completa nuestro formulario de insights de negocio para ayudarnos a entender tus objetivos y audiencia objetivo.',
    'process.step2.title': 'Diseño y Desarrollo',
    'process.step2.desc': 'Nuestro equipo crea tu página de aterrizaje personalizada con diseño profesional y contenido optimizado.',
    'process.step3.title': 'Revisar y Refinar',
    'process.step3.desc': 'Obtienes una ronda de revisión para perfeccionar tu página de aterrizaje antes del lanzamiento.',
    'process.step4.title': 'Lanzar y Soporte',
    'process.step4.desc': 'Te ayudamos a lanzar tu página de aterrizaje y proporcionamos soporte básico para un inicio suave.',

    // Testimonials
    'testimonials.title': 'Lo que Dicen Nuestros Clientes',
    'testimonials.subtitle': 'Resultados reales de negocios reales',

    // Urgency Section
    'urgency.badge': 'Oferta por Tiempo Limitado',
    'urgency.title.line1': 'Precios Especiales de Lanzamiento',
    'urgency.title.line2': 'Termina Pronto',
    'urgency.subtitle': 'Solo estamos aceptando 10 nuevos clientes este mes para asegurar entrega de calidad. Una vez que se llenen estos espacios, el próximo lote comienza a nuestro precio regular de $1,000.',
    'urgency.timer.title': 'Los Precios Especiales Expiran En:',
    'urgency.spots.title': 'Espacios Restantes',
    'urgency.spots.subtitle': 'Este mes a precio especial',
    'urgency.spots.taken': 'Espacios Tomados',
    'urgency.pricing.current': 'Solo Este Mes',
    'urgency.pricing.special': 'Precio Especial',
    'urgency.pricing.complete': 'Paquete Completo',
    'urgency.pricing.regular': 'Precio Regular',
    'urgency.pricing.next': 'A Partir del Próximo Mes',
    'urgency.cta': 'Asegura Tu Espacio Ahora - $300',
    'urgency.guarantee': 'Próximo lote comienza a $1,000 • Garantía de devolución de dinero de 7 días',
    'urgency.timer.days': 'Días',
    'urgency.timer.hours': 'Horas',
    'urgency.timer.minutes': 'Minutos',
    'urgency.timer.seconds': 'Segundos',

    // Guarantee Section
    'guarantee.title': 'Tu Éxito está Garantizado',
    'guarantee.subtitle': 'Respaldamos nuestro trabajo con estas promesas',
    'guarantee.quality.title': 'Garantía de 7 Días',
    'guarantee.quality.desc': '¿No estás satisfecho con tu página de aterrizaje? Obtén un reembolso completo dentro de 7 días, sin preguntas.',
    'guarantee.delivery.title': 'Entrega a Tiempo',
    'guarantee.delivery.desc': 'Tu página de aterrizaje será completada dentro de 3-5 días después de la presentación de tu plan de negocio.',
    'guarantee.professional.title': 'Calidad Profesional',
    'guarantee.professional.desc': 'Cada página de aterrizaje cumple con nuestros altos estándares de diseño, funcionalidad y rendimiento.',

    // Floating Chat
    'chat.title': '¿Necesitas Ayuda?',
    'chat.subtitle': 'Contáctanos por WhatsApp',
    'chat.whatsapp': 'WhatsApp Ahora',

    // Common
    'language.toggle': 'English',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};