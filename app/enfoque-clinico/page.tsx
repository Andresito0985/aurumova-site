import type { Metadata } from "next";
import { ClipboardList, UserCheck, FlaskConical, Salad, LineChart, Pill, ArrowUpRight, BookOpen, ShieldCheck } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "Nuestro Enfoque Clínico | Aurum Nova Wellness Clinic",
  description:
    "El enfoque clínico de Aurum Nova: evaluación individualizada, plan personalizado, terapia médica cuando aplica, nutrición, seguimiento continuo y referidos cuando es necesario. Medicina con integridad.",

  alternates: { canonical: "https://aurumnovawellnessclinic.com/enfoque-clinico" },
  openGraph: {
    title: "Nuestro Enfoque Clínico | Aurum Nova Wellness Clinic",
    description: "El enfoque clínico de Aurum Nova: evaluación individualizada, plan personalizado, terapia médica cuando aplica, nutrición, seguimiento continuo y referidos cuando es necesario.",
    url: "https://aurumnovawellnessclinic.com/enfoque-clinico",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuestro Enfoque Clínico | Aurum Nova Wellness Clinic",
    description: "El enfoque clínico de Aurum Nova: evaluación individualizada, plan personalizado, terapia médica cuando aplica, nutrición, seguimiento continuo y referidos cuando es necesario.",
  },
};

const steps = [
  {
    icon: ClipboardList,
    num: "01",
    title: "Evaluación médica individual",
    desc: "En Aurum Nova, cada programa comienza con una evaluación individual. Revisamos historial clínico, medicamentos actuales, objetivos, posibles contraindicaciones y factores de riesgo antes de recomendar cualquier terapia médica. Ningún protocolo comienza sin entender quién eres clínicamente.",
    detail: "Historial médico · Medicamentos actuales · Condiciones activas · Contraindicaciones · Factores de riesgo · Objetivos individuales",
  },
  {
    icon: UserCheck,
    num: "02",
    title: "Plan personalizado",
    desc: "Con base en la evaluación, el proveedor diseña un plan adaptado a tu perfil específico. No existe un paquete único — el plan refleja tu estado de salud, objetivos, tolerancia esperada y respuesta individual. La personalización es clínica, no de marketing.",
    detail: "Plan nutricional individual · Protocolo de seguimiento · Metas clínicas realistas · Cronograma adaptado",
  },
  {
    icon: Pill,
    num: "03",
    title: "Terapia médica para candidatos calificados",
    desc: "Cuando el paciente es candidato y la terapia está clínicamente indicada, se prescribe e inicia bajo supervisión. Esto puede incluir terapias formuladas, inyectables de apoyo u otras intervenciones según el programa. Los pacientes que no son candidatos son informados con claridad.",
    detail: "Solo para pacientes candidatos · Prescripción profesional · Cantidad clínicamente determinada · Sin auto-selección de terapia",
  },
  {
    icon: Salad,
    num: "04",
    title: "Nutrición y soporte de estilo de vida",
    desc: "La nutrición no es un complemento opcional — es parte central del programa. Se orienta sobre estructura de comidas, metas de proteína, hidratación y elecciones alimentarias que apoyan el metabolismo y la adherencia a largo plazo. El estilo de vida se aborda con estrategias prácticas y sostenibles.",
    detail: "Meta proteica individual · Hidratación diaria · Estructura de comidas · Estrategias de adherencia",
  },
  {
    icon: LineChart,
    num: "05",
    title: "Seguimiento y monitoreo continuo",
    desc: "El progreso se mide, no se supone. Cada sesión de seguimiento documenta métricas clave: peso, cintura, IMC, adherencia, tolerancia, apetito, energía y síntomas. El plan se ajusta según la respuesta real del paciente, no según un protocolo rígido.",
    detail: "Peso · Cintura · IMC · Adherencia · Tolerancia · Apetito · Energía · Síntomas",
  },
  {
    icon: FlaskConical,
    num: "06",
    title: "Coordinación con farmacia de formulación",
    desc: "Cuando clínicamente indicado, Aurum Nova puede coordinar con farmacias de formulación acreditadas para terapias personalizadas bajo prescripción médica individual. Los medicamentos formulados no son aprobados por FDA; su uso requiere evaluación, prescripción y revisión de riesgos y beneficios.",
    detail: "Solo cuando clínicamente indicado · Prescripción individual · Farmacia acreditada · Revisión de riesgos y beneficios",
  },
  {
    icon: ArrowUpRight,
    num: "07",
    title: "Referidos cuando es apropiado",
    desc: "Aurum Nova no reemplaza la atención médica especializada. Cuando una condición requiere ginecología, endocrinología, cardiología, dermatología u otra especialidad, el proveedor coordina el referido correspondiente. La seguridad del paciente siempre tiene prioridad sobre la continuidad comercial.",
    detail: "Endocrinología · Ginecología · Cardiología · Dermatología · Tricología · Medicina primaria",
  },
  {
    icon: BookOpen,
    num: "08",
    title: "Documentación y educación del paciente",
    desc: "El paciente recibe orientación clara sobre su plan, los medicamentos involucrados (cuando aplica), qué esperar, señales de alerta y cómo comunicarse con el equipo entre sesiones. La educación del paciente no es letra pequeña — es parte del protocolo.",
    detail: "Plan escrito · Instrucciones de uso · Señales de alerta · Canal de comunicación directo",
  },
];

