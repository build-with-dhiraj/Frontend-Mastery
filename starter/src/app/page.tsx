import { Activity, Layers3, MousePointer2, Sparkles, Waypoints, Zap } from "lucide-react";
import {
  DhirajAppShell,
  DhirajBentoGrid,
  DhirajCTA,
  DhirajFooter,
  DhirajHero,
  DhirajNavHeader,
  DhirajPricing,
  DhirajSection,
  DhirajTestimonial,
} from "@/components/dhiraj-sections";

const navLinks = [
  { label: "Standards", href: "#standards" },
  { label: "Motion", href: "#motion" },
  { label: "Proof", href: "#proof" },
];

function HeroPreview() {
  const bars = ["GSAP", "Motion", "Radix", "Tailwind", "R3F"];

  return (
    <div className="relative flex min-h-72 flex-col justify-between overflow-hidden p-5">
      <div className="absolute inset-x-0 top-0 h-px bg-[rgb(var(--dhiraj-line))]" />
      <div className="flex items-center justify-between text-xs text-[rgb(var(--dhiraj-muted))]">
        <span>Evidence engine</span>
        <span>26 stack rows</span>
      </div>
      <div className="grid gap-3">
        {bars.map((bar, index) => (
          <div key={bar} className="grid grid-cols-[5rem_1fr] items-center gap-3">
            <span className="text-xs text-[rgb(var(--dhiraj-muted))]">{bar}</span>
            <div className="h-2 overflow-hidden rounded-full bg-[rgb(var(--dhiraj-blue-soft))]">
              <div
                className="h-full rounded-full bg-[rgb(var(--dhiraj-blue))]"
                style={{ width: `${92 - index * 12}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3">
        {["Base", "Signature", "Optional"].map((label) => (
          <div key={label} className="rounded-[var(--dhiraj-radius-sm)] border border-[rgb(var(--dhiraj-line))] p-3">
            <p className="text-xs text-[rgb(var(--dhiraj-muted))]">{label}</p>
            <p className="mt-1 text-sm font-semibold">locked</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <DhirajAppShell
      header={<DhirajNavHeader brand="Dhiraj" links={navLinks} />}
      footer={
        <DhirajFooter
          links={[
            { label: "App screen", href: "/app" },
            { label: "Standards", href: "#standards" },
            { label: "Motion", href: "#motion" },
          ]}
        />
      }
    >
      <DhirajHero
        eyebrow="Dhiraj frontend standard"
        title="A base layer for websites that feel designed, not assembled"
        description="This starter proves the corpus in code: one canonical component per interaction, evidence-derived packages, disciplined motion, complete states, and a signature rhythm that stays product-safe."
        primaryAction={{ label: "Open app screen", href: "/app" }}
        secondaryAction={{ label: "Review standards", href: "#standards" }}
        proof="Built from the corpus: 44 sources, 32 evidence claims, 38 standards, 17 canonical components."
        media={<HeroPreview />}
      />

      <DhirajSection
        eyebrow="No-brainer base"
        title="The skeleton is intentionally boring where it should be"
        description="The fixed layer handles accessibility, states, tokens, forms, feedback, and responsive layout. Taste is allowed only after the foundation stops wobbling."
        className="bg-[rgb(var(--dhiraj-surface-raised))]"
      >
        <DhirajBentoGrid
          items={[
            {
              title: "One interaction, one component",
              description: "Buttons, cards, modals, toasts, tabs, and async states stay canonical. Variants live inside the same API.",
              span: "wide",
              icon: <Layers3 className="h-5 w-5" />,
            },
            {
              title: "Motion tokens",
              description: "Every animation has duration, easing, and reduced-motion behavior.",
              icon: <Activity className="h-5 w-5" />,
            },
            {
              title: "Scroll discipline",
              description: "GSAP and Lenis are reserved for creative pages where scroll is part of the story.",
              icon: <Waypoints className="h-5 w-5" />,
            },
            {
              title: "Primitives first",
              description: "Radix/shadcn-style primitives preserve keyboard, focus, and interaction semantics.",
              icon: <MousePointer2 className="h-5 w-5" />,
            },
            {
              title: "Signature layer",
              description: "Dhiraj gets a recognizable text reveal, toast rhythm, card lift, and calm section entrance.",
              icon: <Sparkles className="h-5 w-5" />,
            },
            {
              title: "Optional spectacle",
              description: "R3F, shaders, SVG masks, and WebGL are opt-in when the concept earns them.",
              icon: <Zap className="h-5 w-5" />,
            },
          ]}
        />
      </DhirajSection>

      <DhirajSection
        eyebrow="Motion"
        title="Calm by default, memorable by intention"
        description="The Dhiraj rhythm uses line-masked headlines, one-pass scroll reveals, subtle card lift, crisp modal transitions, and toast feedback that never replaces inline errors."
        id="motion"
      >
        <DhirajPricing
          plans={[
            {
              name: "Base",
              price: "T0",
              description: "Always included in serious Dhiraj projects.",
              features: ["Next.js/React/TypeScript", "Tailwind tokens", "Radix/shadcn primitives", "Reduced motion"],
            },
            {
              name: "Signature",
              price: "T1",
              description: "Recognizable Dhiraj feel without damaging usability.",
              highlighted: true,
              features: ["Header text reveal", "Scroll reveal", "Toast rhythm", "Card depth"],
            },
            {
              name: "Optional",
              price: "T2+",
              description: "Cherry-picked for brand and concept.",
              features: ["Lenis creative scroll", "R3F/Three.js scenes", "SVG masks", "Shaders/WebGL"],
            },
          ]}
        />
      </DhirajSection>

      <DhirajSection id="proof" eyebrow="Proof" title="The taste layer is backed by actual constraints">
        <DhirajTestimonial
          quote="The standard is not 'make it fancy'. It is: know what must always work, then make the right few moments feel inevitable."
          name="Dhiraj System"
          role="Corpus-backed frontend skeleton"
        />
      </DhirajSection>

      <DhirajSection className="pt-0">
        <DhirajCTA
          title="Use the app screen to test the product layer"
          description="The second route exercises tabs, form validation, dialog, toast, loading, empty, and error states with the same visual language."
          action={{ label: "Open app route", href: "/app" }}
        />
      </DhirajSection>
    </DhirajAppShell>
  );
}
