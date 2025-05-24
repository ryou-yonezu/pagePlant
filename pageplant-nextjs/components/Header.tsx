// components/Header.tsx
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  // ... (state と関数の定義は変更なし) ...
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { href: "#service-overview", label: "サービス概要" },
    { href: "#strengths", label: "PagePlantの強み" },
    { href: "#pricing", label: "料金プラン" },
    { href: "#flow", label: "ご利用の流れ" },
    { href: "#specs", label: "仕様・オプション" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    // ★ className を変更
    <header className="fixed top-0 left-0 right-0 z-50 header-glassmorphism"> {/* glassmorphism を header-glassmorphism に変更 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <Image
            src="/images/PagePlant_rogo.png"
            alt="PagePlant Logo"
            width={150}
            height={40}
            priority
          />
        </a>
        {/* ... (ナビゲーションとモバイルメニューボタン) ... */}
        <nav className="hidden md:flex space-x-5 items-center">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="hover:text-green-400 transition duration-300 font-medium">{link.label}</a>
          ))}
          <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2.5 rounded-lg cta-button-v2 text-sm">無料相談・お問合せ</a>
        </nav>
        <button id="mobile-menu-button" className="md:hidden text-2xl text-gray-200 hover:text-green-400" onClick={toggleMobileMenu} aria-label="モバイルメニューを開閉">
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
      {isMobileMenuOpen && (
        // モバイルメニューの背景もヘッダー専用スタイルを適用するか、元のglassmorphismのままにするか選択
        <div id="mobile-menu" className="md:hidden header-glassmorphism"> {/* こちらも変更 */}
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={closeMobileMenu} className="block px-6 py-3 hover:bg-gray-700/50 transition duration-300">{link.label}</a>
          ))}
          <a href="#contact" onClick={closeMobileMenu} className="block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold text-center">無料相談・お問合せ</a>
        </div>
      )}
    </header>
  );
};

export default Header;