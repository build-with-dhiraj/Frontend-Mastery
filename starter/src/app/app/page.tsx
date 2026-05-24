"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Bell, CheckCircle2, CircleAlert, FileText, Loader2, Settings2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  DhirajAppShell,
  DhirajFooter,
  DhirajNavHeader,
  DhirajSection,
} from "@/components/dhiraj-sections";
import {
  dhirajToast,
  DhirajAsyncState,
  DhirajButton,
  DhirajCard,
  DhirajDialog,
  DhirajPopover,
  DhirajTabs,
  DhirajToaster,
  DhirajTooltip,
} from "@/components/dhiraj-ui";

const schema = z.object({
  name: z.string().min(2, "Use at least two characters."),
  email: z.email("Use a valid email address."),
  standard: z.enum(["base", "signature", "optional"]),
});

type FormValues = z.infer<typeof schema>;

const navLinks = [
  { label: "Overview", href: "/app", active: true },
  { label: "Home", href: "/" },
];

export default function AppRoute() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "Dhiraj",
      email: "dhiraj@example.com",
      standard: "signature",
    },
  });

  async function onSubmit(values: FormValues) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    dhirajToast.success(`Saved ${values.standard} standard for ${values.name}.`);
  }

  return (
    <DhirajAppShell
      header={<DhirajNavHeader brand="Dhiraj App" links={navLinks} actionHref="/" actionLabel="Back home" />}
      footer={<DhirajFooter links={[{ label: "Home", href: "/" }, { label: "Standards", href: "/#standards" }]} />}
    >
      <DhirajToaster />
      <DhirajSection
        eyebrow="App screen"
        title="The same system under product pressure"
        description="This route tests the product layer: tabs, forms, validation, dialog, toast, async states, focus states, and responsive layout."
      >
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <DhirajCard>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">Standard setup</h2>
                <p className="mt-2 text-sm leading-6 text-[rgb(var(--dhiraj-muted))]">
                  Update a project profile and watch inline errors and toast feedback work together.
                </p>
              </div>
              <DhirajTooltip label="Settings are a canonical button plus tooltip interaction">
                <button className="rounded-[var(--dhiraj-radius-md)] border border-[rgb(var(--dhiraj-line))] p-2 text-[rgb(var(--dhiraj-muted))] hover:text-[rgb(var(--dhiraj-fg))]">
                  <Settings2 className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">Settings</span>
                </button>
              </DhirajTooltip>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4" noValidate>
              <label className="block">
                <span className="text-sm font-medium">Name</span>
                <input
                  {...register("name")}
                  autoComplete="name"
                  className="mt-1 h-10 w-full rounded-[var(--dhiraj-radius-md)] border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] px-3 text-sm outline-none focus:ring-2 focus:ring-[rgb(var(--dhiraj-blue))]"
                />
                {errors.name ? <span className="mt-1 block text-sm text-[rgb(var(--dhiraj-coral))]">{errors.name.message}</span> : null}
              </label>

              <label className="block">
                <span className="text-sm font-medium">Email</span>
                <input
                  {...register("email")}
                  type="email"
                  autoComplete="email"
                  className="mt-1 h-10 w-full rounded-[var(--dhiraj-radius-md)] border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] px-3 text-sm outline-none focus:ring-2 focus:ring-[rgb(var(--dhiraj-blue))]"
                />
                {errors.email ? <span className="mt-1 block text-sm text-[rgb(var(--dhiraj-coral))]">{errors.email.message}</span> : null}
              </label>

              <label className="block">
                <span className="text-sm font-medium">Layer</span>
                <select
                  {...register("standard")}
                  className="mt-1 h-10 w-full rounded-[var(--dhiraj-radius-md)] border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] px-3 text-sm outline-none focus:ring-2 focus:ring-[rgb(var(--dhiraj-blue))]"
                >
                  <option value="base">Base</option>
                  <option value="signature">Signature</option>
                  <option value="optional">Optional</option>
                </select>
              </label>

              <div className="flex flex-wrap gap-3 pt-2">
                <DhirajButton loading={isSubmitting} type="submit">
                  Save standard
                </DhirajButton>
                <DhirajDialog
                  trigger={<DhirajButton type="button" variant="secondary">Open dialog</DhirajButton>}
                  title="Dialog/sheet standard"
                  description="Focus management comes from Radix. Motion only handles visual transition."
                >
                  <p className="text-sm leading-6 text-[rgb(var(--dhiraj-muted))]">
                    The dialog uses the same radius, border, surface, reduced-motion fallback, and short transition as the rest of the system.
                  </p>
                  <div className="mt-5 flex justify-end">
                    <DhirajButton type="button" onClick={() => dhirajToast.success("Dialog action completed.")}>
                      Confirm action
                    </DhirajButton>
                  </div>
                </DhirajDialog>
              </div>
            </form>
          </DhirajCard>

          <div className="space-y-4">
            <DhirajTabs
              items={[
                {
                  value: "overview",
                  label: "Overview",
                  content: (
                    <div className="grid gap-4 sm:grid-cols-3">
                      {[
                        ["17", "canonical components"],
                        ["8", "motion specs"],
                        ["26", "stack rows"],
                      ].map(([value, label]) => (
                        <DhirajCard key={label}>
                          <p className="text-3xl font-semibold">{value}</p>
                          <p className="mt-1 text-sm text-[rgb(var(--dhiraj-muted))]">{label}</p>
                        </DhirajCard>
                      ))}
                    </div>
                  ),
                },
                {
                  value: "states",
                  label: "States",
                  content: (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <DhirajAsyncState state="loading" title="Loading preview" description="Skeletons only when layout is known." />
                      <DhirajAsyncState state="empty" title="No standards selected" description="Give users a clear next action." />
                      <DhirajAsyncState state="error" title="Evidence missing" description="Block the standard until the source is added." />
                      <DhirajAsyncState state="success" title="Validated" description="The component has all required states." />
                    </div>
                  ),
                },
                {
                  value: "signals",
                  label: "Signals",
                  content: (
                    <div className="space-y-3">
                      {[
                        ["GSAP", "Creative scroll, SVG, timelines", CheckCircle2],
                        ["Lenis", "Signature-only scroll feel", Bell],
                        ["WebGL", "Optional, concept-led spectacle", CircleAlert],
                        ["Forms", "Inline error before toast", FileText],
                      ].map(([name, detail, Icon]) => (
                        <DhirajCard key={name as string} className="flex items-center gap-3">
                          <Icon className="h-5 w-5 text-[rgb(var(--dhiraj-blue))]" aria-hidden="true" />
                          <div>
                            <p className="font-medium">{name as string}</p>
                            <p className="text-sm text-[rgb(var(--dhiraj-muted))]">{detail as string}</p>
                          </div>
                        </DhirajCard>
                      ))}
                    </div>
                  ),
                },
              ]}
            />

            <DhirajPopover
              trigger={
                <button className="inline-flex min-h-10 items-center gap-2 rounded-[var(--dhiraj-radius-md)] border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] px-4 text-sm font-medium">
                  <Loader2 className="h-4 w-4" aria-hidden="true" />
                  Review checklist
                </button>
              }
            >
              <ul className="space-y-2 text-sm text-[rgb(var(--dhiraj-muted))]">
                <li>One interaction ID per component.</li>
                <li>Reduced motion for every animation.</li>
                <li>Inline error before toast.</li>
                <li>Lenis only when scroll is narrative.</li>
              </ul>
            </DhirajPopover>
          </div>
        </div>
      </DhirajSection>
    </DhirajAppShell>
  );
}
