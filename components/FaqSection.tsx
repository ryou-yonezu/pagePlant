import FaqItem from './FaqItem';

const faqData = [
  {
    question: "本当に初期費用0円で始められますか？",
    answer: "はい、年払いプランをご選択いただいた場合は初期費用0円となります。月払いプランの場合は、初回手数料として月額5,500円(税込)を頂戴いたします。どちらのプランも、ホームページ作成自体の費用は月額料金に含まれております。",
    delay: "0.1"
  },
  {
    question: "最低契約期間はありますか？",
    answer: "はい、最低契約期間は6ヶ月とさせていただいております。",
    delay: "0.2"
  },
  {
    question: "解約はいつでもできますか？解約方法を教えてください。",
    answer: "最低契約期間終了後はいつでも解約可能です。解約をご希望の場合は、解約希望月の前月15日までにご連絡ください。例えば、3月いっぱいで公開停止をご希望の場合は、3月15日までにご連絡いただく必要がございます。年払い契約の途中で解約された場合、残期間分の料金は返金いたしかねますが、ホームページの公開停止およびドメインの返却（お客様が取得された場合）は可能です。解約後、弊社サーバー上のデータは速やかに削除いたします。ドメインやデザインデータの譲渡は行っておりません。",
    delay: "0.3"
  },
  {
    question: "支払い方法は？",
    answer: "クレジットカードによる自動引き落とし（Stripe決済システム利用）となります。毎月25日に引き落とし処理が行われます。",
    delay: "0.4"
  }
];

const FaqSection = () => {
  // GSAP animations will be applied by useGsapAnimations hook via className
  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-950">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold section-title inline-block pb-2 gsap-fade-in-up">よくあるご質問</h2>
        </div>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} delay={faq.delay} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default FaqSection;