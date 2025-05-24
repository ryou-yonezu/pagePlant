// components/Hero.tsx
import { useEffect, useRef } from 'react';
import { IParticlesParams } from '@/types/global'; // 型定義パス確認

interface HeroProps {
  particlesScriptLoaded: boolean;
}

const Hero: React.FC<HeroProps> = ({ particlesScriptLoaded }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesInitialized = useRef(false);

  useEffect(() => {
    if (particlesScriptLoaded && !particlesInitialized.current) {
      if (typeof window !== 'undefined' && window.particlesJS) {
        const particlesElement = document.getElementById('particles-js');
        if (particlesElement) {
          const particlesConfig: IParticlesParams = { // ★ ライトモード用のパーティクル設定
            particles: {
              number: { value: 50, density: { enable: true, value_area: 900 } }, // 少し減らす
              color: { value: "#3b82f6" }, // ★ 明るいブルー系
              shape: { type: "circle" },
              opacity: { value: 0.6, random: true }, // 少し濃く
              size: { value: 3, random: true },
              line_linked: {
                enable: true,
                distance: 160,
                color: "#60a5fa", // ★ 明るいブルー系 (線)
                opacity: 0.4,
                width: 1
              },
              move: { enable: true, speed: 1.2, direction: "none", random: true, straight: false, out_mode: "out" }
            },
            interactivity: {
              detect_on: "canvas",
              events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: false }, resize: true },
              modes: { grab: { distance: 130, line_opacity: 0.7 } }
            },
            retina_detect: true
          };
          try {
            window.particlesJS('particles-js', particlesConfig);
            particlesInitialized.current = true;
          } catch (error) {
            console.error("Hero: Error initializing Particles.js:", error);
          }
        }
      }
    }
  }, [particlesScriptLoaded]);

  return (
    // ★ text-slate-700 (濃いグレー) に変更
    <section className="hero-bg-pageplant text-slate-700 pt-36 pb-24 md:pt-48 md:pb-32 text-center">
      <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 0 }}></div>
      <div className="container mx-auto px-6 content-above-particles" ref={heroRef}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 gsap-fade-in-up leading-tight">
          初期費用<span className="section-title-green">0円</span>ではじめる、
          <br className="hidden md:block" />
          <span className="text-3xl md:text-5xl block mt-2 md:mt-4">月額制ホームページ作成サービス</span>
        </h1>
        {/* ★ text-slate-600 (やや薄いグレー) */}
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto gsap-fade-in-up" data-gsap-delay="0.2">
          PagePlantは、専門知識は一切不要。高品質なホームページを低コストで実現し、あなたのビジネスをサポートします。
        </p>
        <div className="gsap-fade-in-up" data-gsap-delay="0.4">
          <a href="#contact" className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold text-lg md:text-xl px-10 py-4 rounded-lg cta-button-v2 inline-block">
            <i className="fas fa-seedling mr-2"></i>まずは無料で相談する
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto gsap-fade-in-up" data-gsap-delay="0.6">
          {/* glassmorphism を使用するカード (globals.cssでライトモード用に調整済み) */}
          <div className="glassmorphism p-6 rounded-xl text-left">
            {/* アイコンの色は維持 */}
            <i className="fas fa-wallet text-3xl text-green-500 mb-3"></i>
            {/* ★ text-slate-800 */}
            <h3 className="text-xl font-semibold mb-1 text-slate-800">初期費用0円</h3>
            {/* ★ text-slate-500 */}
            <p className="text-sm text-slate-500">気軽に始められる安心価格</p>
          </div>
          <div className="glassmorphism p-6 rounded-xl text-left">
            <i className="fas fa-tachometer-alt text-3xl text-blue-500 mb-3"></i>
            <h3 className="text-xl font-semibold mb-1 text-slate-800">月額保守で安心</h3>
            <p className="text-sm text-slate-500">更新・運用もお任せください</p>
          </div>
          <div className="glassmorphism p-6 rounded-xl text-left">
            <i className="fas fa-headset text-3xl text-purple-500 mb-3"></i> {/* 色を少し濃く */}
            <h3 className="text-xl font-semibold mb-1 text-slate-800">手厚いサポート</h3>
            <p className="text-sm text-slate-500">ITが苦手な方も安心</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;