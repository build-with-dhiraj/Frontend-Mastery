"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Library, 
  PlusCircle, 
  Settings, 
  Command,
  Sun,
  Moon,
  LogOut,
  ChevronRight
} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { DhirajButton } from "./dhiraj-ui";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Base Layer", href: "/base-layer", icon: Library },
  { name: "Cherry-Picked Vault", href: "/vault", icon: PlusCircle },
];

export function Sidebar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <aside className="fixed left-0 top-0 hidden h-full w-[260px] flex-col border-r border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] lg:flex">
      <div className="flex h-16 items-center px-6">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
          <div className="h-6 w-6 rounded-md bg-[rgb(var(--dhiraj-blue))] flex items-center justify-center text-white text-[10px]">
            DM
          </div>
          <span>Frontend Mastery</span>
        </Link>
      </div>

      <div className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center justify-between rounded-[var(--dhiraj-radius-sm)] px-3 py-2 text-sm font-medium transition-colors",
                isActive 
                  ? "bg-[rgb(var(--dhiraj-blue-soft))] text-[rgb(var(--dhiraj-blue))]" 
                  : "text-[rgb(var(--dhiraj-muted))] hover:bg-[rgb(var(--dhiraj-surface-raised))] hover:text-[rgb(var(--dhiraj-fg))]"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-4 w-4" />
                {item.name}
              </div>
              {isActive && <div className="h-1 w-1 rounded-full bg-[rgb(var(--dhiraj-blue))]" />}
            </Link>
          );
        })}
      </div>

      <div className="mt-auto border-t border-[rgb(var(--dhiraj-line))] p-3 space-y-1">
        <div className="flex items-center justify-between px-3 py-2 text-[10px] uppercase tracking-widest text-[rgb(var(--dhiraj-muted))] font-bold">
          Shortcuts
          <span className="rounded bg-[rgb(var(--dhiraj-surface-raised))] px-1.5 py-0.5 border border-[rgb(var(--dhiraj-line))]">⌘K</span>
        </div>
        
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-full group flex items-center justify-between rounded-[var(--dhiraj-radius-sm)] px-3 py-2 text-sm font-medium text-[rgb(var(--dhiraj-muted))] hover:bg-[rgb(var(--dhiraj-surface-raised))] hover:text-[rgb(var(--dhiraj-fg))] transition-colors"
        >
          <div className="flex items-center gap-3">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            Toggle Theme
          </div>
        </button>

        <Link
          href="/settings"
          className="group flex items-center justify-between rounded-[var(--dhiraj-radius-sm)] px-3 py-2 text-sm font-medium text-[rgb(var(--dhiraj-muted))] hover:bg-[rgb(var(--dhiraj-surface-raised))] hover:text-[rgb(var(--dhiraj-fg))] transition-colors"
        >
          <div className="flex items-center gap-3">
            <Settings className="h-4 w-4" />
            Settings
          </div>
        </Link>
        
        <div className="pt-2 px-3">
           <div className="flex items-center gap-3 py-2">
              <div className="h-8 w-8 rounded-full bg-[rgb(var(--dhiraj-surface-raised))] border border-[rgb(var(--dhiraj-line))] flex items-center justify-center overflow-hidden">
                 <div className="h-full w-full bg-gradient-to-br from-[rgb(var(--dhiraj-blue))] to-[rgb(var(--dhiraj-mint))] opacity-20" />
              </div>
              <div className="flex-1 min-w-0 text-xs">
                 <p className="font-semibold text-[rgb(var(--dhiraj-fg))] truncate">Dhiraj</p>
                 <p className="text-[rgb(var(--dhiraj-muted))] truncate">Standard Tier</p>
              </div>
              <LogOut className="h-3 w-3 text-[rgb(var(--dhiraj-muted))] hover:text-[rgb(var(--dhiraj-coral))] cursor-pointer transition-colors" />
           </div>
        </div>
      </div>
    </aside>
  );
}
