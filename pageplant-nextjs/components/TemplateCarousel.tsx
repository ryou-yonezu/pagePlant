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
    <div className="py-16 md:py-20 bg-gray-950"> {/* 上下のpaddingを少し調整 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* 左右のpaddingも考慮 */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold section-title inline-block pb-2 gsap-fade-in-up">
            豊富なテンプレートデザイン
          </h3>
          <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-2xl mx-auto gsap-fade-in-up" data-gsap-delay="0.1">
            100種類以上のテンプレートから好みにあったデザインを選択できます {/* 文言変更 */}
          </p>
        </div>
      </div>

      {/* keen-sliderコンテナ: 左右に少しはみ出すように見せるため、コンテナ幅より若干広くする */}
      {/* 必要であれば、親要素に overflow-x-hidden を設定 */}
      <div className="w-full overflow-hidden"> {/* カルーセルの親でoverflowを管理 */}
        <div ref={sliderRef} className="keen-slider py-4"> {/* カルーセル自体に少しpadding-top/bottom */}
          {templates.map((src, index) => (
            <div key={index} className="keen-slider__slide group px-2"> {/* スライド間の余白をspacingで制御するので、pxは最小限に */}
              {/* アスペクト比と高さを調整してカルーセルを大きく見せる */}
              <div className="aspect-[16/9] md:aspect-[16/8] lg:aspect-[16/7] rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 ease-out group-hover:scale-102 group-hover:shadow-green-500/30">
                {/* 画像の品質も重要 */}
                <Image
                  src={src}
                  alt={`テンプレートデザイン ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                  priority={index < 3}
                  quality={85} // 画像品質を少し上げる (ファイルサイズとのバランス)
                />
                {/* 画像上のデザイン番号表示を削除 */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-opacity duration-300"></div> */}
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* ナビゲーションボタン (オプション) */}
      {instanceRef.current && (
        <div className="flex justify-center mt-10 space-x-4">
          <button
            onClick={(e) => { e.stopPropagation(); instanceRef.current?.prev(); }}
            aria-label="前のスライドへ"
            className="p-3 rounded-full bg-green-500/80 text-white hover:bg-green-500 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); instanceRef.current?.next(); }}
            aria-label="次のスライドへ"
            className="p-3 rounded-full bg-green-500/80 text-white hover:bg-green-500 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default TemplateCarousel;