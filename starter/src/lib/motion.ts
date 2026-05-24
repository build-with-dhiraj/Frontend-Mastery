"use client";

import { type Transition, type Variants } from "motion/react";

export const dhirajEase = {
  standard: [0.22, 1, 0.36, 1],
  entrance: [0.16, 1, 0.3, 1],
  exit: [0.7, 0, 0.84, 0],
  snappy: [0.2, 0.8, 0.2, 1],
} as const;

export const dhirajTransition = {
  micro: { duration: 0.16, ease: dhirajEase.snappy },
  base: { duration: 0.24, ease: dhirajEase.standard },
  section: { duration: 0.56, ease: dhirajEase.standard },
  hero: { duration: 0.72, ease: dhirajEase.entrance },
  exit: { duration: 0.14, ease: dhirajEase.exit },
} satisfies Record<string, Transition>;

export const pageEntrance: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: dhirajTransition.section },
};

export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: dhirajTransition.section },
};

export const headerWordReveal: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: dhirajTransition.hero },
};

export const modalContent: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: dhirajTransition.base },
  exit: { opacity: 0, y: 8, scale: 0.98, transition: dhirajTransition.exit },
};
