"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { DocFile } from "@/content/site";

type Props = {
  doc: DocFile;
  productName: string;
};

// 작은 화면이나 터치 기기에서는 iframe 안의 PDF 뷰어가 첫 페이지만 보이거나
// 스크롤이 막히는 경우가 많아, 새 탭으로 바로 엽니다.
function prefersNativeViewer() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;
}

export function DocPreview({ doc, productName }: Props) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const title = `${productName} ${doc.label}`;
  const fileName = `${productName.replace(/\s+/g, "-")}-${doc.label}.pdf`;

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [open, close]);

  const onTrigger = () => {
    if (prefersNativeViewer()) {
      window.open(doc.file, "_blank", "noopener,noreferrer");
      return;
    }
    setOpen(true);
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={onTrigger}
        className="group flex w-full items-center gap-4 rounded-2xl border border-line bg-bg p-3 text-left transition hover:border-accent/50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-label={`${title} 미리보기`}
      >
        <span className="relative block w-16 shrink-0 overflow-hidden rounded-lg border border-line bg-white shadow-sm">
          <Image
            src={doc.thumb}
            alt=""
            width={640}
            height={905}
            sizes="64px"
            className="block h-auto w-full"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition group-hover:bg-ink/35">
            <span className="scale-75 rounded-full bg-accent p-1.5 text-accent-ink opacity-0 shadow transition group-hover:scale-100 group-hover:opacity-100">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M11 4a7 7 0 100 14 7 7 0 000-14zm9 16l-4.3-4.3" />
              </svg>
            </span>
          </span>
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-bold">{doc.label}</span>
          <span className="mt-0.5 block text-xs text-muted">
            PDF · {doc.pages}p{doc.note ? ` · ${doc.note}` : ""}
          </span>
          <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-accent">
            미리보기
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </span>
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl">
            <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-bold">{title}</p>
                <p className="text-xs text-muted">PDF · {doc.pages}p</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={doc.file}
                  download={fileName}
                  className="inline-flex h-9 items-center gap-1.5 rounded-full bg-accent px-3.5 text-xs font-semibold text-accent-ink transition hover:opacity-90"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                  </svg>
                  다운로드
                </a>
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden h-9 items-center rounded-full border border-line px-3.5 text-xs font-semibold transition hover:bg-surface-2 sm:inline-flex"
                >
                  새 탭에서 열기
                </a>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={close}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-line transition hover:bg-surface-2"
                  aria-label="미리보기 닫기"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
            </div>
            <iframe
              src={`${doc.file}#view=FitH`}
              title={title}
              className="h-full w-full flex-1 bg-stage"
            />
          </div>
        </div>
      )}
    </>
  );
}
