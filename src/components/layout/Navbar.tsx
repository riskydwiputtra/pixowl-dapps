"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
            <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l3-7z" />
            </svg>
            <span>PixOwl</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/dapps" className="text-gray-300 hover:text-white transition px-3 py-2 text-sm font-medium">
              DApps
            </Link>
            <Link href="/wallet" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold transition">
              Connect Wallet
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
