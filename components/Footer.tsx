import { brand, company, nav } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-surface-2/60">
      <div className="container py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 text-sm text-muted">{brand.tagline}</p>
          </div>
          <nav aria-label="푸터 메뉴">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-muted transition hover:text-ink">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <dl className="mt-10 grid gap-x-8 gap-y-2 border-t border-line pt-6 text-xs text-muted sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex gap-2">
            <dt className="shrink-0 font-semibold text-ink/80">회사명</dt>
            <dd>{company.name}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="shrink-0 font-semibold text-ink/80">대표</dt>
            <dd>{company.ceo}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="shrink-0 font-semibold text-ink/80">사업자등록번호</dt>
            <dd>{company.bizNo}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="shrink-0 font-semibold text-ink/80">이메일</dt>
            <dd>{company.email}</dd>
          </div>
          <div className="flex gap-2 sm:col-span-2 lg:col-span-4">
            <dt className="shrink-0 font-semibold text-ink/80">주소</dt>
            <dd>{company.address}</dd>
          </div>
        </dl>
        <p className="mt-6 text-xs text-muted">
          © {year} {company.name}. All rights reserved. 제품의 외관과 사양은 품질 개선을 위해 예고 없이 변경될 수 있습니다.
        </p>
      </div>
    </footer>
  );
}
