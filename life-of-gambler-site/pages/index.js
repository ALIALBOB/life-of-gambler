import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black to-zinc-900 text-white px-6 py-10 flex flex-col gap-16 items-center">
      <section className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Life of Gambler
        </h1>
        <p className="mt-4 text-lg text-zinc-300">
          The meme coin that bets on vibes, not odds. Embrace the gamble, embrace the gains.
        </p>
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <button className="text-lg px-6 py-3 rounded-full bg-white text-black">Buy Now</button>
          <button className="text-lg px-6 py-3 rounded-full border border-white text-white">Join Telegram</button>
        </div>
      </section>

      <section className="max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-4">Tokenomics</h2>
        <p className="text-zinc-400">
          Total Supply: 1,000,000,000 $LOFG<br />
          50% Burned · 30% Liquidity · 10% CEX Listings · 10% Dev Wallet
        </p>
      </section>

      <section className="text-center max-w-4xl">
        <h2 className="text-3xl font-bold mb-4">How to Buy</h2>
        <ol className="text-zinc-400 space-y-2">
          <li>1. Copy the $LOFG token address</li>
          <li>2. Go to Raydium, Uniswap, or Pump.fun</li>
          <li>3. Paste address, swap, and HOLD with diamond hands 💎</li>
        </ol>
      </section>

      <footer className="mt-24 text-zinc-500 text-sm text-center">
        Contract: 0x123...abc · Not Financial Advice · For entertainment only 🃏
      </footer>
    </main>
  );
}