"use client";

import {
  Activity, Zap, Droplets, Syringe, Heart, Shield,
  Sparkles, Leaf, Apple, ArrowRight, CheckCircle2,
  ClipboardList, UserCheck, LineChart, RefreshCw,
  ShieldCheck, Star, FlaskConical, Target, Users, Clock,
  MessageCircle, Stethoscope,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/ui/CTABanner";
import PricingCard from "@/components/ui/PricingCard";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import { whatsappLink } from "@/content/site";
import type { ProgramPageContent } from "@/content/program-pages";

const iconMap: Record<string, React.ElementType> = {
  Activity, Zap, Droplets, Syringe, Heart, Shield, Sparkles, Leaf, Apple,
  ClipboardList, UserCheck, LineChart, RefreshCw, ShieldCheck, Star,
  FlaskConical, Target, Users, Clock, MessageCircle, Stethoscope, CheckCircle2,
};

const relatedLabels: Record<string, string> = {
  "programa-metabolico": "Programa Metabólico Integral",
  "laser-diodo": "Láser Diodo High-Tech",
  "sueroterapia": "Sueroterapia NAD+ & Myers",
  "inyectables-metabolicos": "Inyectables Metabólicos",
  "wellness-mujer": "Wellness Mujer",
  "wellness-hombre": "Wellness Hombre",
  "nutricion": "Nutrición Personalizada",
  "suplementacion": "Suplementación & Wellness Support",
  "skin-glow": "Skin & Glow",
  "hair-support": "Hair Support",
  "coaching-seguimiento": "Coaching & Seguimiento",
};

interface ProgramPageProps {
  content: ProgramPageContent;
}

export default function ProgramPage({ content }: ProgramPageProps) {
  const accentColor = content.hero.accentColor ?? "#C9A84C";

  return (
    <>
      {/* Hero */}
      <PageHero
        badge={content.hero.badge}
        title={content.hero.title}
        highlight={content.hero.highlight}
        subtitle={content.hero.subtitle}
        ctaText={content.hero.ctaText}
        ctaMessage={content.hero.ctaMessage}
        secondaryCtaText={content.hero.secondaryCtaText}
        secondaryCtaHref={content.hero.secondaryCtaHref}
        disclaimer={content.hero.disclaimer}
        accentColor={accentColor}
        backHref="/"
        backLabel="Inicio"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-5 leading-tight">
                {content.overview.title}
              </h2>
              <div className="space-y-4">
                {content.overview.body.map((para, i) => (
                  <p key={i} className="text-base text-[#6B6B6B] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {content.medicalNote && (
                <div className="mt-6 bg-[#FAF8F4] border border-[#E8E4DA] rounded-xl p-4 flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#6B6B6B] leading-relaxed italic">
                    {content.medicalNote}
                  </p>
                </div>
              )}
            </motion.div>

            {/* Pricing or features sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {content.pricing ? (
                <PricingCard
                  pricing={content.pricing}
                  ctaHref={whatsappLink(content.hero.ctaMessage)}
                  ctaText={content.hero.ctaText}
                />
              ) : (
                <div className="bg-[#FAF8F4] border border-[#E8E4DA] rounded-2xl p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C] mb-4">
                    Lo que incluye
                  </p>
                  <ul className="space-y-3">
                    {content.features.slice(0, 5).map((f) => {
                      const Icon = iconMap[f.icon] ?? CheckCircle2;
                      return (
                        <li key={f.title} className="flex items-start gap-3">
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                            style={{ backgroundColor: `${accentColor}15` }}
                          >
                            <Icon className="w-3.5 h-3.5" style={{ color: accentColor }} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#1A1A1A]">{f.title}</p>
                            <p className="text-xs text-[#9A9A9A]">{f.description}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <a
                    href={whatsappLink(content.hero.ctaMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-[#1A1A1A] font-semibold py-3 rounded-full text-sm transition-all duration-200"
                  >
                    {content.hero.ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="section-padding bg-[#FAF8F4]">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A]">
              Qué incluye este programa
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.features.map((feature, i) => {
              const Icon = iconMap[feature.icon] ?? CheckCircle2;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-white border border-[#E8E4DA] rounded-2xl p-5 hover:border-[#C9A84C]/30 hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${accentColor}12` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: accentColor }} />
                  </div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1.5">{feature.title}</h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process (if provided) */}
      {content.process && content.process.length > 0 && (
        <section className="section-padding bg-[#1A1A1A]">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Cómo funciona el proceso
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {content.process.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-[#242424] border border-[#2D2D2D] rounded-2xl p-5"
                >
                  <span className="text-xs font-bold text-[#C9A84C]/50 tracking-widest block mb-2">
                    {step.step}
                  </span>
                  <h3 className="text-sm font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-[#9A9A9A] leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Disclaimer box */}
      {content.disclaimer && (
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container-max">
            <MedicalDisclaimer
              variant="box"
              custom={content.disclaimer}
              includeCompounding={false}
            />
          </div>
        </section>
      )}

      {/* FAQ (if provided) */}
      {content.faq && content.faq.length > 0 && (
        <FAQSection faqs={content.faq} />
      )}

      {/* Related programs */}
      {content.relatedSlugs && content.relatedSlugs.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-max">
            <h2 className="text-xl font-semibold text-[#1A1A1A] mb-6">
              Programas relacionados
            </h2>
            <div className="flex flex-wrap gap-3">
              {content.relatedSlugs.map((slug) => (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#3D3D3D] hover:text-[#C9A84C] border border-[#E8E4DA] hover:border-[#C9A84C]/40 px-4 py-2 rounded-full transition-all"
                >
                  {relatedLabels[slug] ?? slug}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <CTABanner
        title="¿Listo para comenzar?"
        subtitle="Agenda tu evaluación médica inicial. El médico determina qué programa es el adecuado para ti."
        ctaText={content.hero.ctaText}
        ctaMessage={content.hero.ctaMessage}
        variant="dark"
      />
    </>
  );
}
