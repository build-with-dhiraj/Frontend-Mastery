"use client";

import * as React from "react";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { pageEntrance } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { DhirajCard, DhirajScrollReveal, DhirajTextReveal } from "./dhiraj-ui";
import { ThemeToggle } from "./theme-toggle";

export function DhirajAppShell({
  children,
  header,
  footer,
}: {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-[rgb(var(--dhiraj-bg))] text-[rgb(var(--dhiraj-fg))] antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--dhiraj-radius-md)] focus:bg-[rgb(var(--dhiraj-fg))] focus:px-3 focus:py-2 focus:text-[rgb(var(--dhiraj-bg))]"
      >
        Skip to content
      </a>
      {header}
      <motion.main
        id="main"
        variants={reduceMotion ? undefined : pageEntrance}
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? undefined : "visible"}
      >
        {children}
      </motion.main>
      {footer}
    </div>
  );
}

export function DhirajNavHeader({
  brand = "Dhiraj",
  links,
  actionHref = "/app",
  actionLabel = "Open app",
}: {
  brand?: string;
  links: Array<{ label: string; href: string; active?: boolean }>;
  actionHref?: string;
  actionLabel?: string;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-bg)_/_0.86)] backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold tracking-normal text-[rgb(var(--dhiraj-fg))]">
          {brand}
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className={cn(
                "rounded-[var(--dhiraj-radius-sm)] px-3 py-2 text-sm text-[rgb(var(--dhiraj-muted))] transition hover:bg-[rgb(var(--dhiraj-blue-soft))] hover:text-[rgb(var(--dhiraj-fg))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--dhiraj-blue))]",
                link.active && "text-[rgb(var(--dhiraj-fg))]",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
          href={actionHref}
          className="inline-flex min-h-9 items-center justify-center rounded-[var(--dhiraj-radius-md)] border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] px-3 text-sm font-medium text-[rgb(var(--dhiraj-fg))] transition hover:border-[rgb(var(--dhiraj-blue))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--dhiraj-blue))]"
        >
          {actionLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}

export function DhirajHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  proof,
  media,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  proof?: string;
  media?: React.ReactNode;
}) {
  return (
    <section className="px-4 pb-14 pt-14 sm:px-6 sm:pt-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          {eyebrow ? (
            <p className="mb-4 text-xs font-semibold uppercase text-[rgb(var(--dhiraj-blue))]">
              {eyebrow}
            </p>
          ) : null}
          <DhirajTextReveal
            text={title}
            className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-normal text-[rgb(var(--dhiraj-fg))] sm:text-6xl lg:text-7xl"
          />
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[rgb(var(--dhiraj-muted))]">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryAction.href}
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-[var(--dhiraj-radius-md)] border border-[rgb(var(--dhiraj-blue))] bg-[rgb(var(--dhiraj-blue))] px-4 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-[var(--dhiraj-shadow-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--dhiraj-blue))] focus-visible:ring-offset-2"
            >
              {primaryAction.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            {secondaryAction ? (
              <Link
                href={secondaryAction.href}
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-[var(--dhiraj-radius-md)] border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] px-4 text-sm font-medium text-[rgb(var(--dhiraj-fg))] transition hover:-translate-y-0.5 hover:border-[rgb(var(--dhiraj-blue))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--dhiraj-blue))] focus-visible:ring-offset-2"
              >
                {secondaryAction.label}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Link>
            ) : null}
          </div>
          {proof ? <p className="mt-6 text-sm text-[rgb(var(--dhiraj-muted))]">{proof}</p> : null}
        </div>
        {media ? (
          <DhirajScrollReveal className="min-h-72 overflow-hidden rounded-[var(--dhiraj-radius-md)] border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))]">
            {media}
          </DhirajScrollReveal>
        ) : null}
      </div>
    </section>
  );
}

export function DhirajSection({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("px-4 py-16 sm:px-6 lg:px-8", className)}>
      <DhirajScrollReveal className="mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <div className="mb-8 max-w-2xl">
            {eyebrow ? (
              <p className="mb-3 text-xs font-semibold uppercase text-[rgb(var(--dhiraj-blue))]">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="text-2xl font-semibold tracking-normal text-[rgb(var(--dhiraj-fg))] sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-3 text-base leading-7 text-[rgb(var(--dhiraj-muted))]">
                {description}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </DhirajScrollReveal>
    </section>
  );
}

export function DhirajBentoGrid({
  items,
}: {
  items: Array<{ title: string; description: string; span?: "default" | "wide" | "tall"; icon?: React.ReactNode }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <DhirajCard
          key={item.title}
          interactive
          className={cn(item.span === "wide" && "md:col-span-2", item.span === "tall" && "md:row-span-2")}
        >
          {item.icon ? <div className="mb-4 text-[rgb(var(--dhiraj-blue))]">{item.icon}</div> : null}
          <h3 className="text-base font-semibold text-[rgb(var(--dhiraj-fg))]">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-[rgb(var(--dhiraj-muted))]">{item.description}</p>
          <p className="mt-6 text-xs text-[rgb(var(--dhiraj-muted))]">{String(index + 1).padStart(2, "0")}</p>
        </DhirajCard>
      ))}
    </div>
  );
}

export function DhirajPricing({
  plans,
}: {
  plans: Array<{ name: string; price: string; description: string; features: string[]; highlighted?: boolean }>;
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {plans.map((plan) => (
        <DhirajCard key={plan.name} interactive className={cn(plan.highlighted && "border-[rgb(var(--dhiraj-blue))]")}>
          <h3 className="text-lg font-semibold">{plan.name}</h3>
          <p className="mt-2 text-sm text-[rgb(var(--dhiraj-muted))]">{plan.description}</p>
          <p className="mt-6 text-4xl font-semibold">{plan.price}</p>
          <ul className="mt-6 space-y-3 text-sm text-[rgb(var(--dhiraj-muted))]">
            {plan.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[rgb(var(--dhiraj-mint))]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </DhirajCard>
      ))}
    </div>
  );
}

export function DhirajCTA({ title, description, action }: { title: string; description: string; action: { label: string; href: string } }) {
  return (
    <DhirajScrollReveal>
      <div className="rounded-[var(--dhiraj-radius-md)] border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-fg))] px-6 py-10 text-[rgb(var(--dhiraj-bg))] sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold sm:text-4xl">{title}</h2>
            <p className="mt-3 text-sm opacity-75 sm:text-base">{description}</p>
          </div>
          <Link href={action.href} className="inline-flex min-h-10 items-center justify-center rounded-[var(--dhiraj-radius-md)] bg-[rgb(var(--dhiraj-bg))] px-4 text-sm font-medium text-[rgb(var(--dhiraj-fg))]">
            {action.label}
          </Link>
        </div>
      </div>
    </DhirajScrollReveal>
  );
}

export function DhirajTestimonial({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <DhirajCard>
      <blockquote className="text-lg leading-8 text-[rgb(var(--dhiraj-fg))]">&quot;{quote}&quot;</blockquote>
      <figcaption className="mt-5 text-sm text-[rgb(var(--dhiraj-muted))]">
        <span className="font-medium text-[rgb(var(--dhiraj-fg))]">{name}</span>
        {" / "}
        {role}
      </figcaption>
    </DhirajCard>
  );
}

export function DhirajFooter({ brand = "Dhiraj", links }: { brand?: string; links: Array<{ label: string; href: string }> }) {
  return (
    <footer className="border-t border-[rgb(var(--dhiraj-line))] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium">{brand}</p>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[rgb(var(--dhiraj-muted))]">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[rgb(var(--dhiraj-fg))]">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
