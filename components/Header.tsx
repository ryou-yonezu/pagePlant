// components/Header.tsx
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
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
    <header className="fixed top-0 left-0 right-0 z-50 header-glassmorphism">
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
        <nav className="hidden md:flex space-x-5 items-center">
          {navLinks.map(link => (
            // ★ text-gray-700 hover:text-green-600
            <a key={link.href} href={link.href} className="text-gray-700 hover:text-green-600 transition duration-300 font-medium">{link.label}</a>
          ))}
          {/* CTAボタンのスタイルは .cta-button-v2 で制御される部分もあるが、基本色はTailwindで */}
          <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2.5 rounded-lg cta-button-v2 text-sm">無料相談・お問合せ</a>
        </nav>
        {/* ★ text-gray-700 hover:text-green-600 */}
        <button id="mobile-menu-button" className="md:hidden text-2xl text-gray-700 hover:text-green-600" onClick={toggleMobileMenu} aria-label="モバイルメニューを開閉">
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden header-glassmorphism">
          {navLinks.map(link => (
            // ★ text-gray-700 hover:bg-gray-100
            <a key={link.href} href={link.href} onClick={closeMobileMenu} className="block px-6 py-3 text-gray-700 hover:bg-gray-100 transition duration-300">{link.label}</a>
          ))}
          <a href="#contact" onClick={closeMobileMenu} className="block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold text-center">無料相談・お問合せ</a>
        </div>
      )}
    </header>
  );
};
export default Header;