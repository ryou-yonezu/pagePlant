// components/Footer.tsx
import Image from 'next/image'; // next/image をインポート

const Footer = () => {
  const quickLinks = [
    { href: "#service-overview", label: "サービス概要" },
    { href: "#strengths", label: "PagePlantの強み" },
    { href: "#pricing", label: "料金プラン" },
    { href: "#flow", label: "ご利用の流れ" },
    { href: "#faq", label: "よくある質問" },
  ];

  return (
    // ★ bg-gray-100 text-gray-600
    <footer className="bg-gray-100 text-gray-600 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#" className="inline-block">
              <Image
                src="/pageplant-logo.svg"
                alt="PagePlant Logo"
                width={130}
                height={35}
              />
            </a>
            {/* ★ text-sm mt-2 text-gray-500 */}
            <p className="text-sm mt-2 text-gray-500">初期費用0円からのホームページ作成。<br />あなたのビジネスを低コストでサポート。</p>
          </div>
          <div>
            {/* ★ text-gray-800 */}
            <h4 className="font-semibold text-gray-800 mb-3">クイックリンク</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map(link => (
                // ★ hover:text-green-600
                <li key={link.href}><a href={link.href} className="hover:text-green-600">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">お問い合わせ</h4>
            <ul className="space-y-2 text-sm">
              {/* ★ hover:text-green-600 */}
              <li><a href="mailto:info@pageplant.example.com" className="hover:text-green-600"><i className="fas fa-envelope mr-2"></i>info@pageplant.example.com</a></li>
              <li><a href="tel:012-3456-7890" className="hover:text-green-600"><i className="fas fa-phone mr-2"></i>012-3456-7890</a> (平日10時～18時)</li>
              <li className="flex space-x-3 mt-3">
                {/* ★ hover:text-green-500 */}
                <a href="#" className="hover:text-green-500" aria-label="Twitter"><i className="fab fa-twitter fa-lg"></i></a>
                <a href="#" className="hover:text-green-500" aria-label="Facebook"><i className="fab fa-facebook-f fa-lg"></i></a>
              </li>
            </ul>
          </div>
        </div>
        {/* ★ border-gray-300 */}
        <div className="border-t border-gray-300 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} PagePlant. All rights reserved.</p>
          {/* ★ text-xs mt-1 text-gray-500 */}
          <p className="text-xs mt-1 text-gray-500">このウェブサイトはデモンストレーション目的で作成されたものであり、実際には存在しないサービスです。</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;