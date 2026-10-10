# MAJEON (마전) 공식 소개 사이트

전동 빨래건조대 **마전(MAJEON)** 의 소개 페이지입니다. 기존 Canva 사이트(majeon.my.canva.site)를
Next.js 로 다시 구현하면서 반응형, 다크모드, 제품 비교표, 문의 폼, SEO 메타데이터를 추가했습니다.

## 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 정적 사이트를 out/ 에 생성 (output: "export")
npm run lint
```

`out/` 폴더를 그대로 Vercel, Netlify, Cloudflare Pages, GitHub Pages, 일반 웹호스팅 어디에나 올리면 됩니다.

## 구조

```
app/            레이아웃(폰트·메타데이터·테마), 페이지, 전역 스타일(테마 토큰)
components/     섹션 단위 컴포넌트 (Header, Hero, BrandStory, Features, Products, Compare, Downloads, Contact, Footer)
content/site.ts 모든 문구·스펙·연락처·링크. 내용 수정은 이 파일만 고치면 됩니다.
public/images/  최적화된 WebP 이미지
scripts/        build-images.mjs — 원본 이미지를 WebP 로 변환하는 일회성 스크립트
```

## 콘텐츠 수정

- 문구, 제품 스펙, 비교표 항목, 연락처, 회사 정보: `content/site.ts`
- 색상·폰트 토큰: `app/globals.css` 의 `:root` / `.dark`
- 이미지 교체: `public/images/` 에 같은 이름으로 덮어쓰거나 `content/site.ts` 의 경로를 바꿉니다.

## 문의 폼

서버 없이 동작하도록 `mailto:` 링크로 메일 앱을 엽니다. 폼 서비스(Formspree, Tally 등)나 API 로
바꾸려면 `components/ContactForm.tsx` 의 `handleSubmit` 만 교체하면 됩니다.

## 자료 출처

- 원본 사이트: https://majeon.my.canva.site/majeon
- 제품소개서 / 사용설명서 / 설치설명서 (Google Drive, `content/site.ts` 의 `downloads` 참고)

## 배포 (GitHub Pages + 커스텀 도메인)

1. GitHub 저장소에 푸시하면 `.github/workflows/deploy.yml` 이 `out/` 을 빌드해 Pages 에 배포합니다.
2. 저장소 **Settings → Pages → Build and deployment → Source** 를 `GitHub Actions` 로 선택합니다.
3. `public/CNAME` 에 적힌 도메인이 그대로 Pages 커스텀 도메인으로 등록됩니다.
4. 도메인 등록 업체의 DNS 에 아래 레코드를 추가합니다.
   - 루트 도메인(`example.com`): A 레코드 4개 → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` 서브도메인: CNAME 레코드 → `<깃허브계정>.github.io`
5. Settings → Pages 에서 **Enforce HTTPS** 를 켭니다. 인증서는 GitHub 이 자동 발급합니다(DNS 반영 후 최대 24시간).
