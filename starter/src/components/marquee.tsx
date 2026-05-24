"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export function Marquee({
  items,
  speed = 1,
  separator = "·",
  className,
}: {
  items: string[];
  speed?: number;
  separator?: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !innerRef.current) return;

    const inner = innerRef.current;

    // Wait for layout
    requestAnimationFrame(() => {
      const width = inner.scrollWidth / 2; // We duplicate, so halve
      tweenRef.current = gsap.to(inner, {
        xPercent: -50,
        duration: width / (50 * speed),
        ease: "none",
        repeat: -1,
      });
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, [speed]);

  const content = items.flatMap((item, i) => [
    <span key={`item-${i}`} className="whitespace-nowrap">
      {item}
    </span>,
    <span
      key={`sep-${i}`}
      className="mx-4 text-[rgb(var(--dhiraj-line))]"
      aria-hidden="true"
    >
      {separator}
    </span>,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "overflow-hidden border-y border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface-raised))] py-3",
        className
      )}
      aria-label={`Scrolling list: ${items.join(", ")}`}
      role="marquee"
    >
      <div ref={innerRef} className="flex w-max items-center text-sm font-medium text-[rgb(var(--dhiraj-muted))]">
        {/* Duplicate content for seamless loop */}
        {content}
        {content}
      </div>
    </div>
  );
}
