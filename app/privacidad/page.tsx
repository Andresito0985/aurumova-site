import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidad | Aurum Nova Wellness Clinic",
  description:
    "Política de privacidad de Aurum Nova Wellness Clinic. Información sobre qué datos recopilamos, cómo los usamos y cómo protegemos tu información.",

  alternates: { canonical: "https://aurumnovawellnessclinic.com/privacidad" },
  openGraph: {
    title: "Política de Privacidad | Aurum Nova Wellness Clinic",
    description: "Política de privacidad de Aurum Nova Wellness Clinic. Información sobre qué datos recopilamos, cómo los usamos y cómo protegemos tu información.",
    url: "https://aurumnovawellnessclinic.com/privacidad",
    siteName: "Aurum Nova Wellness Clinic",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidad | Aurum Nova Wellness Clinic",
    description: "Política de privacidad de Aurum Nova Wellness Clinic. Información sobre qué datos recopilamos, cómo los usamos y cómo protegemos tu información.",
  },
  robots: { index: false, follow: false },
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F4] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#C9A84C] hover:text-[#A8872E] font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-[#1A1A1A] mb-2">Política de Privacidad</h1>
          <p className="text-sm text-[#9A9A9A]">Aurum Nova Wellness Clinic · Última actualización: 2026</p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#2D2D2D] rounded-2xl p-5 mb-8">
          <p className="text-sm text-[#9A9A9A] leading-relaxed">
            En Aurum Nova Wellness Clinic respetamos tu privacidad. Esta política explica qué
            información recopilamos cuando usas nuestro sitio web o te comunicas con nuestro
            equipo, cómo la usamos y cómo la protegemos.
          </p>
        </div>

        <div className="space-y-5">

          <div className="bg-white border border-[#E8E4DA] rounded-2xl p-6">
            <h2 className="text-base font-semibold text-[#1A1A1A] mb-4 flex items-start gap-2">
              <span className="text-[#C9A84C] font-bold shrink-0">1.</span>
              ¿Qué información recopilamos?
            </h2>
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold text-[#3D3D3D] uppercase tracking-wider mb-1.5">Datos de contacto</p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  Cuando completas un formulario en nuestro sitio, nos contactas por WhatsApp o te comunicas con nosotros directamente, podemos recopilar: nombre, número de teléfono y/o WhatsApp, dirección de correo electrónico, y la zona o servicio de interés que indiques voluntariamente.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#3D3D3D] uppercase tracking-wider mb-1.5">Información de salud proporcionada voluntariamente</p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  Cuando completas formularios específicos de servicio (evaluación metabólica, láser diodo, etc.), puedes proporcionar voluntariamente información general sobre objetivos de salud, peso aproximado, estatura y zona de interés. Esta información se usa únicamente para preparar y coordinar tu evaluación médica inicial. La información clínica detallada se recopila exclusivamente durante la consulta médica presencial — no a través de este sitio web.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#3D3D3D] uppercase tracking-wider mb-1.5">Información técnica</p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  Como la mayoría de los sitios web, podemos recopilar automáticamente información técnica básica (tipo de navegador, páginas visitadas, tiempo en el sitio) para mejorar la experiencia. Esta información no te identifica individualmente.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E8E4DA] rounded-2xl p-6">
            <h2 className="text-base font-semibold text-[#1A1A1A] mb-4 flex items-start gap-2">
              <span className="text-[#C9A84C] font-bold shrink-0">2.</span>
              ¿Cómo usamos tu información?
            </h2>
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold text-[#3D3D3D] uppercase tracking-wider mb-1.5">Propósitos de uso</p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  La información que nos proporcionas se utiliza exclusivamente para: contactarte en respuesta a tu consulta, coordinar y confirmar tu evaluación médica inicial, orientarte sobre programas y servicios, y dar seguimiento a tu comunicación con el equipo de Aurum Nova.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#3D3D3D] uppercase tracking-wider mb-1.5">Lo que no hacemos</p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  No vendemos, alquilamos ni compartimos tu información personal con terceros para propósitos comerciales o publicitarios. No utilizamos tu información para enviarte comunicaciones de marketing no solicitadas de terceros.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E8E4DA] rounded-2xl p-6">
            <h2 className="text-base font-semibold text-[#1A1A1A] mb-4 flex items-start gap-2">
              <span className="text-[#C9A84C] font-bold shrink-0">3.</span>
              Información de salud y confidencialidad médica
            </h2>
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold text-[#3D3D3D] uppercase tracking-wider mb-1.5">Confidencialidad</p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  La información médica y de salud proporcionada en el contexto de la relación clínica es tratada con la máxima confidencialidad, de acuerdo con las leyes y regulaciones aplicables de privacidad médica en Puerto Rico y las leyes federales de Estados Unidos aplicables.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#3D3D3D] uppercase tracking-wider mb-1.5">Formularios del sitio web</p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  Los formularios en este sitio recopilan información preliminar de contacto e interés general. No son expedientes médicos ni reemplazan la documentación clínica formal generada durante la consulta presencial. No proporciones información médica sensible detallada a través de formularios web o mensajería electrónica.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E8E4DA] rounded-2xl p-6">
            <h2 className="text-base font-semibold text-[#1A1A1A] mb-4 flex items-start gap-2">
              <span className="text-[#C9A84C] font-bold shrink-0">4.</span>
              WhatsApp y comunicación directa
            </h2>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">
              Cuando nos contactas a través de WhatsApp, las conversaciones están sujetas a las políticas de privacidad de WhatsApp / Meta, además de esta política. Utilizamos WhatsApp únicamente para coordinar consultas, responder preguntas y dar seguimiento a tu interés en los servicios de Aurum Nova.
            </p>
          </div>

          <div className="bg-white border border-[#E8E4DA] rounded-2xl p-6">
            <h2 className="text-base font-semibold text-[#1A1A1A] mb-4 flex items-start gap-2">
              <span className="text-[#C9A84C] font-bold shrink-0">5.</span>
              Seguridad y retención de datos
            </h2>
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold text-[#3D3D3D] uppercase tracking-wider mb-1.5">Medidas de seguridad</p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  Tomamos precauciones razonables para proteger la información que nos proporcionas. Sin embargo, ningún sistema de transmisión de datos por internet es completamente seguro. No podemos garantizar la seguridad absoluta de los datos transmitidos electrónicamente. Por esta razón, te recomendamos no compartir información médica sensible a través de formularios web o mensajería electrónica.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E8E4DA] rounded-2xl p-6">
            <h2 className="text-base font-semibold text-[#1A1A1A] mb-4 flex items-start gap-2">
              <span className="text-[#C9A84C] font-bold shrink-0">6.</span>
              Tus derechos
            </h2>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">
              Puedes solicitar información sobre los datos que tenemos sobre ti, solicitar correcciones o indicar que no deseas recibir comunicaciones de seguimiento. Contáctanos directamente y haremos esfuerzos razonables para atender tu solicitud. Si solicitas que no te contactemos, dejaremos de hacerlo salvo que sea necesario para completar una solicitud que hayas iniciado.
            </p>
          </div>

          <div className="bg-white border border-[#E8E4DA] rounded-2xl p-6">
            <h2 className="text-base font-semibold text-[#1A1A1A] mb-4 flex items-start gap-2">
              <span className="text-[#C9A84C] font-bold shrink-0">7.</span>
              Cambios a esta política
            </h2>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">
              Podemos actualizar esta Política de Privacidad ocasionalmente. Los cambios se publicarán en esta página con la fecha de actualización correspondiente. El uso continuo del sitio web después de cambios constituye aceptación de la política actualizada.
            </p>
          </div>

          <div className="bg-white border border-[#E8E4DA] rounded-2xl p-6">
            <h2 className="text-base font-semibold text-[#1A1A1A] mb-4 flex items-start gap-2">
              <span className="text-[#C9A84C] font-bold shrink-0">8.</span>
              Contacto
            </h2>
            <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
              Para preguntas sobre esta política, solicitudes de acceso a tus datos o cualquier inquietud sobre el manejo de tu información:
            </p>
            <div className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-xl p-4 space-y-1.5 text-sm">
              <p className="font-semibold text-[#1A1A1A]">Aurum Nova Wellness Clinic</p>
              <p className="text-[#6B6B6B]">Arecibo Medical Plaza, Suite 201, Arecibo, Puerto Rico</p>
              <a href="mailto:aurumnovawc@gmail.com" className="block text-[#C9A84C] hover:underline">
                aurumnovawc@gmail.com
              </a>
              <a
                href="https://wa.me/19396410504"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#C9A84C] hover:underline"
              >
                WhatsApp: 939-641-0504
              </a>
            </div>
          </div>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#C9A84C] hover:text-[#A8872E] font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
