import Image from "next/image";
import { hero } from "@/content/site";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">{hero.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 text-[2rem] leading-[1.15] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {hero.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {hero.description}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={hero.primaryCta.href}
                className="inline-flex h-12 items-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-ink shadow-sm transition hover:opacity-90"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex h-12 items-center rounded-full border border-line bg-surface px-6 text-sm font-semibold text-ink transition hover:bg-surface-2"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={320} className="mt-12 sm:mt-16">
          <div className="relative mx-auto max-w-5xl rounded-[2rem] bg-stage p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] ring-1 ring-black/5 sm:p-10">
            <Image
              src="/images/hero-plus.webp"
              alt="MAJEON Plus 전동 빨래건조대. 천장 본체에서 스테인리스 건조봉이 내려와 있다."
              width={1800}
              height={820}
              priority
              sizes="(min-width: 1024px) 960px, 100vw"
              className="h-auto w-full"
            />
            <span className="absolute top-4 left-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold tracking-wide text-neutral-800 backdrop-blur sm:top-6 sm:left-6">
              MAJEON Plus
            </span>
          </div>
        </Reveal>

        <Reveal delay={400} className="mt-10 sm:mt-14">
          <dl className="mx-auto grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {hero.stats.map((s) => (
              <div key={s.label} className="bg-surface px-4 py-5 text-center">
                <dt className="order-2 text-xs font-medium text-muted">{s.label}</dt>
                <dd className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-center text-xs text-muted">{hero.statsNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
