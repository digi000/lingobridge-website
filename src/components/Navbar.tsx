"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow-sm border-b border-slate-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/large-logo.png"
                alt="Lingora Logo"
                width={250}
                height={80}
                className="object-contain w-[180px] sm:w-[220px] md:w-[250px] h-auto transition-transform duration-300 hover:scale-[1.02]"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 text-blue-900 font-medium">
            <Link href="/about" className="hover:text-blue-600 transition-colors duration-200 py-2">
              About Us
            </Link>
            <Link href="/services" className="hover:text-blue-600 transition-colors duration-200 py-2">
              Services
            </Link>
            <Link href="/request" className="hover:text-blue-600 transition-colors duration-200 py-2">
              Request an Interpreter
            </Link>
            <Link href="/careers" className="hover:text-blue-600 transition-colors duration-200 py-2">
              Join Our Team
            </Link>
            <Link href="/faq" className="hover:text-blue-600 transition-colors duration-200 py-2">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors duration-200 py-2">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-blue-900 hover:text-blue-600 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                // Close SVG Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger SVG Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-lg text-base font-medium text-blue-900 hover:text-blue-600 hover:bg-slate-50 transition-colors duration-150"
          >
            About Us
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-lg text-base font-medium text-blue-900 hover:text-blue-600 hover:bg-slate-50 transition-colors duration-150"
          >
            Services
          </Link>
          <Link
            href="/request"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-lg text-base font-medium text-blue-900 hover:text-blue-600 hover:bg-slate-50 transition-colors duration-150"
          >
            Request an Interpreter
          </Link>
          <Link
            href="/careers"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-lg text-base font-medium text-blue-900 hover:text-blue-600 hover:bg-slate-50 transition-colors duration-150"
          >
            Join Our Team
          </Link>
          <Link
            href="/faq"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-lg text-base font-medium text-blue-900 hover:text-blue-600 hover:bg-slate-50 transition-colors duration-150"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-lg text-base font-medium text-blue-900 hover:text-blue-600 hover:bg-slate-50 transition-colors duration-150"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
