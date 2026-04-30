import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";

interface CalculatorDisclaimerProps {
  children: string;
}

export default function CalculatorDisclaimer({ children }: CalculatorDisclaimerProps) {
  return (
    <MedicalDisclaimer
      variant="box"
      custom={children}
      className="border-[#E8E4DA] bg-white"
    />
  );
}
