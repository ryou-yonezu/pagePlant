import ContactForm from './ContactForm';

const ContactSection = () => {
  // GSAP animations will be applied by useGsapAnimations hook via className
  return (
    // hero-bg-pageplant は globals.css でライトモード用に調整済み
    // ★ text-slate-700
    <section id="contact" className="py-16 md:py-24 hero-bg-pageplant text-slate-700">
      <div className="container mx-auto px-6 text-center content-above-particles">
         <h2 className="text-3xl md:text-5xl font-bold mb-6 gsap-fade-in-up">さあ、あなたのビジネスに最適なホームページを。</h2>
        {/* ★ text-slate-600 */}
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto gsap-fade-in-up" data-gsap-delay="0.1">
          PagePlantなら、初期費用を気にせず、手軽にプロ品質のホームページが手に入ります。<br />
          まずは無料相談で、あなたの想いやビジネスについてお聞かせください。
        </p>
        {/* glassmorphism は globals.css でライトモード用に調整済み */}
        <div className="max-w-lg mx-auto glassmorphism p-8 md:p-10 rounded-xl shadow-xl gsap-fade-in-up" data-gsap-delay="0.2"> {/* shadow-xl を追加 */}
          {/* ★ text-gray-800 */}
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">無料相談・お問い合わせ</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default ContactSection;