"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Command, Search, Library, PlusCircle, Home } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { modalContent, dhirajTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

const items = [
  { id: "home", title: "Home", href: "/", icon: Home },
  { id: "base-layer", title: "Base Layer Components", href: "/base-layer", icon: Library },
  { id: "vault", title: "Cherry-Picked Vault", href: "/vault", icon: PlusCircle },
];

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const [query, setSearch] = React.useState("");
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const filteredItems = query === "" 
    ? items 
    : items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

  const handleSelect = (href: string) => {
    router.push(href);
    setOpen(false);
    setSearch("");
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/45 backdrop-blur-[2px]" />
        <AnimatePresence>
          {open && (
            <Dialog.Content asChild>
              <motion.div
                variants={modalContent}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed left-1/2 top-[20%] z-[101] w-[calc(100vw-2rem)] max-w-xl -translate-x-1/2 rounded-[var(--dhiraj-radius-lg)] border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] p-0 shadow-[var(--dhiraj-shadow-hover)] overflow-hidden"
              >
                <div className="flex items-center border-b border-[rgb(var(--dhiraj-line))] px-4 py-3">
                  <Search className="mr-3 h-4 w-4 text-[rgb(var(--dhiraj-muted))]" />
                  <input
                    autoFocus
                    placeholder="Search components, standards..."
                    className="flex-1 bg-transparent text-sm text-[rgb(var(--dhiraj-fg))] outline-none placeholder:text-[rgb(var(--dhiraj-muted))]"
                    value={query}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div className="rounded-[var(--dhiraj-radius-sm)] border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface-raised))] px-1.5 py-0.5 text-[10px] text-[rgb(var(--dhiraj-muted))]">
                    ESC
                  </div>
                </div>

                <div className="max-h-[300px] overflow-y-auto p-2">
                  <div className="px-2 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[rgb(var(--dhiraj-muted))]">
                    Quick Navigation
                  </div>
                  <div className="space-y-1">
                    {filteredItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item.href)}
                        className="group flex w-full items-center gap-3 rounded-[var(--dhiraj-radius-sm)] px-3 py-2 text-sm text-[rgb(var(--dhiraj-muted))] hover:bg-[rgb(var(--dhiraj-blue-soft))] hover:text-[rgb(var(--dhiraj-blue))] transition-colors"
                      >
                        <item.icon className="h-4 w-4" />
                        {item.title}
                      </button>
                    ))}
                    {filteredItems.length === 0 && (
                      <div className="px-3 py-8 text-center text-sm text-[rgb(var(--dhiraj-muted))]">
                        No results found for &quot;{query}&quot;
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="border-t border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface-raised))] px-4 py-2 flex items-center justify-between text-[10px] text-[rgb(var(--dhiraj-muted))]">
                   <div className="flex gap-4">
                      <span className="flex items-center gap-1">
                         <span className="rounded border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] px-1">↑↓</span> to navigate
                      </span>
                      <span className="flex items-center gap-1">
                         <span className="rounded border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] px-1">↵</span> to select
                      </span>
                   </div>
                   <span>Dhiraj AI Master</span>
                </div>
              </motion.div>
            </Dialog.Content>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
