"use client";

import * as React from "react";
import { getStandards, getComponentSpecs, Standard } from "@/lib/mastery";
import { 
  Search, 
  Filter, 
  Info, 
  ExternalLink, 
  Zap, 
  ShieldAlert, 
  CheckCircle2,
  XCircle,
  Copy,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { DhirajButton, DhirajCard } from "@/components/dhiraj-ui";
import { toast } from "sonner";

export default function BaseLayerPage() {
  const [search, setSearch] = React.useState("");
  const [activeTier, setActiveTier] = React.useState<string | null>(null);
  const [selectedStandard, setSelectedStandard] = React.useState<Standard | null>(null);

  const allStandards = getStandards();
  const tiers = Array.from(new Set(allStandards.map(s => s.tier))).sort();

  const filteredStandards = allStandards.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || 
                          s.type.toLowerCase().includes(search.toLowerCase());
    const matchesTier = activeTier ? s.tier === activeTier : true;
    return matchesSearch && matchesTier;
  });

  const copyPrompt = (standard: Standard) => {
    const prompt = `Use the Dhiraj standard for ${standard.name}. 
Standard ID: ${standard.id}
Tier: ${standard.tier}
Rules: ${standard.useWhen.join(", ")}
Risks: ${standard.risks.join(", ")}`;
    
    navigator.clipboard.writeText(prompt);
    toast.success("Prompt copied to clipboard!");
  };

  return (
    <div className="space-y-8 pb-20">
      <header className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-[rgb(var(--dhiraj-fg))] sm:text-5xl">
            Base Layer
          </h1>
          <p className="max-w-2xl text-lg text-[rgb(var(--dhiraj-muted))]">
            The evidence-backed standards for world-class web applications. Codified from 137 award-winning sources.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgb(var(--dhiraj-muted))]" />
            <input
              type="text"
              placeholder="Search standards (e.g. Next.js, GSAP...)"
              className="w-full rounded-[var(--dhiraj-radius-md)] border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] py-2 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-[rgb(var(--dhiraj-blue))]/20"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <DhirajButton
              variant={activeTier === null ? "primary" : "ghost"}
              size="sm"
              onClick={() => setActiveTier(null)}
            >
              All
            </DhirajButton>
            {tiers.map(tier => (
              <DhirajButton
                key={tier}
                variant={activeTier === tier ? "primary" : "ghost"}
                size="sm"
                onClick={() => setActiveTier(tier)}
                className="whitespace-nowrap"
              >
                {tier}
              </DhirajButton>
            ))}
          </div>
        </div>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredStandards.map((standard) => (
            <motion.div
              key={standard.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <DhirajCard className="group flex h-full flex-col p-6 hover:shadow-[var(--dhiraj-shadow-hover)] transition-all cursor-pointer border-[rgb(var(--dhiraj-line))]" onClick={() => setSelectedStandard(standard)}>
                <div className="mb-4 flex items-start justify-between">
                  <div className="space-y-1">
                    <div className={cn(
                      "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                      standard.tier.includes("T0") ? "bg-[rgb(var(--dhiraj-blue-soft))] text-[rgb(var(--dhiraj-blue))]" : 
                      standard.tier.includes("T1") ? "bg-[rgb(var(--dhiraj-mint-soft))] text-[rgb(var(--dhiraj-mint))]" :
                      "bg-[rgb(var(--dhiraj-coral-soft))] text-[rgb(var(--dhiraj-coral))]"
                    )}>
                      {standard.tier}
                    </div>
                    <h3 className="text-lg font-bold text-[rgb(var(--dhiraj-fg))] group-hover:text-[rgb(var(--dhiraj-blue))] transition-colors">
                      {standard.name}
                    </h3>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgb(var(--dhiraj-surface-raised))] border border-[rgb(var(--dhiraj-line))] text-[10px] font-bold">
                    {standard.score}
                  </div>
                </div>

                <p className="mb-6 flex-1 text-sm text-[rgb(var(--dhiraj-muted))] line-clamp-3">
                  {standard.useWhen[0]}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[rgb(var(--dhiraj-line))]">
                  <span className="text-[10px] text-[rgb(var(--dhiraj-muted))] uppercase font-bold tracking-widest">
                    {standard.type.replace('_', ' ')}
                  </span>
                  <div className="flex gap-2">
                    <DhirajButton 
                      variant="ghost" 
                      size="icon" 
                      className="h-7 w-7" 
                      onClick={(e) => {
                        e.stopPropagation();
                        copyPrompt(standard);
                      }}
                    >
                      <Copy className="h-3 w-3" />
                    </DhirajButton>
                    <DhirajButton variant="ghost" size="icon" className="h-7 w-7">
                      <Info className="h-3 w-3" />
                    </DhirajButton>
                  </div>
                </div>
              </DhirajCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Standard Detail Modal */}
      <AnimatePresence>
        {selectedStandard && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/45 backdrop-blur-sm"
              onClick={() => setSelectedStandard(null)}
            />
            <motion.div
              layoutId={selectedStandard.id}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[var(--dhiraj-radius-lg)] border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] p-8 shadow-2xl"
            >
              <div className="mb-8 flex items-start justify-between">
                <div className="space-y-2">
                   <div className="inline-flex items-center rounded-full bg-[rgb(var(--dhiraj-blue-soft))] px-2.5 py-0.5 text-xs font-bold text-[rgb(var(--dhiraj-blue))]">
                      {selectedStandard.tier} Standard
                   </div>
                   <h2 className="text-3xl font-bold text-[rgb(var(--dhiraj-fg))]">{selectedStandard.name}</h2>
                   <div className="flex flex-wrap gap-2 pt-2">
                      {selectedStandard.sourceClasses.map(sc => (
                         <span key={sc} className="rounded-md border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface-raised))] px-2 py-0.5 text-[10px] font-medium text-[rgb(var(--dhiraj-muted))]">
                            {sc.replace('_', ' ')}
                         </span>
                      ))}
                   </div>
                </div>
                <div className="flex flex-col items-center">
                   <div className="text-[10px] font-bold uppercase tracking-widest text-[rgb(var(--dhiraj-muted))] mb-1">Score</div>
                   <div className="text-3xl font-black text-[rgb(var(--dhiraj-blue))]">{selectedStandard.score}</div>
                </div>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div className="space-y-6">
                  <section className="space-y-3">
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[rgb(var(--dhiraj-fg))]">
                      <CheckCircle2 className="h-3 w-3 text-[rgb(var(--dhiraj-mint))]" />
                      Use When
                    </h4>
                    <ul className="space-y-2">
                      {selectedStandard.useWhen.map((item, i) => (
                        <li key={i} className="text-sm text-[rgb(var(--dhiraj-muted))] leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[rgb(var(--dhiraj-fg))]">
                      <XCircle className="h-3 w-3 text-[rgb(var(--dhiraj-coral))]" />
                      Avoid When
                    </h4>
                    <ul className="space-y-2">
                      {selectedStandard.avoidWhen.map((item, i) => (
                        <li key={i} className="text-sm text-[rgb(var(--dhiraj-muted))] leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                <div className="space-y-6">
                  <section className="space-y-3">
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[rgb(var(--dhiraj-fg))]">
                      <ShieldAlert className="h-3 w-3 text-[rgb(var(--dhiraj-coral))]" />
                      Critical Risks
                    </h4>
                    <ul className="space-y-2">
                      {selectedStandard.risks.map((item, i) => (
                        <li key={i} className="rounded-lg bg-[rgb(var(--dhiraj-coral-soft))] p-3 text-xs text-[rgb(var(--dhiraj-coral))] font-medium leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[rgb(var(--dhiraj-fg))]">
                      <Zap className="h-3 w-3 text-[rgb(var(--dhiraj-blue))]" />
                      Evidence Base
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                       {selectedStandard.evidenceIds.slice(0, 4).map(ev => (
                          <div key={ev} className="rounded border border-[rgb(var(--dhiraj-line))] px-2 py-1 text-[9px] font-mono text-[rgb(var(--dhiraj-muted))] truncate">
                             {ev}
                          </div>
                       ))}
                    </div>
                  </section>
                </div>
              </div>

              <div className="mt-12 flex gap-4 border-t border-[rgb(var(--dhiraj-line))] pt-8">
                 <DhirajButton className="flex-1" onClick={() => copyPrompt(selectedStandard)}>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Agent Prompt
                 </DhirajButton>
                 <DhirajButton variant="ghost" className="px-8" onClick={() => setSelectedStandard(null)}>
                    Close
                 </DhirajButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
