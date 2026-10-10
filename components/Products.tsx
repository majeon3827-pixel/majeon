import Image from "next/image";
import { products } from "@/content/site";
import { Reveal } from "./Reveal";

export function Products() {
  return (
    <section id="products" className="section bg-surface-2/60">
      <div className="container">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Our Products</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            우리 집 베란다에 맞는 마전을 고르세요
          </h2>
          <p className="mt-4 text-muted">
            이불 빨래가 잦은 가족부터 좁은 발코니의 1인 가구까지, 세 가지 모델이 있습니다.
          </p>
        </Reveal>

        <div className="mt-12 space-y-8">
          {products.map((p, i) => (
            <Reveal key={p.id} id={`product-${p.id}`} as="article" className="scroll-mt-24">
              <div
                className={`grid items-center gap-8 overflow-hidden rounded-[2rem] border border-line bg-surface p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-6">
                  <div className="rounded-3xl bg-stage p-5 sm:p-8">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      width={1600}
                      height={800}
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="mx-auto h-auto w-full max-h-72 object-contain"
                    />
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {p.gallery.map((g) => (
                      <div key={g.src} className="rounded-2xl bg-stage p-3">
                        <Image
                          src={g.src}
                          alt={g.alt}
                          width={800}
                          height={400}
                          sizes="(min-width: 1024px) 22vw, 50vw"
                          className="mx-auto h-24 w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold tracking-wide text-accent">
                      {p.badge}
                    </span>
                    <span className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">{p.name}</h3>
                  <p className="mt-2 text-lg font-semibold text-ink">{p.tagline}</p>
                  <p className="mt-4 leading-relaxed text-muted">{p.description}</p>

                  <p className="mt-4 text-sm">
                    <span className="font-semibold text-ink">추천 </span>
                    <span className="text-muted">{p.audience}</span>
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="rounded-full border border-line px-3 py-1 text-xs font-medium">
                        {h}
                      </li>
                    ))}
                  </ul>

                  <details className="group mt-6 rounded-2xl border border-line bg-surface-2/60 open:bg-surface-2">
                    <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-3.5 text-sm font-semibold select-none">
                      상세 스펙 보기
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition group-open:rotate-180"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </summary>
                    <dl className="grid grid-cols-1 gap-x-6 border-t border-line px-5 py-4 text-sm sm:grid-cols-2">
                      {p.specs.map((s) => (
                        <div key={s.label} className="flex justify-between gap-4 border-b border-line/70 py-2 last:border-0 sm:[&:nth-last-child(2)]:border-0">
                          <dt className="shrink-0 text-muted">{s.label}</dt>
                          <dd className="text-right font-medium">{s.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </details>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="#contact"
                      className="inline-flex h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-bg transition hover:opacity-90"
                    >
                      이 모델 문의하기
                    </a>
                    <a
                      href="#downloads"
                      className="inline-flex h-11 items-center rounded-full border border-line px-5 text-sm font-semibold transition hover:bg-surface-2"
                    >
                      자료 내려받기
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
