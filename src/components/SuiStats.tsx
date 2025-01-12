import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from "@/components/ui/use-toast";

interface SuiStats {
  totalStake: string;
  epoch: string;
  marketCap: string;
  tps: string;
  validators: string;
}

const fetchSuiStats = async (): Promise<SuiStats> => {
  // Using static data since external APIs are unreliable
  return {
    totalStake: "7.81B SUI",
    epoch: "640",
    marketCap: "$1,445,932,839",
    tps: "46 (195)",
    validators: "108",
  };
};

const SuiStats = () => {
  const { translations } = useLanguage();
  const { toast } = useToast();
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['suiStats'],
    queryFn: fetchSuiStats,
    refetchInterval: 30000
  });

  useEffect(() => {
    if (error) {
      toast({
        title: translations.errors.error,
        description: translations.errors.errorFetchingData,
        variant: "destructive"
      });
    }
  }, [error, toast, translations]);

  if (isLoading || !data) {
    return (
      <div className="cyber-panel p-6 animate-pulse">
        <div className="h-40 bg-matrix-green/10 rounded" />
      </div>
    );
  }

  return (
    <div className="cyber-panel p-6">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="cyber-panel p-4">
          <h3 className="text-matrix-light text-sm mb-2">{translations.errors.totalStake}</h3>
          <p className="text-xl font-mono">{data.totalStake}</p>
        </div>
        <div className="cyber-panel p-4">
          <h3 className="text-matrix-light text-sm mb-2">{translations.errors.epoch}</h3>
          <p className="text-xl font-mono">{data.epoch}</p>
        </div>
        <div className="cyber-panel p-4">
          <h3 className="text-matrix-light text-sm mb-2">{translations.errors.marketCap}</h3>
          <p className="text-xl font-mono">{data.marketCap}</p>
        </div>
        <div className="cyber-panel p-4">
          <h3 className="text-matrix-light text-sm mb-2">{translations.errors.tps}</h3>
          <p className="text-xl font-mono">{data.tps}</p>
        </div>
        <div className="cyber-panel p-4">
          <h3 className="text-matrix-light text-sm mb-2">{translations.errors.validators}</h3>
          <p className="text-xl font-mono">{data.validators}</p>
        </div>
      </div>
    </div>
  );
};

export default SuiStats;