'use client'
import useSWR from 'swr';
import { fetchStockData } from '../api/Index/routes';



interface StockData {
  c: number; // Current price
  d: number; // Change
  dp: number; // Percent change
  h: number; // High price of the day
  l: number; // Low price of the day
  o: number; // Open price of the day
  pc: number; // Previous close price
}

const fetcher = (symbol: string) => fetchStockData(symbol);

interface StockResult {
  stockData?: StockData;
  isLoading: boolean;
  isError: boolean;
}

const useStockData = (symbols: string[]): StockResult[] => {
  return symbols.map((symbol) => {
    const { data, error } = useSWR<StockData>(symbol, fetcher, { refreshInterval: 60000 });
    return {
      stockData: data,
      isLoading: !error && !data,
      isError: !!error,
    };
  });
};

export default useStockData;
