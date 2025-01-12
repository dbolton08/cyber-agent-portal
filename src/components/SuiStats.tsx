import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useLanguage } from '@/contexts/LanguageContext';

interface SuiStats {
  totalStake: string;
  epoch: string;
  marketCap: string;
  tps: string;
  validators: string;
  priceHistory: { timestamp: number; price: number }[];
}

const fetchSuiStats = async (): Promise<SuiStats> => {
  try {
    // Using 7 days of data without specifying interval (will automatically get appropriate intervals)
    const response = await fetch('https://api.coingecko.com/api/v3/coins/sui/market_chart?vs_currency=usd&days=7');
    const data = await response.json();
    
    // Format price data from CoinGecko
    const priceHistory = data.prices.map(([timestamp, price]: [number, number]) => ({
      timestamp,
      price: Number(price.toFixed(3))
    }));

    // Fetch current SUI network stats
    const statsResponse = await fetch('https://api.suivision.xyz/api/network/stats');
    const statsData = await statsResponse.json();

    return {
      totalStake: `${(Number(statsData.totalStake) / 1e9).toFixed(2)}B SUI`,
      epoch: statsData.epoch.toString(),
      marketCap: new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD',
        maximumFractionDigits: 0
      }).format(statsData.marketCap),
      tps: `${statsData.tps} (${statsData.peakTps})`,
      validators: statsData.validators.toString(),
      priceHistory
    };
  } catch (error) {
    console.error('Error fetching SUI stats:', error);
    // Fallback data in case of API failure
    return {
      totalStake: "7.81B SUI",
      epoch: "640",
      marketCap: "$1,445,932,839",
      tps: "46 (195)",
      validators: "108",
      priceHistory: []
    };
  }
};

const SuiStats = () => {
  const { translations } = useLanguage();
  
  const { data, isLoading } = useQuery({
    queryKey: ['suiStats'],
    queryFn: fetchSuiStats,
    refetchInterval: 30000
  });

  if (isLoading || !data) {
    return (
      <div className="cyber-panel p-6 animate-pulse">
        <div className="h-40 bg-matrix-green/10 rounded" />
      </div>
    );
  }

  return (
    <div className="cyber-panel p-6 space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="cyber-panel p-4">
          <h3 className="text-matrix-light text-sm mb-2">{translations.totalStake}</h3>
          <p className="text-xl font-mono">{data.totalStake}</p>
        </div>
        <div className="cyber-panel p-4">
          <h3 className="text-matrix-light text-sm mb-2">{translations.epoch}</h3>
          <p className="text-xl font-mono">{data.epoch}</p>
        </div>
        <div className="cyber-panel p-4">
          <h3 className="text-matrix-light text-sm mb-2">{translations.marketCap}</h3>
          <p className="text-xl font-mono">{data.marketCap}</p>
        </div>
        <div className="cyber-panel p-4">
          <h3 className="text-matrix-light text-sm mb-2">{translations.tps}</h3>
          <p className="text-xl font-mono">{data.tps}</p>
        </div>
        <div className="cyber-panel p-4">
          <h3 className="text-matrix-light text-sm mb-2">{translations.validators}</h3>
          <p className="text-xl font-mono">{data.validators}</p>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data.priceHistory}>
            <XAxis 
              dataKey="timestamp"
              tickFormatter={(timestamp) => {
                const date = new Date(timestamp);
                return `${date.getMonth() + 1}/${date.getDate()}`;
              }}
              stroke="#00FF41"
            />
            <YAxis 
              stroke="#00FF41"
              domain={['auto', 'auto']}
              tickFormatter={(value) => `$${value.toFixed(2)}`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#0D0208', 
                border: '1px solid #00FF41',
                borderRadius: '4px'
              }}
              labelFormatter={(label) => new Date(label).toLocaleString()}
              formatter={(value: number) => [`$${value.toFixed(3)}`, 'Price']}
            />
            <Line 
              type="monotone" 
              dataKey="price" 
              stroke="#00FF41"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SuiStats;