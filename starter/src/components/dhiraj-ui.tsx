"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Popover from "@radix-ui/react-popover";
import * as Tabs from "@radix-ui/react-tabs";
import * as Tooltip from "@radix-ui/react-tooltip";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircle, CheckCircle2, Loader2, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Toaster, toast } from "sonner";
import { modalContent, scrollReveal, headerWordReveal, dhirajTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-10 items-center justify-center gap-2 rounded-[var(--dhiraj-radius-md)] px-4 text-sm font-medium transition-[background,border-color,color,transform,box-shadow] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--dhiraj-blue))] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border border-[rgb(var(--dhiraj-blue))] bg-[rgb(var(--dhiraj-blue))] text-white shadow-sm hover:-translate-y-0.5 hover:shadow-[var(--dhiraj-shadow-hover)]",
        secondary:
          "border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] text-[rgb(var(--dhiraj-fg))] hover:-translate-y-0.5 hover:border-[rgb(var(--dhiraj-blue))]",
        ghost:
          "border border-transparent text-[rgb(var(--dhiraj-fg))] hover:bg-[rgb(var(--dhiraj-blue-soft))]",
        danger:
          "border border-[rgb(var(--dhiraj-coral))] bg-[rgb(var(--dhiraj-coral))] text-white",
      },
      size: {
        sm: "min-h-9 px-3 text-xs",
        md: "min-h-10 px-4",
        lg: "min-h-11 px-5",
        icon: "h-10 w-10 px-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type DhirajButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
  };

export const DhirajButton = React.forwardRef<HTMLButtonElement, DhirajButtonProps>(
  ({ className, variant, size, loading, disabled, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
      {children}
    </button>
  ),
);
DhirajButton.displayName = "DhirajButton";

export function DhirajCard({
  className,
  interactive = false,
  children,
}: {
  className?: string;
  interactive?: boolean;
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={interactive && !reduceMotion ? { y: -4 } : undefined}
      transition={dhirajTransition.base}
      className={cn(
        "rounded-[var(--dhiraj-radius-md)] border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] p-5 shadow-[var(--dhiraj-shadow-soft)]",
        interactive && "transition-colors hover:border-[rgb(var(--dhiraj-blue))]",
        className,
      )}
    >
      {children}
    </motion.article>
  );
}

export function DhirajScrollReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      variants={scrollReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function DhirajTextReveal({
  text,
  as: Tag = "h1",
  className,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (reduceMotion) return <Tag className={className}>{text}</Tag>;

  return (
    <Tag className={cn("overflow-hidden", className)} aria-label={text}>
      <span aria-hidden="true" className="inline-flex flex-wrap gap-x-[0.28em]">
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="overflow-hidden pb-[0.08em]">
            <motion.span
              variants={headerWordReveal}
              initial="hidden"
              animate="visible"
              transition={{ ...dhirajTransition.hero, delay: index * 0.06 }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}

export function DhirajAsyncState({
  state,
  title,
  description,
  action,
}: {
  state: "loading" | "empty" | "error" | "success";
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  const Icon = state === "loading" ? Loader2 : state === "error" ? AlertCircle : CheckCircle2;

  return (
    <div className="flex min-h-44 flex-col items-center justify-center rounded-[var(--dhiraj-radius-md)] border border-dashed border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] p-6 text-center">
      <Icon
        className={cn(
          "mb-3 h-5 w-5",
          state === "loading" && "animate-spin",
          state === "error" && "text-[rgb(var(--dhiraj-coral))]",
          state === "success" && "text-[rgb(var(--dhiraj-mint))]",
        )}
        aria-hidden="true"
      />
      <h3 className="text-sm font-semibold text-[rgb(var(--dhiraj-fg))]">{title}</h3>
      {description ? (
        <p className="mt-1 max-w-sm text-sm text-[rgb(var(--dhiraj-muted))]">{description}</p>
      ) : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}

export function DhirajDialog({
  trigger,
  title,
  description,
  children,
}: {
  trigger: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/45" />
        <AnimatePresence>
          <Dialog.Content asChild>
            <motion.div
              variants={reduceMotion ? undefined : modalContent}
              initial={reduceMotion ? false : "hidden"}
              animate={reduceMotion ? undefined : "visible"}
              exit={reduceMotion ? undefined : "exit"}
              className="fixed left-1/2 top-1/2 z-50 w-[calc(100vw-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-[var(--dhiraj-radius-md)] border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] p-6 shadow-[var(--dhiraj-shadow-hover)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Dialog.Title className="text-lg font-semibold text-[rgb(var(--dhiraj-fg))]">
                    {title}
                  </Dialog.Title>
                  {description ? (
                    <Dialog.Description className="mt-1 text-sm text-[rgb(var(--dhiraj-muted))]">
                      {description}
                    </Dialog.Description>
                  ) : null}
                </div>
                <Dialog.Close className="rounded-[var(--dhiraj-radius-sm)] p-1 text-[rgb(var(--dhiraj-muted))] hover:text-[rgb(var(--dhiraj-fg))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--dhiraj-blue))]">
                  <X className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">Close</span>
                </Dialog.Close>
              </div>
              <div className="mt-5">{children}</div>
            </motion.div>
          </Dialog.Content>
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function DhirajTabs({
  items,
  defaultValue,
}: {
  items: Array<{ value: string; label: string; content: React.ReactNode }>;
  defaultValue?: string;
}) {
  return (
    <Tabs.Root defaultValue={defaultValue ?? items[0]?.value}>
      <Tabs.List className="inline-flex rounded-[var(--dhiraj-radius-md)] border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface-raised))] p-1">
        {items.map((item) => (
          <Tabs.Trigger
            key={item.value}
            value={item.value}
            className="rounded-[var(--dhiraj-radius-sm)] px-3 py-1.5 text-sm text-[rgb(var(--dhiraj-muted))] outline-none transition data-[state=active]:bg-[rgb(var(--dhiraj-surface))] data-[state=active]:text-[rgb(var(--dhiraj-fg))] focus-visible:ring-2 focus-visible:ring-[rgb(var(--dhiraj-blue))]"
          >
            {item.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {items.map((item) => (
        <Tabs.Content key={item.value} value={item.value} className="mt-4">
          {item.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}

export function DhirajTooltip({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Tooltip.Provider delayDuration={180}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={8}
            className="z-50 rounded-[var(--dhiraj-radius-sm)] border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-fg))] px-2.5 py-1.5 text-xs text-[rgb(var(--dhiraj-bg))] shadow-[var(--dhiraj-shadow-soft)]"
          >
            {label}
            <Tooltip.Arrow className="fill-[rgb(var(--dhiraj-fg))]" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export function DhirajPopover({
  trigger,
  children,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>{trigger}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={10}
          className="z-50 w-72 rounded-[var(--dhiraj-radius-md)] border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] p-4 text-sm shadow-[var(--dhiraj-shadow-soft)]"
        >
          {children}
          <Popover.Arrow className="fill-[rgb(var(--dhiraj-surface))]" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export function DhirajToaster() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            "rounded-[var(--dhiraj-radius-md)] border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] text-[rgb(var(--dhiraj-fg))]",
        },
      }}
    />
  );
}

export const dhirajToast = {
  success(message: string) {
    toast.success(message);
  },
  error(message: string) {
    toast.error(message);
  },
  loading(message: string) {
    return toast.loading(message);
  },
};
