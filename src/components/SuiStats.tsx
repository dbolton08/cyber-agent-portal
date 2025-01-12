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
  // In a real implementation, this would fetch from suivision.xyz API
  // For now, we'll use simulated data that updates slightly on each fetch
  const basePrice = 1.23;
  const now = Date.now();
  const priceHistory = Array.from({ length: 24 }, (_, i) => ({
    timestamp: now - (23 - i) * 3600000,
    price: basePrice + Math.sin(i / 4) * 0.1 + Math.random() * 0.05
  }));

  return {
    totalStake: "7.81B SUI",
    epoch: "640",
    marketCap: "$14,445,932,839",
    tps: "46 (195)",
    validators: "108",
    priceHistory
  };
};

const SuiStats = () => {
  const { translations } = useLanguage();
  
  const { data, isLoading } = useQuery({
    queryKey: ['suiStats'],
    queryFn: fetchSuiStats,
    refetchInterval: 30000 // Refetch every 30 seconds
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
              tickFormatter={(timestamp) => new Date(timestamp).toLocaleTimeString()}
              stroke="#00FF41"
            />
            <YAxis stroke="#00FF41" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#0D0208', 
                border: '1px solid #00FF41',
                borderRadius: '4px'
              }}
              labelFormatter={(label) => new Date(label).toLocaleString()}
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