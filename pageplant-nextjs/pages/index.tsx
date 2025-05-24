// pages/index.tsx
import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react'; // useEffect は不要なら削除してもOK
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceOverviewSection from '@/components/ServiceOverviewSection';
import StrengthsSection from '@/components/StrengthsSection';
import PricingSection from '@/components/PricingSection';
import FlowSection from '@/components/FlowSection';
import SpecsSection from '@/components/SpecsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import useGsapAnimations from '@/hooks/useGsapAnimations';

export default function HomePage() {
  useGsapAnimations();
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  // initializeParticles 関数は Hero.tsx にロジックが移ったため不要
  /*
  const initializeParticles = () => {
    if (typeof window !== 'undefined' && window.particlesJS) {
      console.log("Initializing Particles.js");
      try {
        window.particlesJS('particles-js', {
          // ... (config)
        });
        // setParticlesLoaded(true); // この状態更新もHero側で行うか、ScriptのonLoadで行う
      } catch (error) {
        console.error("Error initializing Particles.js:", error);
      }
    } else {
        console.warn("Particles.js library not found on window object.");
    }
  };
  */

  return (
    <>
      <Head>
        <title>PagePlant - 初期費用0円からのホームページ作成・運営サービス</title>
        <meta name="description" content="PagePlantは、専門知識は一切不要。高品質なホームページを低コストで実現し、あなたのビジネスをサポートします。" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
        strategy="lazyOnload" // または "afterInteractive"
        onLoad={() => {
          console.log("Particles.js script loaded on index.tsx.");
          setParticlesLoaded(true); // スクリプトがロードされたことを Hero コンポーネントに伝える
        }}
        onError={(e) => {
            console.error("Error loading Particles.js script:", e);
        }}
      />

      <Header />
      <main>
        <Hero particlesScriptLoaded={particlesLoaded} /> {/* props でロード状態を渡す */}
        <ServiceOverviewSection />
        <StrengthsSection />
        <PricingSection />
        <FlowSection />
        <SpecsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}