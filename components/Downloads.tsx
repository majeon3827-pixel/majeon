import { downloads } from "@/content/site";
import { DocPreview } from "./DocPreview";
import { Reveal } from "./Reveal";

export function Downloads() {
  return (
    <section id="downloads" className="section bg-surface-2/60">
      <div className="container">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Downloads</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">제품 자료 미리보기</h2>
          <p className="mt-4 text-muted">
            제품소개서, 사용설명서, 설치설명서를 모델별로 모아 두었습니다. 클릭하면 바로 열람할 수 있고,
            필요하면 PDF로 내려받으세요. 설치 전 설치설명서를 꼭 확인해 주세요.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {downloads.map((d, i) => (
            <Reveal key={d.id} delay={i * 80} as="article" className="flex h-full flex-col rounded-3xl border border-line bg-surface p-5 sm:p-6">
              <div>
                <h3 className="text-lg font-bold">{d.name}</h3>
                <p className="mt-1 text-xs font-medium text-muted">{d.tagline}</p>
              </div>
              <ul className="mt-5 space-y-3">
                {d.docs.map((doc) => (
                  <li key={`${d.id}-${doc.label}`}>
                    <DocPreview doc={doc} productName={d.name} />
                  </li>
                ))}
              </ul>
              <a
                href={d.driveHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 self-start text-xs font-semibold text-muted transition hover:text-accent"
              >
                Google Drive 원본 폴더 열기
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
