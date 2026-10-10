"use client";

import { useState } from 'react';

export default function Home() {
  const [dark, setDark] = useState(true);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Discover <span className="text-yellow-400">Web3</span> Dapps
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore the best decentralized applications built on Base, Ethereum, and more.
              Connect your wallet to discover, vote, and earn.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="/dapps"
                className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold px-8 py-3 rounded-lg transition"
              >
                Browse Dapps
              </a>
              <a
                href="/wallet"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg transition border border-white/20"
              >
                Connect Wallet
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-yellow-400">50+</p>
              <p className="text-gray-400 text-sm">Dapps Listed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-400">10K+</p>
              <p className="text-gray-400 text-sm">Active Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-400">$2M+</p>
              <p className="text-gray-400 text-sm">TVL Locked</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Trending Dapps</h2>
            <p className="text-gray-400 mt-2">Popular decentralized applications for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Sunshine', category: 'Yield', tvl: '$150K', color: 'from-amber-400 to-orange-500' },
              { name: 'Shib Whale', category: 'Gaming', tvl: '$120K', color: 'from-sky-400 to-blue-500' },
              { name: 'Everclear', category: 'Bridge', tvl: '$95K', color: 'from-emerald-400 to-teal-500' },
              { name: 'Bridge', category: 'Bridge', tvl: '$80K', color: 'from-purple-400 to-pink-500' },
              { name: 'Lido', category: 'Staking', tvl: '$200K', color: 'from-gray-400 to-gray-500' },
              { name: 'Synthetix', category: 'Derivatives', tvl: '$300K', color: 'from-red-400 to-pink-500' },
            ].map((dapp, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30 hover:border-yellow-500/50 transition">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${dapp.color} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                  {dapp.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold">{dapp.name}</h3>
                <p className="text-sm text-gray-400">{dapp.category}</p>
                <p className="text-yellow-400 font-semibold mt-2">{dapp.tvl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to explore Web3?</h2>
          <p className="text-gray-400 mb-8">
            Connect your wallet and start using decentralized applications today.
          </p>
          <a
            href="/wallet"
            className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold px-8 py-3 rounded-lg transition"
          >
            Connect Wallet
          </a>
        </div>
      </section>
    </div>
  );
}
