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

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.question1': "What if I don't like the landing page?",
    'faq.answer1': "We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund every penny - no questions asked.",
    'faq.question2': 'How is this different from DIY website builders?',
    'faq.answer2': "Our landing pages are professionally designed for conversions, include AI-powered market research, and come with a complete business plan. DIY builders give you templates - we give you strategy.",
    'faq.question3': 'Do you provide ongoing support?',
    'faq.answer3': "Yes! Your package includes 30 days of unlimited revisions and email support. We're here to ensure your success from day one.",
    'faq.question4': 'What if my business idea changes?',
    'faq.answer4': "No problem! We can adapt your landing page and business plan to your new direction within the first 30 days at no extra cost.",
    'faq.question5': 'How quickly will I see results?',
    'faq.answer5': "Most clients start capturing leads within 24 hours of launch. Our conversion-optimized design and proven copy framework typically delivers results immediately.",
    'faq.whatsapp': 'Message Us Now',
    'faq.input.placeholder': 'Ask another question...',
    'faq.typing': 'Typing...',

    // Features Section Content
    'features.feature1.title': 'Professional Landing Page That Converts',
    'features.feature1.desc': 'A single, focused landing page designed to convert visitors into customers - not a full website',
    'features.feature1.benefit1': 'Single-page landing page design',
    'features.feature1.benefit2': 'Mobile-responsive and fast loading',
    'features.feature1.benefit3': 'Conversion-optimized layout',
    'features.feature1.benefit4': 'Professional copy and design',
    'features.feature1.outcome': 'Start capturing leads from day one',

    'features.feature2.title': 'Data-Driven Business Plan',
    'features.feature2.desc': 'Complete market research, competitor analysis, and financial projections ready for investors',
    'features.feature2.benefit1': 'Market research and competitor analysis',
    'features.feature2.benefit2': 'Financial projections and funding roadmap',
    'features.feature2.benefit3': 'Risk assessment and mitigation strategies',
    'features.feature2.benefit4': 'Industry insights and trends',
    'features.feature2.outcome': 'Secure funding and make informed decisions',

    'features.feature3.title': 'AI-Powered Market Insights',
    'features.feature3.desc': 'Advanced analytics to identify your target audience, optimize pricing, and discover growth opportunities',
    'features.feature3.benefit1': 'Target audience analysis',
    'features.feature3.benefit2': 'Pricing optimization recommendations',
    'features.feature3.benefit3': 'Growth opportunity identification',
    'features.feature3.benefit4': 'Competitive positioning strategy',
    'features.feature3.outcome': 'Skip months of trial and error',

    'features.section.title': 'Everything You Need to Launch Successfully',
    'features.section.subtitle': 'Instead of spending months figuring it out, get everything built by experts in just 7 days',
    'features.section.cta': 'Get All Three for Just $300',
    'features.section.note': 'Usually $1,000+ when purchased separately',

    // Process Section Content
    'process.section.badge': 'Simple 3-Step Process',
    'process.section.title': 'How It Works: From Idea to Launch',
    'process.section.subtitle': "We've streamlined everything so you can focus on what matters - growing your business",

    'process.new.step1.title': 'Create Your Business Plan',
    'process.new.step1.desc': 'Complete your business plan and insights at our dedicated portal',
    'process.step1.detail1': 'Visit www.business.moilapp.com/insight',
    'process.step1.detail2': 'AI-powered business plan generation',
    'process.step1.detail3': 'Market research and insights',
    'process.step1.detail4': 'Complete at your own pace',
    'process.step1.duration': 'Self-paced',
    'process.step1.highlight': 'START HERE',

    'process.new.step2.title': 'Landing Page Creation',
    'process.new.step2.desc': 'We create your first landing page and send it for review',
    'process.step2.detail1': 'Professional landing page design',
    'process.step2.detail2': 'Based on your business plan',
    'process.step2.detail3': 'Sent directly to your email',
    'process.step2.detail4': 'Ready for your feedback',
    'process.step2.duration': '3-5 days',
    'process.step2.highlight': 'DELIVERED',

    'process.new.step3.title': 'Review Call & Updates',
    'process.new.step3.desc': '15-minute call to review your landing page and request changes',
    'process.step3.detail1': 'Schedule convenient 15-min call',
    'process.step3.detail2': 'Review landing page together',
    'process.step3.detail3': 'Request any updates needed',
    'process.step3.detail4': 'Professional guidance included',
    'process.step3.duration': '15 min',
    'process.step3.highlight': 'PERSONALIZED',

    'process.new.step4.title': 'Final Delivery',
    'process.new.step4.desc': 'Updates delivered within 24 hours of your review call',
    'process.step4.detail1': 'Fast 24-hour turnaround',
    'process.step4.detail2': 'All requested changes included',
    'process.step4.detail3': 'Final landing page delivered',
    'process.step4.detail4': 'Ready to launch your business',
    'process.step4.duration': '24 hours',
    'process.step4.highlight': 'GUARANTEED',

    'process.timeline.title': 'Complete Timeline',
    'process.timeline.today': 'Today:',
    'process.timeline.create': 'Create Plan',
    'process.timeline.day5': 'Day 5:',
    'process.timeline.review': 'Review Call',
    'process.timeline.day6': 'Day 6:',
    'process.timeline.launch': 'Launch Ready',
    'process.timeline.cta': 'Start Your Business Plan',

    // Testimonials Section
    'testimonials.section.title': 'Join 500+ Successful Business Launches',
    'testimonials.section.subtitle': 'Real results from real entrepreneurs who trusted us with their launch',
    'testimonials.section.featured': 'AS FEATURED IN:',
    'testimonials.section.cta': 'Start Your Success Story - $300',
    'testimonials.section.note': 'Join the next batch of successful entrepreneurs',

    // Guarantee Section
    'guarantee.section.badge': 'Risk-Free Guarantee',
    'guarantee.section.title': 'Your Success is 100% Guaranteed',
    'guarantee.section.subtitle': 'We\'re so confident in our service that we guarantee your satisfaction with multiple promises',

    'guarantee.guarantee1.title': '30-Day Money-Back Guarantee',
    'guarantee.guarantee1.desc': 'If you\'re not completely satisfied with your landing page, business plan, and market insights, we\'ll refund every penny.',
    'guarantee.guarantee1.detail1': 'No questions asked refund policy',
    'guarantee.guarantee1.detail2': 'Full refund within 30 days',
    'guarantee.guarantee1.detail3': 'Keep all delivered materials',
    'guarantee.guarantee1.detail4': 'Instant refund processing',

    'guarantee.guarantee2.title': 'Quality Guarantee',
    'guarantee.guarantee2.desc': 'Your landing page will be professionally designed, mobile-optimized, and ready to convert visitors into customers.',
    'guarantee.guarantee2.detail1': 'Professional design standards',
    'guarantee.guarantee2.detail2': 'Mobile-responsive guarantee',
    'guarantee.guarantee2.detail3': 'SEO optimization included',
    'guarantee.guarantee2.detail4': 'Conversion-optimized copy',

    'guarantee.guarantee3.title': '7-Day Guarantee',
    'guarantee.guarantee3.desc': 'Delivery in 3-5 days after business plan completion, with our 7-day guarantee for peace of mind.',
    'guarantee.guarantee3.detail1': '3-5 day delivery promise',
    'guarantee.guarantee3.detail2': '7-day quality guarantee',
    'guarantee.guarantee3.detail3': 'Progress updates included',
    'guarantee.guarantee3.detail4': 'Priority support included',

    'guarantee.guarantee4.title': 'One Revision Round',
    'guarantee.guarantee4.desc': 'After your review call, we provide one comprehensive revision to perfect your landing page.',
    'guarantee.guarantee4.detail1': 'One revision round included',
    'guarantee.guarantee4.detail2': 'Expert feedback and guidance',
    'guarantee.guarantee4.detail3': '24-hour turnaround on changes',
    'guarantee.guarantee4.detail4': 'Direct designer communication',

    'guarantee.bottom.title': 'What Do You Have to Lose?',
    'guarantee.bottom.desc': 'With our comprehensive guarantees, you\'re completely protected. The only risk is missing out on this limited-time $300 pricing.',
    'guarantee.bottom.cta': 'Start Risk-Free Today - $300',
    'guarantee.bottom.note': 'Backed by our 30-day money-back guarantee',
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

    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.question1': "¿Qué pasa si no me gusta la página de aterrizaje?",
    'faq.answer1': "Ofrecemos una garantía de devolución de dinero de 30 días. Si no estás completamente satisfecho, te reembolsaremos cada centavo - sin preguntas.",
    'faq.question2': '¿En qué se diferencia esto de los constructores de sitios web DIY?',
    'faq.answer2': "Nuestras páginas de aterrizaje están diseñadas profesionalmente para conversiones, incluyen investigación de mercado con IA, y vienen con un plan de negocio completo. Los constructores DIY te dan plantillas - nosotros te damos estrategia.",
    'faq.question3': '¿Proporcionan soporte continuo?',
    'faq.answer3': "¡Sí! Tu paquete incluye 30 días de revisiones ilimitadas y soporte por email. Estamos aquí para asegurar tu éxito desde el primer día.",
    'faq.question4': '¿Qué pasa si mi idea de negocio cambia?',
    'faq.answer4': "¡No hay problema! Podemos adaptar tu página de aterrizaje y plan de negocio a tu nueva dirección dentro de los primeros 30 días sin costo extra.",
    'faq.question5': '¿Qué tan rápido veré resultados?',
    'faq.answer5': "La mayoría de los clientes comienzan a capturar leads dentro de las 24 horas del lanzamiento. Nuestro diseño optimizado para conversión y marco de copy probado típicamente entrega resultados inmediatamente.",
    'faq.whatsapp': 'Contáctanos Ahora',
    'faq.input.placeholder': 'Haz otra pregunta...',
    'faq.typing': 'Escribiendo...',

    // Features Section Content
    'features.feature1.title': 'Página de Aterrizaje Profesional que Convierte',
    'features.feature1.desc': 'Una página de aterrizaje única y enfocada diseñada para convertir visitantes en clientes - no un sitio web completo',
    'features.feature1.benefit1': 'Diseño de página de aterrizaje única',
    'features.feature1.benefit2': 'Responsive para móviles y carga rápida',
    'features.feature1.benefit3': 'Diseño optimizado para conversión',
    'features.feature1.benefit4': 'Copy y diseño profesional',
    'features.feature1.outcome': 'Comienza a capturar leads desde el día uno',

    'features.feature2.title': 'Plan de Negocio Basado en Datos',
    'features.feature2.desc': 'Investigación de mercado completa, análisis de competidores y proyecciones financieras listas para inversores',
    'features.feature2.benefit1': 'Investigación de mercado y análisis de competidores',
    'features.feature2.benefit2': 'Proyecciones financieras y hoja de ruta de financiamiento',
    'features.feature2.benefit3': 'Evaluación de riesgos y estrategias de mitigación',
    'features.feature2.benefit4': 'Insights y tendencias de la industria',
    'features.feature2.outcome': 'Asegura financiamiento y toma decisiones informadas',

    'features.feature3.title': 'Insights de Mercado con IA',
    'features.feature3.desc': 'Análisis avanzado para identificar tu audiencia objetivo, optimizar precios y descubrir oportunidades de crecimiento',
    'features.feature3.benefit1': 'Análisis de audiencia objetivo',
    'features.feature3.benefit2': 'Recomendaciones de optimización de precios',
    'features.feature3.benefit3': 'Identificación de oportunidades de crecimiento',
    'features.feature3.benefit4': 'Estrategia de posicionamiento competitivo',
    'features.feature3.outcome': 'Evita meses de prueba y error',

    'features.section.title': 'Todo lo que Necesitas para Lanzar Exitosamente',
    'features.section.subtitle': 'En lugar de pasar meses averiguándolo, haz que todo sea construido por expertos en solo 7 días',
    'features.section.cta': 'Obtén los Tres por Solo $300',
    'features.section.note': 'Usualmente $1,000+ cuando se compran por separado',

    // Process Section Content
    'process.section.badge': 'Proceso Simple de 3 Pasos',
    'process.section.title': 'Cómo Funciona: De la Idea al Lanzamiento',
    'process.section.subtitle': "Hemos simplificado todo para que puedas enfocarte en lo que importa - hacer crecer tu negocio",

    'process.new.step1.title': 'Crear Tu Plan de Negocio',
    'process.new.step1.desc': 'Completa tu plan de negocio e insights en nuestro portal dedicado',
    'process.step1.detail1': 'Visita www.business.moilapp.com/insight',
    'process.step1.detail2': 'Generación de plan de negocio con IA',
    'process.step1.detail3': 'Investigación de mercado e insights',
    'process.step1.detail4': 'Completa a tu propio ritmo',
    'process.step1.duration': 'A tu ritmo',
    'process.step1.highlight': 'COMIENZA AQUÍ',

    'process.new.step2.title': 'Creación de Página de Aterrizaje',
    'process.new.step2.desc': 'Creamos tu primera página de aterrizaje y la enviamos para revisión',
    'process.step2.detail1': 'Diseño profesional de página de aterrizaje',
    'process.step2.detail2': 'Basado en tu plan de negocio',
    'process.step2.detail3': 'Enviado directamente a tu email',
    'process.step2.detail4': 'Listo para tu retroalimentación',
    'process.step2.duration': '3-5 días',
    'process.step2.highlight': 'ENTREGADO',

    'process.new.step3.title': 'Llamada de Revisión y Actualizaciones',
    'process.new.step3.desc': 'Llamada de 15 minutos para revisar tu página de aterrizaje y solicitar cambios',
    'process.step3.detail1': 'Programa llamada conveniente de 15 min',
    'process.step3.detail2': 'Revisa la página de aterrizaje juntos',
    'process.step3.detail3': 'Solicita cualquier actualización necesaria',
    'process.step3.detail4': 'Guía profesional incluida',
    'process.step3.duration': '15 min',
    'process.step3.highlight': 'PERSONALIZADO',

    'process.new.step4.title': 'Entrega Final',
    'process.new.step4.desc': 'Actualizaciones entregadas dentro de 24 horas de tu llamada de revisión',
    'process.step4.detail1': 'Entrega rápida de 24 horas',
    'process.step4.detail2': 'Todos los cambios solicitados incluidos',
    'process.step4.detail3': 'Página de aterrizaje final entregada',
    'process.step4.detail4': 'Listo para lanzar tu negocio',
    'process.step4.duration': '24 horas',
    'process.step4.highlight': 'GARANTIZADO',

    'process.timeline.title': 'Cronograma Completo',
    'process.timeline.today': 'Hoy:',
    'process.timeline.create': 'Crear Plan',
    'process.timeline.day5': 'Día 5:',
    'process.timeline.review': 'Llamada de Revisión',
    'process.timeline.day6': 'Día 6:',
    'process.timeline.launch': 'Listo para Lanzar',
    'process.timeline.cta': 'Comienza Tu Plan de Negocio',

    // Testimonials Section
    'testimonials.section.title': 'Únete a 500+ Lanzamientos de Negocios Exitosos',
    'testimonials.section.subtitle': 'Resultados reales de emprendedores reales que confiaron en nosotros con su lanzamiento',
    'testimonials.section.featured': 'APARECIDO EN:',
    'testimonials.section.cta': 'Comienza Tu Historia de Éxito - $300',
    'testimonials.section.note': 'Únete al próximo lote de emprendedores exitosos',

    // Guarantee Section
    'guarantee.section.badge': 'Garantía Sin Riesgo',
    'guarantee.section.title': 'Tu Éxito está 100% Garantizado',
    'guarantee.section.subtitle': 'Estamos tan seguros de nuestro servicio que garantizamos tu satisfacción con múltiples promesas',

    'guarantee.guarantee1.title': 'Garantía de Devolución de Dinero de 30 Días',
    'guarantee.guarantee1.desc': 'Si no estás completamente satisfecho con tu página de aterrizaje, plan de negocio e insights de mercado, te reembolsaremos cada centavo.',
    'guarantee.guarantee1.detail1': 'Política de reembolso sin preguntas',
    'guarantee.guarantee1.detail2': 'Reembolso completo dentro de 30 días',
    'guarantee.guarantee1.detail3': 'Conserva todos los materiales entregados',
    'guarantee.guarantee1.detail4': 'Procesamiento instantáneo de reembolso',

    'guarantee.guarantee2.title': 'Garantía de Calidad',
    'guarantee.guarantee2.desc': 'Tu página de aterrizaje será diseñada profesionalmente, optimizada para móviles y lista para convertir visitantes en clientes.',
    'guarantee.guarantee2.detail1': 'Estándares de diseño profesional',
    'guarantee.guarantee2.detail2': 'Garantía responsive para móviles',
    'guarantee.guarantee2.detail3': 'Optimización SEO incluida',
    'guarantee.guarantee2.detail4': 'Copy optimizado para conversión',

    'guarantee.guarantee3.title': 'Garantía de 7 Días',
    'guarantee.guarantee3.desc': 'Entrega en 3-5 días después de completar el plan de negocio, con nuestra garantía de 7 días para tranquilidad.',
    'guarantee.guarantee3.detail1': 'Promesa de entrega de 3-5 días',
    'guarantee.guarantee3.detail2': 'Garantía de calidad de 7 días',
    'guarantee.guarantee3.detail3': 'Actualizaciones de progreso incluidas',
    'guarantee.guarantee3.detail4': 'Soporte prioritario incluido',

    'guarantee.guarantee4.title': 'Una Ronda de Revisión',
    'guarantee.guarantee4.desc': 'Después de tu llamada de revisión, proporcionamos una revisión integral para perfeccionar tu página de aterrizaje.',
    'guarantee.guarantee4.detail1': 'Una ronda de revisión incluida',
    'guarantee.guarantee4.detail2': 'Retroalimentación y guía experta',
    'guarantee.guarantee4.detail3': 'Entrega de 24 horas en cambios',
    'guarantee.guarantee4.detail4': 'Comunicación directa con el diseñador',

    'guarantee.bottom.title': '¿Qué Tienes que Perder?',
    'guarantee.bottom.desc': 'Con nuestras garantías integrales, estás completamente protegido. El único riesgo es perderte este precio limitado de $300.',
    'guarantee.bottom.cta': 'Comienza Sin Riesgo Hoy - $300',
    'guarantee.bottom.note': 'Respaldado por nuestra garantía de devolución de dinero de 30 días',
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