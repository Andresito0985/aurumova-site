import { ShieldCheck } from "lucide-react";

interface MedicalDisclaimerProps {
  variant?: "inline" | "box" | "compact";
  includeCompounding?: boolean;
  custom?: string;
  className?: string;
}

export default function MedicalDisclaimer({
  variant = "box",
  includeCompounding = false,
  custom,
  className = "",
}: MedicalDisclaimerProps) {
  if (variant === "compact") {
    return (
      <p className={`text-xs text-[#9A9A9A] leading-relaxed ${className}`}>
        {custom ??
          "Todos los programas requieren evaluación médica individual. No todos los pacientes califican. Los resultados individuales varían."}
      </p>
    );
  }

  if (variant === "inline") {
    return (
      <div className={`flex items-start gap-2.5 text-xs text-[#6B6B6B] leading-relaxed ${className}`}>
        <ShieldCheck className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 mt-0.5" />
        <p>
          {custom ??
            "Todos los programas requieren evaluación médica individual. No todos los pacientes son candidatos. Los resultados individuales varían."}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`bg-[#FAF8F4] border border-[#E8E4DA] rounded-xl p-4 space-y-2 ${className}`}
    >
      <div className="flex items-center gap-2 mb-1">
        <ShieldCheck className="w-4 h-4 text-[#C9A84C]" />
        <span className="text-xs font-semibold text-[#3D3D3D]">Aviso Médico Importante</span>
      </div>
      {custom ? (
        <p className="text-xs text-[#6B6B6B] leading-relaxed">{custom}</p>
      ) : (
        <div className="space-y-1.5 text-xs text-[#6B6B6B] leading-relaxed">
          <p>
            La información en este sitio es educativa e informativa, y no constituye consejo médico,
            diagnóstico ni prescripción. Todos los programas requieren evaluación médica
            individualizada. No todos los pacientes son candidatos. Los resultados individuales varían.
          </p>
          {includeCompounding && (
            <p>
              Los medicamentos formulados no son aprobados por FDA ni son equivalentes genéricos de
              medicamentos aprobados por FDA. Su uso requiere evaluación médica individual,
              prescripción profesional y revisión de riesgos, beneficios, historial clínico,
              medicamentos actuales y contraindicaciones.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
