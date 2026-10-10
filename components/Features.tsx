import Image from "next/image";
import { features } from "@/content/site";
import { Reveal } from "./Reveal";

export function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Why MAJEON</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            빨래 널기의 번거로움을
            <br className="hidden sm:block" /> 네 가지 기능으로 덜어냅니다
          </h2>
          <p className="mt-4 text-muted">
            제품소개서에 담긴 기능을 생활 장면 기준으로 다시 정리했습니다.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <article className="group h-full overflow-hidden rounded-3xl border border-line bg-surface transition hover:-translate-y-0.5 hover:shadow-lg">
                <div className="relative aspect-[16/10] overflow-hidden bg-stage">
                  <Image
                    src={f.image}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-8 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-bold">{f.title}</h3>
                  </div>
                  <p className="mt-3 leading-relaxed text-muted">{f.description}</p>
                  {f.note && <p className="mt-3 text-xs font-medium text-accent">{f.note}</p>}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
