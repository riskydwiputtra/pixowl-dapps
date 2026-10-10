"use client";

import { useState } from 'react';

interface Dapp {
  id: number;
  name: string;
  category: string;
  tvl: string;
  address: string;
  iconColor: string;
}

const dapps: Dapp[] = [
  { id: 1, name: 'Sunshine', category: 'Yield Farming', tvl: '$150K', address: '0x1234...', iconColor: 'from-amber-400 to-orange-500' },
  { id: 2, name: 'Shib Whale', category: 'Gaming', tvl: '$120K', address: '0x5678...', iconColor: 'from-sky-400 to-blue-500' },
  { id: 3, name: 'Everclear', category: 'Bridge', tvl: '$95K', address: '0x9ABC...', iconColor: 'from-emerald-400 to-teal-500' },
  { id: 4, name: 'BridgeX', category: 'Bridge', tvl: '$80K', address: '0xDEF0...', iconColor: 'from-purple-400 to-pink-500' },
  { id: 5, name: 'Lido', category: 'Staking', tvl: '$200K', address: '0x1122...', iconColor: 'from-gray-400 to-gray-500' },
  { id: 6, name: 'Synthetix', category: 'Derivatives', tvl: '$300K', address: '0x3344...', iconColor: 'from-red-400 to-pink-500' },
];

export default function DappsPage() {
  const [search, setSearch] = useState('');

  const filtered = dapps.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dapps</h1>
            <p className="text-gray-400 mt-1">Browse and discover decentralized applications</p>
          </div>
          <div className="mt-4 sm:mt-0 relative">
            <input
              type="text"
              placeholder="Search dapps..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-64 bg-white/10 border border-white/20 rounded-lg pl-4 pr-12 text-sm focus:outline-none focus:border-yellow-500"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-gray-400 text-center py-8">No dapps found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dapp) => (
              <div key={dapp.id} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30 hover:border-yellow-500/50 transition">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${dapp.iconColor} flex items-center justify-center text-white font-bold text-lg`}>
                    {dapp.name.charAt(0)}
                  </div>
                  <span className="text-xs bg-white/10 rounded-full px-2 py-1">{dapp.category}</span>
                </div>
                <h3 className="text-lg font-semibold mt-4">{dapp.name}</h3>
                <p className="text-sm text-gray-400">{dapp.address}</p>
                <p className="text-yellow-400 font-semibold mt-2">{dapp.tvl}</p>
                <button className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold px-4 py-2 rounded-lg text-sm transition">
                  Open
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
