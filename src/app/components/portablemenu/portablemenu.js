'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';



const PortableMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenuButton,setShowMenuButton] = useState(false);
useEffect(() => {
  const navBarHeight = 100;

  const handleScroll = () => {
    console.log(window.scrollY);

    if (window.scrollY > navBarHeight) {
      setShowMenuButton(true);
    } else {
      setShowMenuButton(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Cleanup (VERY important)
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


  // Social media links
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: '🔗' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '📷' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
  ];

  // Navigation links
  const navLinks = [
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Say Hello', href: '/contact', special: true },
  ];

  return (
    <div className="fixed top-8 right-8 z-50">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-[#0f1a22] text-white p-3 rounded-lg hover:bg-[#1a2633] transition-all ease-in-out duration-400 shadow-lg ${showMenuButton ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Expanded Menu */}
      <div
        className={`absolute top-0 right-0 bg-white shadow-2xl rounded-[32px] overflow-hidden transition-all duration-300 ease-out transform ${
          isOpen
            ? 'translate-x-0 opacity-100 visible'
            : 'translate-x-full opacity-0 invisible'
        }`}
        style={{
          width: '50vw',
          marginTop: '60px',
        }}
      >
        {/* Navigation Links */}
        <div className="border-b border-[#e5e7eb]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-6 text-4xl font-[bomstad-semibold] transition ${
                link.special
                  ? 'bg-[#0f1a22] text-white hover:bg-[#1a2633]'
                  : 'text-[#0f1a22] hover:bg-gray-100'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="px-6 py-6">
          <p className="text-xs font-[bomstad-semibold] text-[#6e6e73] uppercase mb-3">
            Follow
          </p>
          <div className="grid grid-cols-3 gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex flex-col items-center gap-2 rounded-xl bg-[#f7f8fa] hover:bg-[#0f1a22] hover:text-white text-[#0f1a22] transition p-4"
                title={social.name}
              >
                <span className="text-3xl">{social.icon}</span>
                <span className="text-xs uppercase tracking-[0.2em] font-[bomstad-semibold]">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortableMenu;
