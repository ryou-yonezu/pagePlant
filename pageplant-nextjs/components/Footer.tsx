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
    <footer className="bg-slate-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            {/* ロゴ部分を Image コンポーネントに置き換え */}
            <a href="#" className="inline-block"> {/* ロゴがインラインブロック要素になるように */}
              <Image
                src="/images/PagePlant_rogo.png"// ★ publicフォルダからのパス (ヘッダーと同じものを使用)
                alt="PagePlant Logo"
                width={130}  // ★ フッター用のサイズに調整 (ヘッダーより少し小さくするなど)
                height={35} // ★ フッター用のサイズに調整 (アスペクト比を保つ)
                // priority はフッターなので通常は不要
              />
            </a>
            <p className="text-sm mt-2">初期費用0円からのホームページ作成。<br />あなたのビジネスを低コストでサポート。</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-200 mb-3">クイックリンク</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map(link => (
                <li key={link.href}><a href={link.href} className="hover:text-green-300">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-200 mb-3">お問い合わせ</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:info@pageplant.example.com" className="hover:text-green-300"><i className="fas fa-envelope mr-2"></i>info@pageplant.example.com</a></li>
              <li><a href="tel:012-3456-7890" className="hover:text-green-300"><i className="fas fa-phone mr-2"></i>012-3456-7890</a> (平日10時～18時)</li>
              <li className="flex space-x-3 mt-3">
                <a href="#" className="hover:text-green-400" aria-label="Twitter"><i className="fab fa-twitter fa-lg"></i></a>
                <a href="#" className="hover:text-green-400" aria-label="Facebook"><i className="fab fa-facebook-f fa-lg"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} PagePlant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;