export type PlannedImageStatus = "needed" | "available" | "placeholder";

export type PlannedImageAsset = {
  key: string;
  route: string;
  currentVisualStatus: string;
  imageMissing: boolean;
  recommendedImageType: string;
  aspectRatio: string;
  filename: string;
  publicDirectory: string;
  publicPath: string;
  alt: string;
  purpose: string;
  component: string;
  status: PlannedImageStatus;
  promptSpanish: string;
  promptEnglish: string;
};

export const plannedImageAssets: PlannedImageAsset[] = [
  {
    key: "home-hero-clinic-editorial",
    route: "/",
    currentVisualStatus:
      "El HomeHero ya tiene una composición CSS editorial intencional, pero no cuenta con fotografía real de clínica o equipo.",
    imageMissing: true,
    recommendedImageType:
      "Fotografía editorial de clínica premium o consulta médica cálida.",
    aspectRatio: "4:5",
    filename: "aurum-nova-clinic-editorial.webp",
    publicDirectory: "public/images/brand",
    publicPath: "/images/brand/aurum-nova-clinic-editorial.webp",
    alt: "Sala clínica premium de Aurum Nova Wellness Clinic con ambiente cálido y profesional.",
    purpose:
      "Reemplazar o complementar la composición visual del HomeHero cuando exista una imagen propia de marca.",
    component: "components/sections/HomeHero.tsx",
    status: "placeholder",
    promptSpanish:
      "Imagen editorial premium de una clínica wellness moderna en Puerto Rico, con ambiente clínico cálido, tonos crema, grafito y dorado sutil, sin pacientes identificables.",
    promptEnglish:
      "Premium warm clinical editorial photograph of a modern medical wellness clinic in Puerto Rico, calm consultation room, cream walls, graphite accents, subtle muted gold details, natural Caribbean daylight, high-end but human, no visible brand names, no medication packaging, no before-and-after imagery, no dramatic weight loss imagery, shallow depth of field, refined telehealth-inspired composition.",
  },
  {
    key: "quiz-metabolico-telehealth-dashboard",
    route: "/quiz-metabolico",
    currentVisualStatus:
      "Hero textual con chips de confianza; el quiz es funcional, pero falta una señal visual profesional de herramienta digital clínica.",
    imageMissing: true,
    recommendedImageType:
      "Composición editorial de tablet/laptop con cuestionario clínico abstracto.",
    aspectRatio: "16:10",
    filename: "quiz-metabolico-telehealth-dashboard.webp",
    publicDirectory: "public/images/quiz",
    publicPath: "/images/quiz/quiz-metabolico-telehealth-dashboard.webp",
    alt: "Herramienta digital de quiz metabólico en un entorno clínico premium.",
    purpose:
      "Acompañar el hero o una sección introductoria del quiz sin desplazar la llamada principal a completar el quiz.",
    component: "app/quiz-metabolico/page.tsx",
    status: "needed",
    promptSpanish:
      "Visual de telehealth premium con una tablet mostrando un cuestionario clínico abstracto, sin datos reales ni textos legibles.",
    promptEnglish:
      "Premium telehealth editorial image of a tablet and laptop on a warm clinical desk, abstract metabolic questionnaire interface with non-readable UI blocks, cream graphite and muted gold palette, soft natural light, modern medical wellness brand, no real patient data, no medication names, no logos, no before-and-after imagery.",
  },
  {
    key: "programa-metabolico-consulta-editorial",
    route: "/programa-metabolico",
    currentVisualStatus:
      "La página tiene hero oscuro, quiz, calculadoras y dashboard; falta una imagen humana de consulta clínica supervisada.",
    imageMissing: true,
    recommendedImageType:
      "Consulta médica lifestyle editorial con revisión de métricas en tablet.",
    aspectRatio: "16:10",
    filename: "programa-metabolico-consulta-editorial.webp",
    publicDirectory: "public/images/programa",
    publicPath: "/images/programa/programa-metabolico-consulta-editorial.webp",
    alt: "Consulta clínica de programa metabólico con revisión de métricas de bienestar.",
    purpose:
      "Añadir confianza humana al Programa Metabólico sin prometer resultados ni mostrar transformaciones.",
    component: "components/sections/programa-metabolico/MetabolicHero.tsx",
    status: "needed",
    promptSpanish:
      "Consulta clínica cálida donde un profesional revisa métricas generales en una tablet con un paciente no identificable.",
    promptEnglish:
      "Warm premium medical wellness consultation scene, clinician reviewing general wellness metrics on a tablet with a non-identifiable adult patient, modern clinic interior, cream graphite white and muted gold styling, calm trustworthy mood, no scale close-up, no before-and-after photos, no medication packaging, no implied guaranteed weight loss, editorial photography.",
  },
  {
    key: "servicios-decision-hub-editorial",
    route: "/servicios",
    currentVisualStatus:
      "Hub de decisión fuerte en texto y tarjetas; falta una imagen de marca que una servicios clínicos y wellness.",
    imageMissing: true,
    recommendedImageType:
      "Mesa editorial con materiales clínicos, tablet y elementos wellness sobrios.",
    aspectRatio: "16:9",
    filename: "servicios-decision-hub-editorial.webp",
    publicDirectory: "public/images/servicios",
    publicPath: "/images/servicios/servicios-decision-hub-editorial.webp",
    alt: "Vista editorial de herramientas clínicas y wellness para orientar servicios de Aurum Nova.",
    purpose:
      "Dar un punto visual premium al hub de servicios sin convertirlo en una galería ni competir con el quiz.",
    component: "app/servicios/page.tsx",
    status: "needed",
    promptSpanish:
      "Composición editorial de escritorio clínico con tablet, hoja de evaluación, agua, detalles dorados y ambiente wellness médico.",
    promptEnglish:
      "Premium editorial flat-lay of a medical wellness decision desk, tablet with abstract service tiles, intake form with non-readable text, glass of water, subtle gold accents, cream and graphite palette, modern clinic atmosphere, no medication brands, no syringes as the focus, no stocky hospital feel, no readable patient information.",
  },
  {
    key: "calculadoras-wellness-dashboard",
    route: "/calculadoras",
    currentVisualStatus:
      "Hub educativo de calculadoras con tarjetas y FAQ; visualmente correcto, pero sin imagen de datos o dashboard.",
    imageMissing: true,
    recommendedImageType:
      "Dashboard educativo abstracto con números de bienestar no específicos.",
    aspectRatio: "16:9",
    filename: "calculadoras-wellness-dashboard.webp",
    publicDirectory: "public/images/calculadoras",
    publicPath: "/images/calculadoras/calculadoras-wellness-dashboard.webp",
    alt: "Dashboard educativo de calculadoras de bienestar con métricas orientativas.",
    purpose:
      "Refuerza que las calculadoras son herramientas educativas, no diagnóstico ni plan automático.",
    component: "app/calculadoras/page.tsx",
    status: "needed",
    promptSpanish:
      "Dashboard premium con tarjetas abstractas de IMC, meta, hidratación y déficit, sin números exactos ni promesas.",
    promptEnglish:
      "Premium educational wellness dashboard on a tablet, abstract cards for BMI, weight goal, hydration and calorie deficit, no exact numbers, no ideal weight claims, cream graphite white and muted gold interface, clinical but warm, clean SEO-friendly hero visual, no patient photos, no medication references.",
  },
  {
    key: "laser-diodo-treatment-room",
    route: "/laser-diodo",
    currentVisualStatus:
      "Hero oscuro con chips de beneficios; falta imagen real o editorial del equipo/sala para elevar confianza.",
    imageMissing: true,
    recommendedImageType:
      "Sala de tratamiento láser diodo con equipo premium, sin procedimiento invasivo.",
    aspectRatio: "16:10",
    filename: "laser-diodo-treatment-room.webp",
    publicDirectory: "public/images/laser",
    publicPath: "/images/laser/laser-diodo-treatment-room.webp",
    alt: "Sala de tratamiento con equipo de láser diodo en ambiente clínico premium.",
    purpose:
      "Mostrar tecnología y ambiente profesional sin resultados antes/después ni promesas estéticas.",
    component: "components/sections/laser-diodo/LaserHero.tsx",
    status: "needed",
    promptSpanish:
      "Sala premium de tratamiento con equipo láser diodo moderno, limpia, cálida y clínica, sin paciente reconocible.",
    promptEnglish:
      "Premium clinical treatment room featuring a modern diode laser device, clean warm medical wellness environment, cream graphite white and muted gold accents, no visible brand logos, no procedure close-up, no before-and-after imagery, no skin damage, no identifiable patient, high-end editorial healthcare photography.",
  },
  {
    key: "inyectables-wellness-clinical-prep",
    route: "/inyectables-metabolicos",
    currentVisualStatus:
      "Página educativa con tarjetas de formulaciones; falta imagen clínica sobria que no parezca farmacéutica agresiva.",
    imageMissing: true,
    recommendedImageType:
      "Preparación clínica estéril abstracta de inyectables wellness, sin marcas.",
    aspectRatio: "4:5",
    filename: "inyectables-wellness-clinical-prep.webp",
    publicDirectory: "public/images/inyectables",
    publicPath: "/images/inyectables/inyectables-wellness-clinical-prep.webp",
    alt: "Preparación clínica supervisada de apoyo wellness inyectable sin marcas visibles.",
    purpose:
      "Aportar profesionalismo visual manteniendo seguridad, evaluación y ausencia de promesas.",
    component: "components/pages/InyectablesPage.tsx",
    status: "needed",
    promptSpanish:
      "Detalle clínico premium de preparación estéril de apoyo wellness inyectable, sin etiquetas de medicamentos ni marcas.",
    promptEnglish:
      "Premium clinical editorial close-up of sterile wellness injectable preparation on a clean medical tray, gloved clinician hands optional, no readable labels, no medication brands, no drug names, no dosage, cream graphite and muted gold clinic aesthetic, calm responsible healthcare tone, not dramatic or pharmaceutical advertising.",
  },
  {
    key: "sueroterapia-iv-lounge",
    route: "/sueroterapia",
    currentVisualStatus:
      "Página informativa de protocolos IV con tarjetas; falta imagen del ambiente de infusión cómodo y clínico.",
    imageMissing: true,
    recommendedImageType:
      "Lounge de sueroterapia premium con silla, equipo IV y luz natural.",
    aspectRatio: "4:5",
    filename: "sueroterapia-iv-lounge.webp",
    publicDirectory: "public/images/sueroterapia",
    publicPath: "/images/sueroterapia/sueroterapia-iv-lounge.webp",
    alt: "Ambiente premium de sueroterapia IV con silla clínica y luz natural.",
    purpose:
      "Mostrar comodidad y supervisión sin prometer beneficios ni destacar medicamentos de apoyo.",
    component: "components/pages/SueroterapiaPage.tsx",
    status: "needed",
    promptSpanish:
      "Lounge clínico premium para infusión IV con silla cómoda, gotero discreto y ambiente cálido.",
    promptEnglish:
      "Premium medical wellness IV therapy lounge, comfortable recliner, discreet IV stand, warm natural light, cream graphite and muted gold palette, calm supervised clinical environment, no visible drug labels, no medication names, no patient face, no extreme spa aesthetic, refined editorial healthcare photography.",
  },
  {
    key: "nutricion-clinical-consult",
    route: "/nutricion",
    currentVisualStatus:
      "Página sólida de pilares nutricionales; falta imagen de consulta nutricional práctica y puertorriqueña.",
    imageMissing: true,
    recommendedImageType:
      "Consulta nutricional con alimentos reales, tablet y plan orientativo.",
    aspectRatio: "16:10",
    filename: "nutricion-clinical-consult.webp",
    publicDirectory: "public/images/nutricion",
    publicPath: "/images/nutricion/nutricion-clinical-consult.webp",
    alt: "Consulta de nutrición clínica con alimentos saludables y guía personalizada.",
    purpose:
      "Humanizar la guía nutricional sin mostrar dietas extremas ni promesas de pérdida de peso.",
    component: "components/pages/NutricionPage.tsx",
    status: "needed",
    promptSpanish:
      "Consulta de nutrición clínica con alimentos frescos, tablet y hoja de orientación, estética premium cálida.",
    promptEnglish:
      "Warm premium clinical nutrition consultation, fresh accessible foods on a clean desk, clinician reviewing a tablet with abstract meal structure, Puerto Rico-friendly wellness context, cream graphite and muted gold palette, no calorie obsession, no restrictive diet imagery, no before-and-after, no guaranteed weight loss claims.",
  },
  {
    key: "coaching-metrics-review",
    route: "/coaching-seguimiento",
    currentVisualStatus:
      "Página con dashboard de métricas en tarjetas; falta visual de seguimiento humano con datos.",
    imageMissing: true,
    recommendedImageType:
      "Revisión de métricas en tablet durante sesión de seguimiento.",
    aspectRatio: "16:10",
    filename: "coaching-metrics-review.webp",
    publicDirectory: "public/images/coaching",
    publicPath: "/images/coaching/coaching-metrics-review.webp",
    alt: "Sesión de seguimiento clínico revisando métricas de bienestar en tablet.",
    purpose:
      "Conectar las métricas con acompañamiento humano sin declarar resultados superiores garantizados.",
    component: "components/pages/CoachingPage.tsx",
    status: "needed",
    promptSpanish:
      "Profesional revisando tendencias generales de bienestar en una tablet durante seguimiento clínico.",
    promptEnglish:
      "Premium healthcare coaching follow-up scene, clinician reviewing abstract wellness trend charts on a tablet with a non-identifiable adult patient, modern warm clinic interior, cream graphite and muted gold, no exact weight numbers, no outcome guarantees, no before-and-after imagery, calm trustworthy editorial photography.",
  },
  {
    key: "skin-glow-consult-editorial",
    route: "/skin-glow",
    currentVisualStatus:
      "Página educativa wellness con pilares; falta imagen estética clínica cálida sin parecer spa genérico.",
    imageMissing: true,
    recommendedImageType:
      "Consulta de piel saludable desde bienestar interno, con hidratación y luz natural.",
    aspectRatio: "4:5",
    filename: "skin-glow-consult-editorial.webp",
    publicDirectory: "public/images/skin-glow",
    publicPath: "/images/skin-glow/skin-glow-consult-editorial.webp",
    alt: "Consulta wellness enfocada en hidratación, nutrición y salud de la piel.",
    purpose:
      "Elevar el servicio Skin Glow sin insinuar procedimientos estéticos ni resultados garantizados.",
    component: "components/pages/SkinGlowPage.tsx",
    status: "needed",
    promptSpanish:
      "Escena editorial de consulta skin glow con agua, piel natural, nutrición y ambiente clínico premium.",
    promptEnglish:
      "Premium clinical wellness editorial for skin glow from within, consultation desk with water glass, skincare-neutral wellness notes, soft natural light, healthy natural skin tone without retouching exaggeration, cream graphite muted gold palette, no cosmetic procedure, no injectables, no guaranteed beauty result, no spa cliche.",
  },
  {
    key: "hair-support-scalp-consult",
    route: "/hair-support",
    currentVisualStatus:
      "Página clínica y responsable sobre caída de cabello; falta imagen de evaluación capilar no diagnóstica.",
    imageMissing: true,
    recommendedImageType:
      "Consulta capilar/wellness con revisión de historial o cabello natural.",
    aspectRatio: "4:5",
    filename: "hair-support-scalp-consult.webp",
    publicDirectory: "public/images/hair-support",
    publicPath: "/images/hair-support/hair-support-scalp-consult.webp",
    alt: "Consulta de soporte capilar enfocada en nutrición, historial y bienestar.",
    purpose:
      "Dar humanidad al servicio sin prometer crecimiento capilar ni tratar alopecia visualmente.",
    component: "components/pages/HairSupportPage.tsx",
    status: "needed",
    promptSpanish:
      "Consulta capilar premium con enfoque nutricional y clínico, sin imágenes dramáticas de caída o calvicie.",
    promptEnglish:
      "Premium clinical wellness hair support consultation, clinician reviewing nutrition and lab notes with a non-identifiable adult, subtle natural hair detail, warm modern clinic, cream graphite and muted gold, no dramatic baldness close-up, no regrowth promise, no before-and-after, no dermatology treatment claims.",
  },
  {
    key: "wellness-hombre-consult",
    route: "/wellness-hombre",
    currentVisualStatus:
      "Página de wellness masculino con bloques de confianza; falta imagen humana sobria y aspiracional.",
    imageMissing: true,
    recommendedImageType:
      "Consulta masculina de bienestar clínico con métricas generales.",
    aspectRatio: "4:5",
    filename: "wellness-hombre-consult.webp",
    publicDirectory: "public/images/wellness-hombre",
    publicPath: "/images/wellness-hombre/wellness-hombre-consult.webp",
    alt: "Consulta de wellness masculino enfocada en energía, metabolismo y seguimiento clínico.",
    purpose:
      "Posicionar bienestar masculino como clínico y responsable, no como promesa de rendimiento.",
    component: "components/pages/WellnessHombrePage.tsx",
    status: "needed",
    promptSpanish:
      "Hombre adulto en consulta clínica premium revisando bienestar, energía y métricas generales con profesional.",
    promptEnglish:
      "Premium men's clinical wellness consultation, adult man and clinician reviewing general wellness metrics on a tablet, modern warm medical office, cream graphite muted gold palette, no shirtless body transformation, no athletic performance promise, no hormone therapy implication, no medication products, trustworthy editorial photo.",
  },
  {
    key: "wellness-mujer-consult",
    route: "/wellness-mujer",
    currentVisualStatus:
      "Página de wellness femenino con buen tono clínico; falta imagen humana cálida y confiable.",
    imageMissing: true,
    recommendedImageType:
      "Consulta femenina de bienestar integral, energía, piel y metabolismo.",
    aspectRatio: "4:5",
    filename: "wellness-mujer-consult.webp",
    publicDirectory: "public/images/wellness-mujer",
    publicPath: "/images/wellness-mujer/wellness-mujer-consult.webp",
    alt: "Consulta de wellness femenino enfocada en bienestar integral y evaluación clínica.",
    purpose:
      "Humanizar wellness femenino sin reemplazar cuidado ginecológico ni hacer promesas hormonales.",
    component: "components/pages/WellnessMujerPage.tsx",
    status: "needed",
    promptSpanish:
      "Mujer adulta en consulta de bienestar clínico integral con ambiente cálido, premium y profesional.",
    promptEnglish:
      "Premium women's clinical wellness consultation, adult woman speaking with clinician in a warm modern clinic, tablet with abstract wellness notes, cream graphite white and muted gold palette, calm empowering tone, no hormone cure implication, no cosmetic guarantee, no before-and-after, no medication products.",
  },
  {
    key: "contacto-front-desk",
    route: "/contacto",
    currentVisualStatus:
      "Página de contacto clara con tarjetas y dirección; falta visual de ubicación o recepción para confianza local.",
    imageMissing: true,
    recommendedImageType:
      "Recepción o detalle de entrada de clínica con señal visual propia.",
    aspectRatio: "16:9",
    filename: "aurum-nova-front-desk.webp",
    publicDirectory: "public/images/contacto",
    publicPath: "/images/contacto/aurum-nova-front-desk.webp",
    alt: "Recepción de Aurum Nova Wellness Clinic en Arecibo con ambiente profesional.",
    purpose:
      "Reforzar presencia local y confianza antes de escribir o agendar.",
    component: "app/contacto/page.tsx",
    status: "needed",
    promptSpanish:
      "Recepción premium de clínica wellness en Arecibo con luz natural, tonos crema, grafito y dorado sutil.",
    promptEnglish:
      "Premium medical wellness clinic front desk or reception area in Arecibo Puerto Rico, warm natural light, cream graphite white and subtle muted gold details, clean professional and human, no crowded waiting room, no visible patient faces, no fake signage unless generic, refined local trust-building editorial photograph.",
  },
  {
    key: "agendar-evaluacion-intake",
    route: "/agendar-evaluacion",
    currentVisualStatus:
      "Página de agendar con proceso claro; falta imagen de intake/evaluación inicial para reducir fricción.",
    imageMissing: true,
    recommendedImageType:
      "Proceso de intake clínico con formulario, calendario y tablet.",
    aspectRatio: "16:10",
    filename: "agendar-evaluacion-intake.webp",
    publicDirectory: "public/images/agendar",
    publicPath: "/images/agendar/agendar-evaluacion-intake.webp",
    alt: "Proceso de evaluación médica inicial con formulario y coordinación de cita.",
    purpose:
      "Mostrar que agendar es un proceso organizado, clínico y sin compromiso de tratamiento.",
    component: "app/agendar-evaluacion/page.tsx",
    status: "needed",
    promptSpanish:
      "Escena premium de intake médico con formulario, calendario y tablet en escritorio clínico cálido.",
    promptEnglish:
      "Premium medical intake and scheduling scene, clean clinic desk with appointment calendar, tablet with abstract intake form, pen and subtle gold details, cream graphite and white palette, warm trustworthy healthcare atmosphere, no readable personal data, no treatment promise, no medication products, editorial photography.",
  },
];