export default function EnfoqueClinicoPage() {
  return (
    <>
      <PageHero
        badge="Nuestro Enfoque"
        title="Medicina wellness"
        highlight="con integridad clínica"
        subtitle="Ocho pasos que definen cómo abordamos cada paciente: desde la evaluación inicial hasta la documentación y los referidos cuando es necesario. Sin atajos, sin promesas vacías."
        ctaText="Agendar mi evaluación"
        ctaMessage="Hola, me interesa conocer más sobre el enfoque clínico de Aurum Nova y agendar mi evaluación inicial."
        secondaryCtaText="Seguridad y elegibilidad"
        secondaryCtaHref="/seguridad-elegibilidad"
      />

      {/* Core statement */}
      <section className="py-10 bg-white border-b border-[#E8E4DA]">
        <div className="container-max max-w-3xl mx-auto text-center px-4">
          <p className="text-lg text-[#3D3D3D] leading-relaxed font-light">
            "En Aurum Nova, cada programa comienza con una evaluación individual. Revisamos historial
            clínico, medicamentos actuales, objetivos, posibles contraindicaciones y factores de
            riesgo antes de recomendar cualquier terapia médica."
          </p>
        </div>
      </section>

      {/* 8-step clinical approach */}
      <section className="section-padding bg-[#FAF8F4]">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Proceso clínico
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A]">
              Ocho pasos de nuestro enfoque
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isDark = i % 2 === 1;
              return (
                <div
                  key={step.num}
                  className={`rounded-2xl p-6 border flex gap-5 items-start ${
                    isDark
                      ? "bg-[#1A1A1A] border-[#2D2D2D]"
                      : "bg-white border-[#E8E4DA]"
                  }`}
                >
                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isDark ? "bg-[#C9A84C]/10" : "bg-[#C9A84C]/10"
                    }`}>
                      <Icon className="w-5 h-5 text-[#C9A84C]" />
                    </div>
                    <span className="text-xs font-bold text-[#C9A84C]">{step.num}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-base font-semibold mb-2 ${isDark ? "text-white" : "text-[#1A1A1A]"}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-3 ${isDark ? "text-[#9A9A9A]" : "text-[#6B6B6B]"}`}>
                      {step.desc}
                    </p>
                    <div className={`text-[10px] font-medium tracking-wide ${isDark ? "text-[#4A4A4A]" : "text-[#9A9A9A]"}`}>
                      {step.detail}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What we don't do */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
              Transparencia
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-3">
              Lo que no hacemos
            </h2>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">
              La honestidad sobre las limitaciones del programa es parte de la integridad clínica.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Iniciar terapias sin evaluación médica previa",
              "Prescribir terapias que el paciente mismo selecciona",
              "Garantizar resultados específicos de ningún programa",
              "Reemplazar la atención de médico primario o especialistas",
              "Ofrecer el mismo protocolo a todos los pacientes",
              "Continuar un programa si hay contraindicaciones de seguridad",
              "Prescribir sin criterio clínico individual documentado",
              "Ignorar señales de alerta durante el seguimiento",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-[#FAF8F4] border border-[#E8E4DA] rounded-xl px-4 py-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0 mt-1.5" />
                <p className="text-sm text-[#6B6B6B]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety commitment */}
      <section className="section-padding bg-[#1A1A1A]">
        <div className="container-max max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-5 h-5 text-[#C9A84C]" />
            <h2 className="text-xl font-semibold text-white">Compromiso con la seguridad</h2>
          </div>
          <p className="text-sm text-[#9A9A9A] leading-relaxed mb-6">
            La seguridad del paciente siempre tiene prioridad sobre cualquier consideración
            comercial. Si durante la evaluación o el seguimiento identificamos que un paciente no
            es candidato para un programa, o que debe buscar atención especializada, lo
            comunicamos con claridad — incluso si eso significa no continuar con el programa.
          </p>
          <MedicalDisclaimer
            variant="box"
            includeCompounding
          />
        </div>
      </section>

      <CTABanner
        title="Conoce si eres candidato"
        subtitle="La evaluación médica inicial es el primer paso. Sin compromiso, sin promesas — solo una evaluación honesta."
        ctaText="Agendar mi evaluación"
        ctaMessage="Hola, quisiera agendar mi evaluación médica inicial en Aurum Nova para conocer qué programas son apropiados para mí."
        variant="dark"
        secondaryHref="/seguridad-elegibilidad"
        secondaryText="Seguridad y elegibilidad"
      />
    </>
  );
}
