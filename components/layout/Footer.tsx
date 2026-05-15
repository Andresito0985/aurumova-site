import Link from "next/link";
import { AtSign, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { callLink, siteConfig, whatsappLink } from "@/content/site";

const programs = [
  { label: "Programa Metabólico Integral", href: "/programa-metabolico" },
  { label: "Láser Diodo High-Tech", href: "/laser-diodo" },
  { label: "Sueroterapia Médica", href: "/sueroterapia" },
  { label: "Inyectables Metabólicos", href: "/inyectables-metabolicos" },
  { label: "Wellness Mujer", href: "/wellness-mujer" },
  { label: "Wellness Hombre", href: "/wellness-hombre" },
  { label: "Skin Glow", href: "/skin-glow" },
  { label: "Hair Support", href: "/hair-support" },
  { label: "Coaching y Seguimiento", href: "/coaching-seguimiento" },
];

const legal = [
  { label: "Enfoque Clínico", href: "/enfoque-clinico" },
  { label: "Seguridad y Elegibilidad", href: "/seguridad-elegibilidad" },
  { label: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
  { label: "Aviso Médico", href: "/disclaimer-medico" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Términos", href: "/terminos" },
];

const resources = [
  { label: "Perfil metabólico integral", href: "/perfil-metabolico" },
  { label: "Análisis de laboratorios", href: "/analisis-laboratorios" },
  { label: "Calculadoras", href: "/calculadoras" },
  { label: "Calculadora IMC", href: "/calculadoras/imc" },
  { label: "Meta de peso", href: "/calculadoras/meta-de-peso" },
  { label: "Hidratación", href: "/calculadoras/hidratacion-electrolitos" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 pt-16 pb-28 lg:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand + disclaimer excerpt */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="text-xl font-semibold tracking-wide text-white">Aurum Nova</span>
              <span className="block text-xs tracking-[0.2em] uppercase text-[#C9A84C] font-medium mt-0.5">
                Wellness Clinic
              </span>
            </div>
            <p className="text-[#6B6B6B] text-xs leading-relaxed mb-5">
              La información en este website es educativa y no sustituye una evaluación médica.
              Los servicios médicos, terapias, sueroterapia, inyectables y cualquier formulación
              personalizada requieren evaluación clínica individual. No todos los pacientes son
              candidatos. Los resultados pueden variar.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-[#3D3D3D] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-[#9A9A9A]"
                aria-label="Instagram @aurumnovawc"
              >
                <AtSign className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-[#3D3D3D] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-[#9A9A9A]"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={whatsappLink("Hola, quisiera agendar una evaluación en Aurum Nova Wellness Clinic.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-[#3D3D3D] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-[#9A9A9A]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-4">
              Programas y servicios
            </h4>
            <ul className="space-y-2">
              {programs.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-[#6B6B6B] hover:text-[#9A9A9A] transition-colors leading-relaxed"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-4">
              Recursos e información
            </h4>
            <ul className="space-y-2 mb-6">
              {resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-[#6B6B6B] hover:text-[#9A9A9A] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 mb-6">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-[#6B6B6B] hover:text-[#9A9A9A] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + CTA */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href={whatsappLink("Hola, quisiera información sobre Aurum Nova Wellness Clinic.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-xs text-[#6B6B6B] hover:text-[#9A9A9A] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#C9A84C]" />
                  <span>
                    WhatsApp: {siteConfig.whatsappDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={callLink()}
                  className="flex items-start gap-3 text-xs text-[#6B6B6B] hover:text-[#9A9A9A] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#C9A84C]" />
                  <span>
                    Llamadas: {siteConfig.callDisplay}
                    <span className="block text-[10px] text-[#4A4A4A]">solo llamadas</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-xs text-[#6B6B6B] hover:text-[#9A9A9A] transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#C9A84C]" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-xs text-[#6B6B6B] hover:text-[#9A9A9A] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#C9A84C]" />
                  <span>
                    Aurum Nova Wellness Clinic
                    <br />
                    Ave. Barbosa 65, Arecibo Medical Plaza
                    <br />
                    Suite 201, Arecibo, PR
                    <span className="mt-1 block text-[#C9A84C]">Ver ubicación en Google Maps</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs text-[#6B6B6B] hover:text-[#9A9A9A] transition-colors"
                >
                  <AtSign className="w-3.5 h-3.5 shrink-0 text-[#C9A84C]" />
                  {siteConfig.instagram}
                </a>
              </li>
            </ul>

            <a
              href={whatsappLink("Hola, quisiera agendar mi evaluación médica en Aurum Nova Wellness Clinic.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-200 w-full justify-center"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Agendar por WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom disclaimer + copyright */}
        <div className="mt-12 pt-8 border-t border-[#1E1E1E]">
          <div className="bg-[#0D0D0D] rounded-xl p-5 mb-6">
            <p className="text-[10px] font-semibold text-[#4A4A4A] uppercase tracking-wider mb-2">
              Aviso Médico y Legal
            </p>
            <div className="space-y-2 text-[10px] text-[#3D3D3D] leading-relaxed">
              <p>
                La información en este sitio web es de carácter educativo e informativo únicamente y no
                constituye consejo médico, diagnóstico ni prescripción. Todos los programas y terapias
                requieren evaluación médica individualizada. No todos los pacientes son candidatos. Los
                resultados individuales varían.
              </p>
              <p>
                Los medicamentos formulados no son aprobados por FDA ni son equivalentes genéricos de
                medicamentos aprobados por FDA. Su uso requiere evaluación médica individual, prescripción
                profesional y revisión de riesgos, beneficios, historial clínico y contraindicaciones.
              </p>
              <p>
                Cuando clínicamente indicado, Aurum Nova puede coordinar con farmacias de formulación
                para terapias personalizadas bajo prescripción médica individual.
              </p>
              <p>
                Para emergencias médicas, llama al 911 o acude al área de emergencias más cercana.
                Aurum Nova no es un servicio de emergencias médicas.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-[10px] text-[#3D3D3D]">
              © {new Date().getFullYear()} Aurum Nova Wellness Clinic. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap gap-4">
              {legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[10px] text-[#3D3D3D] hover:text-[#6B6B6B] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
