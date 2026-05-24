"use client";

import * as React from "react";
import { Sidebar } from "./sidebar";
import { CommandPalette } from "./command-palette";
import { Menu, Search, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DhirajButton } from "./dhiraj-ui";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setIsMobileMenuOpen(false); // eslint-disable-line react-hooks/set-state-in-effect
  }, [pathname]);

  return (
    <div className="flex min-h-screen bg-[rgb(var(--dhiraj-bg))]">
      <Sidebar />
      <CommandPalette />

      {/* Mobile Header */}
      <header className="fixed top-0 z-40 flex h-14 w-full items-center justify-between border-b border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))/80] px-4 backdrop-blur-md lg:hidden">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <div className="h-5 w-5 rounded bg-[rgb(var(--dhiraj-blue))] flex items-center justify-center text-white text-[8px]">
            DM
          </div>
          <span className="text-sm">Frontend Mastery</span>
        </Link>
        <div className="flex items-center gap-2">
           <DhirajButton variant="ghost" size="icon" className="h-8 w-8" onClick={() => {
              const event = new KeyboardEvent('keydown', { key: 'k', metaKey: true });
              document.dispatchEvent(event);
           }}>
              <Search className="h-4 w-4" />
           </DhirajButton>
           <button
             onClick={() => setIsMobileMenuOpen(true)}
             className="p-1 text-[rgb(var(--dhiraj-muted))] hover:text-[rgb(var(--dhiraj-fg))]"
           >
             <Menu className="h-6 w-6" />
           </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <Dialog.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/45 backdrop-blur-sm" />
          <Dialog.Content className="fixed inset-y-0 left-0 z-50 w-[280px] bg-[rgb(var(--dhiraj-surface))] p-6 shadow-xl animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-2 font-bold">
                <div className="h-6 w-6 rounded bg-[rgb(var(--dhiraj-blue))] flex items-center justify-center text-white text-[10px]">
                  DM
                </div>
                <span>Frontend Mastery</span>
              </Link>
              <Dialog.Close className="p-1 text-[rgb(var(--dhiraj-muted))] hover:text-[rgb(var(--dhiraj-fg))]">
                <X className="h-5 w-5" />
              </Dialog.Close>
            </div>
            
            <nav className="space-y-2">
              <Link href="/" className={cn("block px-4 py-2 rounded-md text-sm", pathname === "/" ? "bg-[rgb(var(--dhiraj-blue-soft))] text-[rgb(var(--dhiraj-blue))]" : "text-[rgb(var(--dhiraj-muted)) ]")}>Home</Link>
              <Link href="/base-layer" className={cn("block px-4 py-2 rounded-md text-sm", pathname === "/base-layer" ? "bg-[rgb(var(--dhiraj-blue-soft))] text-[rgb(var(--dhiraj-blue))]" : "text-[rgb(var(--dhiraj-muted)) ]")}>Base Layer</Link>
              <Link href="/vault" className={cn("block px-4 py-2 rounded-md text-sm", pathname === "/vault" ? "bg-[rgb(var(--dhiraj-blue-soft))] text-[rgb(var(--dhiraj-blue))]" : "text-[rgb(var(--dhiraj-muted)) ]")}>Cherry-Picked Vault</Link>
            </nav>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Main Content */}
      <main className="flex-1 lg:pl-[260px]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-8 mt-14 lg:mt-0">
          {children}
        </div>
      </main>
    </div>
  );
}
