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
    { name: 'GitHub', url: 'https://github.com/elnaggarx', icon: '🔗' },
    { name: 'Instagram', url: 'https://www.instagram.com/elnaggarx?igsh=enozdzNqMGNpanF4&utm_source=qr', icon: '📷' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mohamed-elnaggarx?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', icon: '💼' },
  ];

  // Navigation links
  const navLinks = [
    {name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Say Hello', href: '/contact', special: true },
  ];

  return (
    <div className="fixed top-4 right-4 md:top-8 md:right-8 z-50">
      {/* Menu Button — always visible on mobile (since desktop nav is hidden); on md+ it appears only after scroll */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-[#0f1a22] text-white p-3 rounded-lg hover:bg-[#1a2633] transition-all ease-in-out duration-400 shadow-lg ${showMenuButton ? 'opacity-100 visible' : 'opacity-100 visible md:opacity-0 md:invisible'}`}
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
        className={`absolute top-0 right-0 bg-white shadow-2xl rounded-3xl md:rounded-4xl overflow-hidden transition-all duration-300 ease-out transform w-[88vw] sm:w-[60vw] md:w-[50vw] mt-15 ${
          isOpen
            ? 'translate-x-0 opacity-100 visible'
            : 'translate-x-full opacity-0 invisible'
        }`}
      >
        {/* Navigation Links */}
        <div className="border-b border-[#e5e7eb]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-5 md:px-6 py-4 md:py-6 text-2xl md:text-3xl lg:text-4xl font-[bomstad-semibold] transition ${
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
        <div className="px-5 md:px-6 py-5 md:py-6">
          <p className="text-xs font-[bomstad-semibold] text-[#6e6e73] uppercase mb-3">
            Follow
          </p>
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex flex-col items-center gap-2 rounded-xl bg-[#f7f8fa] hover:bg-[#0f1a22] hover:text-white text-[#0f1a22] transition p-3 md:p-4"
                title={social.name}
              >
                <span className="text-2xl md:text-3xl">{social.icon}</span>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-[bomstad-semibold]">
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
