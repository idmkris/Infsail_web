// components/Index.tsx
import React from 'react';

interface IndexProps {
  symbol: string;
  price: number | undefined;
  change: number | undefined;
}

const Index: React.FC<IndexProps> = ({ symbol, price, change }) => {
  return (
    <div className="flex justify-between p-4 bg-gray-100 border border-gray-200 rounded-md">
      <span className="font-medium">{symbol}</span>
      {price !== undefined && change !== undefined ? (
        <>
          <span className="font-semibold">{price.toFixed(2)}</span>
          <span className={`font-semibold ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {change > 0 ? `+${change}` : change}
          </span>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default Index;


