import { downloads } from "@/content/site";
import { Reveal } from "./Reveal";

export function Downloads() {
  return (
    <section id="downloads" className="section bg-surface-2/60">
      <div className="container">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Downloads</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">제품 자료 내려받기</h2>
          <p className="mt-4 text-muted">
            제품소개서, 사용설명서, 설치설명서를 모델별로 모아 두었습니다. 설치 전 설치설명서를 꼭 확인해 주세요.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {downloads.map((d, i) => (
            <Reveal key={d.id} delay={i * 80}>
              <a
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between rounded-3xl border border-line bg-surface p-6 transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold">{d.name}</h3>
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent transition group-hover:bg-accent group-hover:text-accent-ink">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                      </svg>
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {d.files.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                        {f} (PDF)
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-6 text-xs font-medium text-muted">Google Drive 폴더 · 새 창에서 열림</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
