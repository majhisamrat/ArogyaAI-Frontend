'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeartIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const pathname = usePathname();

  // Normalize pathname by removing locale prefix if present (e.g., /hi/chat -> /chat)
  const normalizedPath = pathname ? pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '') : '';
  
  // Hide footer on authentication and chat pages, matching Navbar behavior
  const isAuthOrChatPage = 
    normalizedPath.startsWith('/sign-in') || 
    normalizedPath.startsWith('/sign-up') || 
    normalizedPath.startsWith('/register') ||
    normalizedPath.startsWith('/chat') ||
    normalizedPath.startsWith('/improved-chat');

  if (isAuthOrChatPage) return null;

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform">
                <HeartIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Arogya AI
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Your intelligent, multilingual healthcare companion providing 24/7 medical guidance and synchronized record support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-slate-850 dark:text-slate-200 uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-sm text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-bold text-slate-850 dark:text-slate-200 uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <span className="font-semibold text-slate-700 dark:text-slate-350">Email:</span> support@arogyaai.com
              </li>
              <li>
                <span className="font-semibold text-slate-700 dark:text-slate-350">Address:</span> West Bengal, India, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 dark:text-slate-500">
                    Copyright © 2026 Arogya AI. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs text-slate-400 dark:text-slate-500">
            <Link href="/docs" className="hover:text-teal-600 transition-colors">Privacy Policy</Link>
            <span>&bull;</span>
            <Link href="/docs" className="hover:text-teal-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
