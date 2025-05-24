// components/PricingSection.tsx
import React from 'react'; // useState は不要になった
import { FaCheckCircle, FaStar } from 'react-icons/fa';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingTierProps {
  name: string;
  displayPrice: string; // 表示する主価格 (例: "9,000円" や "9,500円")
  pricePeriodText: string; // 価格の期間 (例: "/実質月額 (年払い)" や "/月額")
  secondaryPriceInfo?: string; // 価格の補足情報 (例: "108,000円 /年 (税別)")
  initialFee: string;
  features: PlanFeature[];
  isRecommended?: boolean;
  ctaText: string;
  highlightColor: string;
  onSelectPlan: () => void;
  isYearlyPlan?: boolean; // このプランが年払いプランであるかを示すフラグ
}

const PlanCard: React.FC<PricingTierProps> = ({
  name,
  displayPrice,
  pricePeriodText,
  secondaryPriceInfo,
  initialFee,
  features,
  isRecommended,
  ctaText,
  highlightColor,
  onSelectPlan,
  // isYearlyPlan を受け取る
}) => {
  return (
      <div
        className={`
          bg-white rounded-xl shadow-xl p-6 md:p-8 flex flex-col relative h-full /* ★ bg-white, shadow-xl */
          transition-all duration-300 ease-in-out transform hover:scale-105
          ${isRecommended ? `border-2 ${highlightColor}` : 'border border-gray-200'} /* ★ 通常ボーダー変更 */
        `}
      >
        {isRecommended && (
          <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm font-semibold text-white ${isRecommended ? 'bg-green-500' : 'bg-blue-500'} shadow-lg flex items-center`}>
            <FaStar className="mr-2" /> おすすめ
          </div>
        )}
        {/* ★ text-gray-800 */}
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-1 text-gray-800">{name}</h3>
        <div className="my-4 h-[10px] flex items-center justify-center"></div>
  
        <div className="text-center my-4">
          <span className={`text-4xl md:text-5xl font-extrabold ${isRecommended ? 'text-green-500' : 'text-blue-600'}`}> {/* アクセントカラー調整 */}
            {displayPrice}
          </span>
          {/* ★ text-gray-500 */}
          <span className="text-gray-500 ml-1">{pricePeriodText}</span>
          {secondaryPriceInfo && (
            <p className="text-sm text-gray-500 mt-1">{secondaryPriceInfo}</p>
          )}
        </div>
  
        <div className="mb-6 text-center">
          {/* ★ text-gray-800 */}
          <p className="text-lg font-semibold text-gray-800">初期費用:
            <span className={`ml-2 ${initialFee === "0円" ? "text-green-500" : "text-yellow-500"}`}>
              {initialFee}
            </span>
          </p>
        </div>
  
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <FaCheckCircle className={`w-5 h-5 mt-1 mr-3 ${feature.included ? 'text-green-500' : 'text-gray-300'}`} /> {/* 未選択の色調整 */}
              {/* ★ text-gray-700, text-gray-400 */}
              <span className={feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}>{feature.text}</span>
            </li>
          ))}
        </ul>

      <button
        onClick={onSelectPlan}
        className={`
          w-full mt-auto py-3 px-6 rounded-lg font-semibold text-lg
          transition-all duration-300 ease-in-out
          focus:outline-none focus:ring-4
          ${isRecommended
            ? `bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-green-500/40 focus:ring-green-400`
            : `bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30 focus:ring-blue-500`}
        `}
      >
        {ctaText}
      </button>
    </div>
  );
};


const PricingSection = () => {
  // PlanCardに渡すデータを調整
  const plansData: PricingTierProps[] = [
    {
      name: "月払いプラン",
      displayPrice: "9,500円",
      pricePeriodText: "/月額 (税別)",
      initialFee: "5,500円", // 税込
      features: [
        { text: "ホームページ制作 (最大5ページ)", included: true },
        { text: "レスポンシブデザイン", included: true },
        { text: "サーバー・ドメイン費用込み", included: true },
        { text: "SSL暗号化通信", included: true },
        { text: "WordPressお知らせ投稿機能", included: true },
        { text: "月1回の修正依頼", included: true },
        { text: "無制限の更新依頼 (軽微なもの)", included: true },
        { text: "メールサポート", included: true },
      ],
      isRecommended: false,
      ctaText: "月払いで始める",
      highlightColor: "border-blue-500", // 通常プランのボーダー色
      onSelectPlan: () => handlePlanSelection("月払いプラン"),
      isYearlyPlan: false,
    },
    {
      name: "年払いプラン",
      displayPrice: "9,000円",
      pricePeriodText: "/実質月額 (年払い)",
      secondaryPriceInfo: "108,000円 /年 (税別)", // 年額総額を表示
      initialFee: "0円",
      features: [
        { text: "ホームページ制作 (最大5ページ)", included: true },
        { text: "レスポンシブデザイン", included: true },
        { text: "サーバー・ドメイン費用込み", included: true },
        { text: "SSL暗号化通信", included: true },
        { text: "WordPressお知らせ投稿機能", included: true },
        { text: "月1回の修正依頼", included: true },
        { text: "無制限の更新依頼 (軽微なもの)", included: true },
        { text: "優先メールサポート", included: true },
        { text: "初期費用 ¥5,500 → ¥0", included: true },
      ],
      isRecommended: true,
      ctaText: "年払いで申し込む",
      highlightColor: "border-green-500",
      onSelectPlan: () => handlePlanSelection("年払いプラン"),
      isYearlyPlan: true,
    },
  ];

  const handlePlanSelection = (planName: string) => {
    console.log(`Selected plan: ${planName}`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    // ★ bg-gray-50
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold section-title inline-block pb-2 gsap-fade-in-up">
            最適なプランを選びましょう
          </h2>
          {/* ★ text-gray-600 */}
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto gsap-fade-in-up" data-gsap-delay="0.1">
            お客様のニーズに合わせた、透明性の高い料金プランをご用意しています。
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
          {plansData.map((plan, index) => (
            <div key={index} className="gsap-fade-in-up" data-gsap-delay={0.2 + index * 0.1}>
              <PlanCard {...plan} />
            </div>
          ))}
        </div>
        {/* ★ text-gray-500, text-gray-700 */}
        <div className="mt-16 text-center text-sm text-gray-500 max-w-3xl mx-auto gsap-fade-in-up" data-gsap-delay="0.5">
          <h4 className="text-lg font-semibold text-gray-700 mb-3">共通の注意事項:</h4>
          <ul className="list-disc list-inside space-y-1 text-left mx-auto max-w-xl">
          <li>表示価格は特に記載がない限り税別です。</li>
            <li>初回お支払いは、初期費用（該当する場合）＋初月または年額料金となります（公開月から発生）。</li>
            <li>最低契約期間は6ヶ月です。</li>
            <li>お支払い方法はクレジットカード（Stripe経由）による自動引き落としです。毎月25日処理。</li>
            <li>公開希望日の10日前までにホームページ掲載素材が揃わない場合は、予定通り料金が発生いたします。</li>
            <li>支払い遅延ポリシー：引き落とし日から次の支払日までに支払いが確認できない場合、Web公開を一時停止します。次のお支払いは2ヶ月分となります。</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default PricingSection;