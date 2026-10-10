"use client";

import { useState } from 'react';

export default function WalletPage() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState('');

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAddress(accounts[0]);
        setConnected(true);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('Please install MetaMask or a Web3 wallet.');
    }
  };

  const disconnectWallet = () => {
    setAddress('');
    setConnected(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center py-12">
      <div className="max-w-md w-full bg-slate-800/50 border border-slate-700/30 rounded-xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Connect Wallet</h1>

        {!connected ? (
          <button
            onClick={connectWallet}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold py-3 rounded-lg transition"
          >
            Connect Wallet
          </button>
        ) : (
          <div className="text-center">
            <p className="text-gray-300 mb-2">Connected</p>
            <p className="font-mono text-sm text-yellow-400 break-all">{address}</p>
            <button
              onClick={disconnectWallet}
              className="mt-4 bg-red-500/20 text-red-400 hover:bg-red-500/30 px-4 py-2 rounded-lg transition"
            >
              Disconnect
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
