"use client";

import { useEffect, useState } from "react";

interface PriceData {
  usd: number;
  usd_24h_change: number;
}

export default function EthTicker() {
  const [price, setPrice] = useState<PriceData | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true",
          { cache: "no-store" }
        );
        if (!res.ok) return;
        const data = await res.json();
        if (!cancelled && data?.ethereum?.usd) {
          setPrice(data.ethereum);
        }
      } catch {
        // silent — ticker is decorative
      }
    }
    load();
    const id = setInterval(load, 60_000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  if (!price) {
    return (
      <span className="font-mono text-xs text-fog neon-pulse">
        ETH ▸ syncing…
      </span>
    );
  }

  const up = price.usd_24h_change >= 0;
  return (
    <span className="font-mono text-xs">
      <span className="text-fog">ETH ▸ </span>
      <span className={up ? "neon-green" : "neon-magenta"}>
        ${price.usd.toLocaleString(undefined, { maximumFractionDigits: 0 })}
      </span>
      <span className={`ml-1 ${up ? "text-neon-green" : "text-neon-magenta"}`}>
        {up ? "▲" : "▼"}
        {Math.abs(price.usd_24h_change).toFixed(1)}%
      </span>
    </span>
  );
}
