// Barrel entry for design-sync — exports the 25 components synced to claude.ai/design.
// This file is what the converter bundles into window.AurumNova.
// Edit componentSrcMap in config.json to change scope; update exports here to match.

// UI primitives
export { Button, buttonVariants } from '../components/ui/button.tsx';
export { Badge, badgeVariants } from '../components/ui/badge.tsx';
export {
  Card, CardHeader, CardFooter, CardTitle,
  CardAction, CardDescription, CardContent,
} from '../components/ui/card.tsx';
export { Separator } from '../components/ui/separator.tsx';
export { default as PricingCard } from '../components/ui/PricingCard.tsx';
export { default as MedicalDisclaimer } from '../components/ui/MedicalDisclaimer.tsx';
export { default as BeforeAfterSlider } from '../components/ui/BeforeAfterSlider.tsx';
export { default as CTABanner } from '../components/ui/CTABanner.tsx';
export { default as GoogleMapsLocationCard } from '../components/ui/GoogleMapsLocationCard.tsx';

// Section components
export { default as FAQSection } from '../components/sections/FAQSection.tsx';
export { default as TeamSection } from '../components/sections/TeamSection.tsx';
export { default as CTASection } from '../components/sections/CTASection.tsx';
export { default as PageHero } from '../components/sections/PageHero.tsx';
export { default as MetodoAurum } from '../components/sections/MetodoAurum.tsx';
export { default as GroupedFAQAccordion } from '../components/sections/GroupedFAQAccordion.tsx';
export { default as TestimonialsSection } from '../components/sections/TestimonialsSection.tsx';

// Visual components
export { default as PremiumComparisonTable } from '../components/visual/PremiumComparisonTable.tsx';
export { default as VisualFeatureSection } from '../components/visual/VisualFeatureSection.tsx';
export { default as ServiceMenuEditorial } from '../components/visual/ServiceMenuEditorial.tsx';
