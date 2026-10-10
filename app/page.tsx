import { BrandStory } from "@/components/BrandStory";
import { Compare } from "@/components/Compare";
import { Contact } from "@/components/Contact";
import { Downloads } from "@/components/Downloads";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <>
      <a
        href="#products"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
      >
        본문으로 건너뛰기
      </a>
      <Header />
      <main>
        <Hero />
        <BrandStory />
        <Features />
        <Products />
        <Compare />
        <Downloads />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
