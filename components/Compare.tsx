import { compareRows, products } from "@/content/site";
import { Reveal } from "./Reveal";

function specOf(id: string, label: string) {
  return products.find((p) => p.id === id)?.specs.find((s) => s.label === label)?.value ?? "—";
}

export function Compare() {
  return (
    <section id="compare" className="section">
      <div className="container">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Compare</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">한눈에 비교하기</h2>
          <p className="mt-4 text-muted">
            세 모델의 핵심 스펙을 나란히 놓았습니다. 설치 환경에 따라 하강 거리와 건조봉 길이는 조정될 수 있습니다.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 overflow-hidden rounded-3xl border border-line bg-surface">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <caption className="sr-only">MAJEON Plus, Fusion, Light 스펙 비교표</caption>
              <thead>
                <tr className="bg-surface-2/70">
                  <th scope="col" className="sticky left-0 bg-surface-2 px-5 py-4 text-left font-semibold text-muted">
                    항목
                  </th>
                  {products.map((p) => (
                    <th key={p.id} scope="col" className="px-5 py-4 text-left">
                      <div className="text-base font-extrabold">{p.name}</div>
                      <div className="mt-0.5 text-xs font-medium text-muted">{p.badge}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((label) => (
                  <tr key={label} className="border-t border-line">
                    <th scope="row" className="sticky left-0 bg-surface px-5 py-3.5 text-left font-semibold text-muted">
                      {label}
                    </th>
                    {products.map((p) => (
                      <td key={p.id} className="px-5 py-3.5 font-medium">
                        {specOf(p.id, label)}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-line bg-accent-soft/40">
                  <th scope="row" className="sticky left-0 bg-surface px-5 py-3.5 text-left font-semibold text-muted">
                    추천
                  </th>
                  {products.map((p) => (
                    <td key={p.id} className="px-5 py-3.5 font-medium">
                      {p.audience}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
