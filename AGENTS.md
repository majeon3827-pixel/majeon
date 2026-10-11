# MAJEON 사이트 작업 메모

- 모든 문구/스펙/연락처는 `content/site.ts` 한 곳에서 관리한다. 컴포넌트에 문자열을 직접 쓰지 않는다.
- 정적 export(`output: "export"`)를 유지한다. 서버 전용 기능(API 라우트, 동적 렌더링)을 추가하지 않는다.
- 이미지는 `scripts/build-images.mjs` 로 WebP 변환 후 `public/images/` 에 둔다. `next/image` 는 `unoptimized` 모드다.
- 제품 PDF는 원본을 저장소에 넣지 않는다. `docs-src/`에 두고 `npm run build:docs` 로 `public/docs/` 에 압축본과 썸네일을 생성한다. 자료실 UI는 `components/DocPreview.tsx`(모달 미리보기)와 `content/site.ts` 의 `downloads` 로만 구성한다.
- 다크모드는 next-themes 의 class 전략. 색상은 `app/globals.css` 의 CSS 변수 토큰(bg, surface, ink, muted, line, accent 등)만 사용한다.
- 스펙 수치, 주소, 사업자번호, 연락처는 원본 자료와 다르게 임의로 바꾸지 않는다.
- 변경 후 `npm run lint && npx tsc --noEmit && npm run build` 가 통과해야 한다.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
