// components/ServiceOverviewSection.tsx
import TemplateCarousel from './TemplateCarousel'; // 作成したカルーセルコンポーネントをインポート

const ServiceOverviewSection = () => {
  return (
    <> {/* Fragmentで囲む */}
      <section id="service-overview" className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold section-title inline-block pb-2 gsap-fade-in-up">PagePlantとは？</h2>
            <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto gsap-fade-in-up" data-gsap-delay="0.1">「初期費用を抑えたい」「ITは苦手だけどホームページが欲しい」そんなあなたのためのサービスです。</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="gsap-fade-in-up" data-gsap-delay="0.2">
              <img src="/images/pagePlantIntroduction.png" alt="ホームページ作成イメージ" className="rounded-xl shadow-2xl w-full" />
            </div>
            <div className="space-y-6 gsap-fade-in-up" data-gsap-delay="0.3">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-green-300">PagePlantのミッション</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
                  <li>手軽にホームページを立ち上げられる環境を提供する</li>
                  <li>ITリテラシーの低いユーザーにも優しいサービスを提供する</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-300">こんな方におすすめ</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
                  <li>新規事業を立ち上げたばかりの企業様</li>
                  <li>初期費用を抑えたい個人事業主様</li>
                  <li>ITリテラシーに不安のあるユーザー様</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-purple-300">提供する価値</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
                  <li>初期費用0円で高品質なホームページを作成</li>
                  <li>月額制の低コストでホームページを運営可能</li>
                  <li>100種類以上のWordPressテンプレートから選択可能</li> {/* この項目と関連 */}
                  <li>安心の手厚いサポート体制</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TemplateCarousel /> {/* ここにカルーセルコンポーネントを追加 */}
    </>
  );
};

export default ServiceOverviewSection;