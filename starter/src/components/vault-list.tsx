"use client";

import * as React from "react";
import { Plus, Trash2, ExternalLink, Code, MessageSquare, Copy, Tag } from "lucide-react";
import { DhirajButton, DhirajCard } from "@/components/dhiraj-ui";
import { deleteVaultItem, addVaultItem } from "@/lib/actions/vault";
import { toast } from "sonner";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface VaultItem {
  id: string;
  title: string;
  sourceUrl: string | null;
  codeSnippet: string | null;
  prompt: string | null;
  category: string | null;
  createdAt: Date;
}

export function VaultList({ initialItems }: { initialItems: VaultItem[] }) {
  const [items, setItems] = React.useState(initialItems);
  const [isAdding, setIsMobileAdding] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState("");
  const [newSource, setNewSource] = React.useState("");
  const [newCode, setNewCode] = React.useState("");
  const [newPrompt, setNewPrompt] = React.useState("");

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;

    try {
      await addVaultItem({
        title: newTitle,
        sourceUrl: newSource,
        codeSnippet: newCode,
        prompt: newPrompt,
      });
      toast.success("Added to your mastery vault!");
      setIsMobileAdding(false);
      setNewTitle("");
      setNewSource("");
      setNewCode("");
      setNewPrompt("");
      // In a real app, revalidatePath would handle this, but for SPA feel we can optimistic update or refresh
      window.location.reload(); 
    } catch (err) {
      toast.error("Failed to add component.");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteVaultItem(id);
      setItems(items.filter(i => i.id !== id));
      toast.success("Removed from vault.");
    } catch (err) {
      toast.error("Failed to remove.");
    }
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight text-[rgb(var(--dhiraj-fg))]">
            Cherry-Picked Vault
          </h1>
          <p className="text-[rgb(var(--dhiraj-muted))]">
            Your personal collection of unique components found in the wild.
          </p>
        </div>
        <DhirajButton onClick={() => setIsMobileAdding(!isAdding)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New Pattern
        </DhirajButton>
      </header>

      <AnimatePresence>
        {isAdding && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <DhirajCard className="p-6 border-[rgb(var(--dhiraj-blue))]/30 bg-[rgb(var(--dhiraj-blue-soft))]/20">
              <form onSubmit={handleAdd} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[rgb(var(--dhiraj-muted))]">Title</label>
                    <input 
                      className="w-full rounded-md border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[rgb(var(--dhiraj-blue))]/20"
                      value={newTitle}
                      onChange={e => setNewTitle(e.target.value)}
                      placeholder="e.g. Floating Magnetic Orb"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[rgb(var(--dhiraj-muted))]">Source URL</label>
                    <input 
                      className="w-full rounded-md border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[rgb(var(--dhiraj-blue))]/20"
                      value={newSource}
                      onChange={e => setNewSource(e.target.value)}
                      placeholder="https://reactbits.dev/..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[rgb(var(--dhiraj-muted))]">Agent Prompt</label>
                  <textarea 
                    className="w-full min-h-[100px] rounded-md border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[rgb(var(--dhiraj-blue))]/20 font-mono"
                    value={newPrompt}
                    onChange={e => setNewPrompt(e.target.value)}
                    placeholder="Paste the prompt you'd give to Cursor..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[rgb(var(--dhiraj-muted))]">Code Snippet</label>
                  <textarea 
                    className="w-full min-h-[150px] rounded-md border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[rgb(var(--dhiraj-blue))]/20 font-mono"
                    value={newCode}
                    onChange={e => setNewCode(e.target.value)}
                    placeholder="Paste the raw JSX/TSX here..."
                  />
                </div>

                <div className="flex justify-end gap-3">
                  <DhirajButton variant="ghost" type="button" onClick={() => setIsMobileAdding(false)}>Cancel</DhirajButton>
                  <DhirajButton type="submit">Save to Mastery</DhirajButton>
                </div>
              </form>
            </DhirajCard>
          </motion.div>
        )}
      </AnimatePresence>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-4 rounded-full bg-[rgb(var(--dhiraj-surface-raised))] p-4 border border-[rgb(var(--dhiraj-line))]">
            <Plus className="h-8 w-8 text-[rgb(var(--dhiraj-muted))]" />
          </div>
          <h3 className="text-lg font-bold text-[rgb(var(--dhiraj-fg))]">Your vault is empty</h3>
          <p className="max-w-xs text-sm text-[rgb(var(--dhiraj-muted))]">
            Found something cool on reactbits or 21st.dev? Add it here to build your personal library.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <DhirajCard key={item.id} className="group relative flex flex-col p-6 border-[rgb(var(--dhiraj-line))] hover:shadow-[var(--dhiraj-shadow-hover)] transition-all">
              <div className="mb-4 flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[rgb(var(--dhiraj-blue))]">
                    <Tag className="h-3 w-3" />
                    {item.category || "Cherry-Picked"}
                  </div>
                  <h3 className="text-lg font-bold text-[rgb(var(--dhiraj-fg))]">{item.title}</h3>
                </div>
                <button 
                  onClick={() => handleDelete(item.id)}
                  className="rounded-full p-1.5 text-[rgb(var(--dhiraj-muted))] opacity-0 group-hover:opacity-100 hover:bg-[rgb(var(--dhiraj-coral-soft))] hover:text-[rgb(var(--dhiraj-coral))] transition-all"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              <div className="mb-6 flex-1 space-y-4">
                {item.sourceUrl && (
                  <a 
                    href={item.sourceUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-[rgb(var(--dhiraj-muted))] hover:text-[rgb(var(--dhiraj-blue))] transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Source Reference
                  </a>
                )}
                
                {item.prompt && (
                  <div className="space-y-1">
                     <span className="text-[9px] font-bold uppercase tracking-widest text-[rgb(var(--dhiraj-muted))]">Saved Prompt</span>
                     <p className="text-xs text-[rgb(var(--dhiraj-muted))] line-clamp-3 italic">&quot;{item.prompt}&quot;</p>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-[rgb(var(--dhiraj-line))]">
                <DhirajButton 
                  variant="ghost" 
                  size="sm" 
                  className="flex-1 text-[10px]" 
                  onClick={() => {
                    if (item.prompt) {
                      navigator.clipboard.writeText(item.prompt);
                      toast.success("Prompt copied!");
                    }
                  }}
                >
                  <MessageSquare className="mr-2 h-3 w-3" />
                  Copy Prompt
                </DhirajButton>
                <DhirajButton 
                  variant="ghost" 
                  size="sm" 
                  className="flex-1 text-[10px]"
                  onClick={() => {
                    if (item.codeSnippet) {
                      navigator.clipboard.writeText(item.codeSnippet);
                      toast.success("Code copied!");
                    }
                  }}
                >
                  <Code className="mr-2 h-3 w-3" />
                  Copy Code
                </DhirajButton>
              </div>
            </DhirajCard>
          ))}
        </div>
      )}
    </div>
  );
}
