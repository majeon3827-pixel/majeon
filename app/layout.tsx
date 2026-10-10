import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR, Cormorant_Garamond } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { brand } from "@/content/site";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const title = "MAJEON 마전 | 당신의 생활을 쾌적하게, 고품격 전동 빨래건조대";
const description =
  "리모컨 전동 승강, LED 조명, 송풍 건조를 갖춘 전동 빨래건조대 마전(MAJEON). Plus · Fusion · Light 세 가지 모델로 가족부터 1인 가구까지. 목화기업.";

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title,
  description,
  keywords: ["전동 빨래건조대", "마전", "MAJEON", "빨래건조대", "목화기업", "천장 건조대", "베란다 건조대"],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ko_KR",
    siteName: brand.name,
    images: [{ url: "/images/hero-plus.webp", width: 1800, height: 820, alt: "MAJEON Plus 전동 빨래건조대" }],
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0e100f" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning className={`${notoSansKr.variable} ${display.variable}`}>
      <body className="min-h-dvh">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
