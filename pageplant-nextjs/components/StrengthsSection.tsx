const StrengthsSection = () => {
    // GSAP animations will be applied by useGsapAnimations hook via className
    const strengths = [
      { icon: "fas fa-coins", color: "text-green-400", title: "初期費用0円", description: "高額な初期投資は不要。リスクを抑えてホームページをスタートできます。", delay: "0" },
      { icon: "fas fa-hand-holding-usd", color: "text-blue-400", title: "低価格な月額料金", description: "月々の負担も軽く、継続しやすい料金設定。サーバー・ドメイン費用も込み。", delay: "0.1" },
      { icon: "fab fa-wordpress", color: "text-purple-400", title: "WordPress活用", description: "100種類以上の豊富なテンプレート。ブログ機能など拡張性も抜群です。", delay: "0.2" },
      { icon: "fas fa-users-cog", color: "text-yellow-400", title: "手厚いサポート", description: "ITが苦手な方でも安心。更新作業や技術的な問題もサポートします。", delay: "0.3" },
    ];
  
    return (
      <section id="strengths" className="py-16 md:py-24 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold section-title inline-block pb-2 gsap-fade-in-up">PagePlantが選ばれる理由</h2>
            <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto gsap-fade-in-up" data-gsap-delay="0.1">お客様のビジネスを加速させる、PagePlantならではの強みをご紹介します。</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-xl shadow-2xl feature-card-v2 gsap-scale-in" data-gsap-delay={strength.delay}>
                <div className={`text-5xl ${strength.color} mb-6`}><i className={strength.icon}></i></div>
                <h3 className="text-2xl font-semibold mb-3">{strength.title}</h3>
                <p className="text-gray-300 text-sm">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default StrengthsSection;