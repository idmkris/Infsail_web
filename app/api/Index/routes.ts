// lib/api.ts
import axios from 'axios';

const API_KEY = 'cqma0f9r01qoqqs835b0cqma0f9r01qoqqs835bg';
const BASE_URL = 'https://finnhub.io/api/v1';

interface StockData {
  c: number; // Current price
  d: number; // Change
  dp: number; // Percent change
  h: number; // High price of the day
  l: number; // Low price of the day
  o: number; // Open price of the day
  pc: number; // Previous close price
}

export const fetchStockData = async (symbol: string): Promise<StockData> => {
  const url = `${BASE_URL}/quote?symbol=${symbol}&token=${API_KEY}`;
  const response = await axios.get<StockData>(url);
  return response.data;
};
