import { brand } from "@/content/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`group inline-flex items-baseline gap-2 ${className}`} aria-label={`${brand.name} 홈으로`}>
      <span className="text-xl font-extrabold tracking-tight">
        ma<span className="text-accent">j</span>eon
      </span>
      <span className="hidden text-xs font-medium tracking-[0.2em] text-muted sm:inline">{brand.nameKo}</span>
    </a>
  );
}
