import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 사이트로 내보내기: `npm run build` 결과물(out/)을 어떤 정적 호스팅에도 올릴 수 있습니다.
  output: "export",
  trailingSlash: true,
  images: {
    // 정적 export에서는 런타임 이미지 최적화 서버가 없으므로,
    // scripts/build-images.mjs 로 미리 WebP 최적화한 파일을 그대로 사용합니다.
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
