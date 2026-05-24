"use client";

import { cn } from "@/lib/utils";

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-[var(--dhiraj-radius-sm)] bg-[rgb(var(--dhiraj-line)/0.4)]",
        className
      )}
      role="status"
      aria-label="Loading..."
      {...props}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="rounded-[var(--dhiraj-radius-md)] border border-[rgb(var(--dhiraj-line))] bg-[rgb(var(--dhiraj-surface))] p-5">
      <Skeleton className="mb-4 h-5 w-5 rounded-full" />
      <Skeleton className="mb-2 h-4 w-3/4" />
      <Skeleton className="mb-2 h-3 w-full" />
      <Skeleton className="h-3 w-5/6" />
      <Skeleton className="mt-6 h-3 w-8" />
    </div>
  );
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className="h-3"
          style={{ width: `${85 - i * 10}%` }}
        />
      ))}
    </div>
  );
}
