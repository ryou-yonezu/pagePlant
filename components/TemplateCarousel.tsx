// components/TemplateCarousel.tsx
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';


const templates = [
    '/tempateScreenShot/hm1.webp', 
    '/tempateScreenShot/hm2.webp', 
    '/tempateScreenShot/hm3.webp', 
    '/tempateScreenShot/hm4.webp', 
  '/tempateScreenShot/hm5.webp', 
  '/tempateScreenShot/sf1.webp', 
   '/tempateScreenShot/sf2.webp', 
  '/tempateScreenShot/sf3.webp', 
  '/tempateScreenShot/sf4.webp', 
  '/tempateScreenShot/sf5.webp', 
  ];
const TemplateCarousel: React.FC = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        // カルーセルを大きく見せるために perView を減らし、個々のスライドが大きく表示されるようにする
        perView: 1.2, // モバイルで1枚と少し見える程度
        spacing: 20,
      },
      breakpoints: {
        '(min-width: 768px)': { // タブレット
          slides: { perView: 2.2, spacing: 25 },
        },
        '(min-width: 1024px)': { // PC (小)
          slides: { perView: 2.8, spacing: 30 }, // 3枚弱見えるように調整
        },
        '(min-width: 1280px)': { // PC (大)
          slides: { perView: 3.2, spacing: 35 }, // 3枚強見えるように調整
        },
      },
      created(s) {
        s.moveToIdx(1, true, { duration: 0 }); // 初期位置調整
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3500); // 自動再生の間隔を少し長く
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    // ★ bg-gray-50 (非常に薄いグレー)
    <div className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold section-title inline-block pb-2 gsap-fade-in-up">
            豊富なテンプレートデザイン
          </h3>
          {/* ★ text-gray-600 */}
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto gsap-fade-in-up" data-gsap-delay="0.1">
            100種類以上のテンプレートから好みにあったデザインを選択できます
          </p>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div ref={sliderRef} className="keen-slider py-4">
          {templates.map((src, index) => (
            <div key={index} className="keen-slider__slide group px-2">
              <div className="aspect-[16/9] md:aspect-[16/8] lg:aspect-[16/7] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform transition-all duration-500 ease-out group-hover:scale-102 group-hover:shadow-green-600/20"> {/* シャドウの色調整 */}
                <Image
                  src={src}
                  alt={`テンプレートデザイン ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                  priority={index < 3}
                  quality={85}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {instanceRef.current && (
         <div className="flex justify-center mt-10 space-x-4">
          {/* ボタンの色はアクセントカラーなので基本維持、フォーカスリングの色を調整 */}
          <button
            onClick={(e) => { e.stopPropagation(); instanceRef.current?.prev(); }}
            aria-label="前のスライドへ"
            className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-60"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); instanceRef.current?.next(); }}
            aria-label="次のスライドへ"
            className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-60"
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      )}
    </div>
  );
};
export default TemplateCarousel;