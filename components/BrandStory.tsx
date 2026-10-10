import Image from "next/image";
import { story } from "@/content/site";
import { Reveal } from "./Reveal";

export function BrandStory() {
  return (
    <section id="brand" className="section bg-surface-2/60">
      <div className="container grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/story-linen.webp"
              alt="거칠게 짜인 삼베 천의 질감"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-4 -bottom-6 w-44 rounded-2xl bg-surface p-3 shadow-xl ring-1 ring-black/5 sm:w-56">
            <Image
              src="/images/story-basket.webp"
              alt="바구니에 담긴 하얗게 마른 빨래"
              width={1200}
              height={800}
              sizes="224px"
              className="h-auto w-full rounded-xl"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">{story.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{story.title}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-lg leading-relaxed font-medium text-ink">{story.lead}</p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
              {story.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={220}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {story.pills.map((pill) => (
                <li
                  key={pill}
                  className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-ink"
                >
                  {pill}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
