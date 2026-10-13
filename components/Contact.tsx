import { contact } from "@/content/site";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";

const tel = (n: string) => `tel:${n.replace(/-/g, "")}`;

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Contact Us</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              설치 상담부터 A/S까지
              <br />
              바로 연락하세요
            </h2>
            <p className="mt-4 text-muted">
              설치 환경을 알려주시면 알맞은 모델과 설치 방법을 안내해 드립니다.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-8 space-y-3">
            <a
              href={tel(contact.phone)}
              className="flex items-center justify-between rounded-2xl border border-line bg-surface p-5 transition hover:border-accent/40 hover:shadow-md"
            >
              <div>
                <div className="text-xs font-semibold tracking-wide text-muted">대표 전화 · 설치 · A/S</div>
                <div className="mt-1 text-xl font-extrabold tracking-tight">{contact.phone}</div>
              </div>
              <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent">전화하기</span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center justify-between rounded-2xl border border-line bg-surface p-5 transition hover:border-accent/40 hover:shadow-md"
            >
              <div>
                <div className="text-xs font-semibold tracking-wide text-muted">이메일</div>
                <div className="mt-1 text-lg font-extrabold tracking-tight break-all">{contact.email}</div>
              </div>
              <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent">메일 보내기</span>
            </a>
          </Reveal>

          <Reveal delay={160} className="mt-6 rounded-2xl bg-surface-2/70 p-5 text-sm">
            <div className="font-semibold">상담 시간</div>
            <p className="mt-1 text-ink">{contact.hours}</p>
            <p className="mt-1 text-muted">{contact.hoursNote}</p>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
