const SpecsSection = () => {
    // GSAP animations will be applied by useGsapAnimations hook via className
    const standardSpecs = [
      "レスポンシブデザイン対応",
      "最大5ページまで (TOPページ含む)",
      "更新依頼 無制限 (文言変更、ニュース追加、画像差替など ※内容による)",
      "修正依頼 月1回まで (フォント・位置・デザイン変更など)",
      "SSL暗号化通信",
      "SNSリンク設定",
      "お問い合わせフォーム設置",
      "独自ドメイン対応",
      "お知らせ投稿機能 (WordPress)",
      "使用技術: WordPress, Stripe (決済)",
    ];
  
    return (
      <section id="specs" className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold section-title inline-block pb-2 gsap-fade-in-up">サービス仕様とオプション</h2>
            <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto gsap-fade-in-up" data-gsap-delay="0.1">標準機能と、さらに充実させたい方向けのオプションをご案内します。</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="gsap-fade-in-up" data-gsap-delay="0.2">
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">標準仕様</h3>
              <ul className="space-y-3 text-gray-300">
                {standardSpecs.map((spec, index) => (
                  <li key={index} className="flex items-center">
                    <i className="fas fa-check-circle text-green-400 mr-3 text-xl"></i>{spec}
                  </li>
                ))}
              </ul>
            </div>
            <div className="gsap-fade-in-up" data-gsap-delay="0.3">
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">オプション</h3>
              <div className="bg-slate-800 glassmorphism p-6 rounded-lg shadow-xl">
                <h4 className="text-xl font-semibold text-purple-400 mb-2"><i className="fas fa-palette mr-2"></i>オリジナルデザイン制作</h4>
                <p className="text-gray-400 text-sm">テンプレートではなく、完全オリジナルのデザインをご希望の場合は別途お見積もりにて対応可能です。専門デザイナーと直接やり取りいただき、理想のホームページを形にします。</p>
                <p className="text-yellow-400 font-semibold mt-3">料金: 別途お見積もり</p>
              </div>
              <div className="bg-slate-800 glassmorphism p-6 rounded-lg shadow-xl mt-6">
                <h4 className="text-xl font-semibold text-purple-400 mb-2"><i className="fas fa-file-alt mr-2"></i>ページ追加</h4>
                <p className="text-gray-400 text-sm">標準の5ページを超えるページ数をご希望の場合、追加料金にて対応いたします。詳細はお問い合わせください。</p>
                <p className="text-yellow-400 font-semibold mt-3">料金: 1ページあたり XXXX円～ (内容による)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SpecsSection;