import { Activity, Layers3, PlusCircle, Sparkles, Zap, Type } from "lucide-react";
import {
  DhirajBentoGrid,
  DhirajHero,
  DhirajSection,
  DhirajTestimonial,
} from "@/components/dhiraj-sections";
import { Marquee } from "@/components/marquee";

const navLinks = [
  { label: "Base Layer", href: "/base-layer" },
  { label: "Cherry-Picked Vault", href: "/vault" },
  { label: "Proof", href: "#proof" },
];

function HeroPreview() {
  const bars = [
    { label: "GSAP", value: 96, claims: 32 },
    { label: "Motion", value: 85, claims: 20 },
    { label: "Three/R3F", value: 72, claims: 18 },
    { label: "Next.js 15", value: 65, claims: 15 },
    { label: "Drizzle", value: 50, claims: 12 },
  ];

  return (
    <div className="relative flex min-h-72 flex-col justify-between overflow-hidden p-5">
      <div className="absolute inset-x-0 top-0 h-px bg-[rgb(var(--dhiraj-line))]" />
      <div className="flex items-center justify-between text-xs text-[rgb(var(--dhiraj-muted))]">
        <span>Mastery Engine</span>
        <span>137 sources</span>
      </div>
      <div className="grid gap-3">
        {bars.map((bar) => (
          <div key={bar.label} className="grid grid-cols-[5rem_1fr_2rem] items-center gap-3">
            <span className="text-xs text-[rgb(var(--dhiraj-muted))]">{bar.label}</span>
            <div className="h-2 overflow-hidden rounded-full bg-[rgb(var(--dhiraj-blue-soft))]">
              <div
                className="h-full rounded-full bg-[rgb(var(--dhiraj-blue))]"
                style={{ width: `${bar.value}%` }}
              />
            </div>
            <span className="text-right text-[10px] tabular-nums text-[rgb(var(--dhiraj-muted))]">{bar.claims}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Base", value: "T0" },
          { label: "Premium", value: "T1" },
          { label: "Signature", value: "T2" },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-[var(--dhiraj-radius-sm)] border border-[rgb(var(--dhiraj-line))] p-3">
            <p className="text-xs text-[rgb(var(--dhiraj-muted))]">{label}</p>
            <p className="mt-1 text-sm font-semibold">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-16 pb-20">
      <DhirajHero
        eyebrow="Frontend Mastery Index"
        title="A base layer for apps that feel designed, not assembled"
        description="This platform codifies the industry standard for world-class web applications. From canonical components to 3D effects, everything is backed by evidence from 137 top design engineering sources."
        primaryAction={{ label: "Explore Base Layer", href: "/base-layer" }}
        secondaryAction={{ label: "Open Component Vault", href: "/vault" }}
        proof="Built from the expanded corpus: 137 sources, 125 evidence claims, 68 standards, and 27 canonical components."
        media={<HeroPreview />}
      />

      <Marquee
        items={[
          "GSAP · 32 claims",
          "Framer Motion · 20 claims",
          "Three.js/R3F · 18 claims",
          "Next.js 15 · 15 claims",
          "Better-Auth",
          "Drizzle ORM",
          "Fluid Typography",
          "WCAG 2.2 Compliance",
          "8pt Grid System",
          "INP < 200ms",
          "Peak-End Victory States",
          "View Transitions API",
        ]}
        speed={0.8}
      />

      <DhirajSection
        eyebrow="Intelligence Layer"
        title="The skeleton is intentionally boring where it should be"
        description="We've standardized the patterns where taste is not allowed. Accessibility, performance budgets, and state completeness are your non-negotiable foundation."
        className="bg-[rgb(var(--dhiraj-surface-raised))]"
        id="standards"
      >
        <DhirajBentoGrid
          items={[
            {
              title: "Opinionated Density",
              description: "High-information density inspired by Linear and Stripe. 8px spacing, hairline borders, radius <= 8px.",
              span: "wide",
              icon: <Layers3 className="h-5 w-5" />,
            },
            {
              title: "Victory Visualization",
              description: "Every success triggers a celebratory reward. Apply the Peak-End Rule to critical user milestones.",
              icon: <Sparkles className="h-5 w-5" />,
            },
            {
              title: "60fps Interaction",
              description: "Use useMotionValue and useSpring for interaction tracking. Zero reconciliation overhead for 1:1 cursor tracking.",
              icon: <Activity className="h-5 w-5" />,
            },
            {
              title: "Fluid-First foundations",
              description: "Mathematical scaling using clamp(), rem, and container queries (cqi) for truly modular components.",
              icon: <Type className="h-5 w-5" />,
            },
            {
              title: "Performance Budgets",
              description: "LCP < 2.5s, INP < 200ms. Mandatory thresholds ensure award-winning craft doesn't tank usability.",
              icon: <Zap className="h-5 w-5" />,
            },
            {
              title: "Vault Architecture",
              description: "A personal full-stack vault to save 'cherry-picked' patterns found across reactbits and 21st.dev.",
              icon: <PlusCircle className="h-5 w-5" />,
            },
          ]}
        />
      </DhirajSection>

      <DhirajSection id="proof" eyebrow="The Mastery Standard" title="Backed by actual constraints">
        <DhirajTestimonial
          quote="The standard is not 'make it fancy'. It is: know what must always work, then make the right few moments feel inevitable."
          name="Dhiraj AI Master"
          role="137 sources · 125 evidence claims · 68 standards"
        />
      </DhirajSection>
    </div>
  );
}
