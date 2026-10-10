"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** 지연(ms). 카드 목록을 순차 등장시킬 때 사용 */
  delay?: number;
  as?: ElementType;
  id?: string;
};

/** IntersectionObserver 기반 경량 스크롤 등장 효과 (프레임워크 의존성 없음) */
export function Reveal({ children, className = "", delay = 0, as: Tag = "div", id }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;

  return (
    <Tag ref={ref} id={id} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
