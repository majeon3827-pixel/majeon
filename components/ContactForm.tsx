"use client";

import { useState, type FormEvent } from "react";
import { contact, products } from "@/content/site";

/**
 * 서버 없이 동작하는 문의 폼: 입력 내용을 mailto 링크로 조립해 기본 메일 앱을 엽니다.
 * 추후 폼 서비스(Formspree 등)나 API 라우트로 교체할 때 handleSubmit만 바꾸면 됩니다.
 */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const model = String(data.get("model") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `[마전 문의] ${model || "모델 미정"} - ${name || "고객"}`;
    const body = [
      `이름: ${name}`,
      `연락처: ${phone}`,
      `관심 모델: ${model}`,
      "",
      "문의 내용:",
      message,
    ].join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("opened");
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/30 focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          이름
          <input name="name" required autoComplete="name" placeholder="홍길동" className={field} />
        </label>
        <label className="block text-sm font-semibold">
          연락처
          <input name="phone" required inputMode="tel" autoComplete="tel" placeholder="010-0000-0000" className={field} />
        </label>
      </div>
      <label className="mt-4 block text-sm font-semibold">
        관심 모델
        <select name="model" defaultValue="" className={field}>
          <option value="">아직 정하지 않았어요</option>
          {products.map((p) => (
            <option key={p.id} value={p.name}>
              {p.name} · {p.tagline}
            </option>
          ))}
        </select>
      </label>
      <label className="mt-4 block text-sm font-semibold">
        문의 내용
        <textarea
          name="message"
          required
          rows={5}
          placeholder="설치 장소(베란다 폭·천장 높이), 희망 일정, A/S 내용 등을 적어 주세요."
          className={field}
        />
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-ink transition hover:opacity-90 sm:w-auto"
      >
        이메일로 문의 보내기
      </button>
      <p className="mt-3 text-xs text-muted" aria-live="polite">
        {status === "opened"
          ? "메일 앱이 열렸습니다. 열리지 않으면 아래 이메일 주소로 직접 보내 주세요."
          : "버튼을 누르면 작성한 내용이 담긴 메일 창이 열립니다."}
      </p>
    </form>
  );
}
