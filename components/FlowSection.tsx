const FlowSection = () => {
    // GSAP animations will be applied by useGsapAnimations hook via className
    const flowSteps = [
      {
        step: "1",
        title: "お問い合わせ",
        description: "まずはフォームまたはお電話でお気軽にご相談ください。",
        color: "text-blue-300",
        alignRight: false,
        delay: "0.2"
      },
      {
        step: "2",
        title: "事業説明面談 (約60分)",
        description: "サービス内容やお客様のご要望を詳しくヒアリングします。",
        color: "text-purple-300",
        alignRight: true,
        delay: "0.3"
      },
      {
        step: "3",
        title: "ご契約・素材提供",
        description: "契約締結後、ホームページに使用する文章や画像をご提供いただきます。",
        color: "text-green-300",
        alignRight: false,
        delay: "0.4"
      },
      {
        step: "4",
        title: "ホームページ作成",
        description: "いただいた素材を元に、プロがホームページを制作します。",
        color: "text-yellow-400",
        alignRight: true,
        delay: "0.5"
      },
      {
        step: "5",
        title: "公開・運用保守",
        description: "完成したホームページを公開。その後の更新や保守もお任せください。",
        color: "text-red-400",
        alignRight: false,
        delay: "0.6"
      },
    ];
  
    return (
      // ★ bg-white
      <section id="flow" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold section-title inline-block pb-2 gsap-fade-in-up">ご利用の流れ</h2>
            {/* ★ text-gray-600 */}
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto gsap-fade-in-up" data-gsap-delay="0.1">簡単ステップで、あなたのホームページが完成します。</p>
          </div>
          <div className="relative max-w-xl mx-auto">
            <div className="flow-line hidden md:block"></div> {/* flow-line の色は globals.css で調整済み */}
            {flowSteps.map((item) => (
              <div
                key={item.step}
                className={`flow-item md:flex items-center mb-8 md:mb-12 gsap-fade-in-up ${item.alignRight ? 'md:flex-row-reverse' : ''}`}
                data-gsap-delay={item.delay}
              >
                {/* flow-icon の色は globals.css で調整済み */}
                <div className={`flow-icon w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto md:mx-0 mb-3 md:mb-0 ${item.alignRight ? 'md:ml-6' : 'md:mr-6'}`}>
                  {item.step}
                </div>
                {/* ★ bg-white border border-gray-200 shadow-lg */}
                <div className={`bg-white border border-gray-200 shadow-lg p-6 rounded-lg flex-1 ${item.alignRight ? 'text-center md:text-right' : 'text-center md:text-left'}`}>
                  {/* ★ タイトルのアクセントカラーは維持、または少し濃くする */}
                  <h3 className={`text-xl font-semibold ${item.color.replace('-300', '-600')} mb-1`}>{item.title}</h3> {/* 例: text-blue-300 -> text-blue-600 */}
                  {/* ★ text-gray-600 */}
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default FlowSection;