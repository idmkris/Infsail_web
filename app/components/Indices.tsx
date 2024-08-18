// components/StockBanners.tsx
'use client'
import React from 'react';
import Index from './Index';
import useStockData from '../hooks/useStockData';

interface IndicesProps {
  symbols: string[];
}

const Indices: React.FC<IndicesProps> = ({ symbols }) => {
  const results = useStockData(symbols);

  return (
    <div className="space-y-4">
      {results.map(({ stockData, isLoading, isError }, index) => {
        if (isLoading) return <div key={index}>Loading...</div>;
        if (isError) return <div key={index} className="text-red-500">Error loading data</div>;

        return (
          <Index
            key={symbols[index]}
            symbol={symbols[index]}
            price={stockData?.c}
            change={stockData?.d}
          />
        );
      })}
    </div>
  );
};

export default Indices;
