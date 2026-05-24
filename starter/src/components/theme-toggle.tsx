"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--dhiraj-radius-sm)] text-[rgb(var(--dhiraj-muted))] transition hover:bg-[rgb(var(--dhiraj-blue-soft))] hover:text-[rgb(var(--dhiraj-fg))]"
        aria-label="Toggle theme"
      >
        <Monitor className="h-4 w-4" />
      </button>
    );
  }

  const nextTheme = theme === "dark" ? "light" : theme === "light" ? "system" : "dark";
  const Icon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor;
  const label = theme === "dark" ? "Dark mode" : theme === "light" ? "Light mode" : "System";

  return (
    <button
      onClick={() => setTheme(nextTheme)}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-[var(--dhiraj-radius-sm)]",
        "text-[rgb(var(--dhiraj-muted))] transition",
        "hover:bg-[rgb(var(--dhiraj-blue-soft))] hover:text-[rgb(var(--dhiraj-fg))]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--dhiraj-blue))]"
      )}
      aria-label={`Current: ${label}. Click to cycle theme.`}
      title={label}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
