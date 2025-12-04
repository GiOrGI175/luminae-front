import { create } from 'zustand';

export interface FlashSaleItem {
  id: number;
  title: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  rating: number;
  dealEndTime: string;
}

export interface trendingItem {
  id: number;
  label: string;
  title: string;
  subtitle: string;
  price: number;
  image: string;
}

interface ProductsState {
  FleshSales: FlashSaleItem[];
  Trending: trendingItem[];
  fetchFleshSales: () => Promise<void>;
  fetchTranding: () => Promise<void>;
}

export const useProductsStore = create<ProductsState>((set, get) => ({
  FleshSales: [],
  Trending: [],

  fetchFleshSales: async () => {
    try {
      const res = await fetch(
        'https://6734d2605995834c8a90ffac.mockapi.io/flashSales',
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const data = await res.json();

      set({ FleshSales: data[0].flashSales });

      if (!res.ok) throw new Error('Failed to fetch');
    } catch (error) {
      console.error('fetch error:', error);
    }
  },

  fetchTranding: async () => {
    try {
      const res = await fetch(
        'https://6734d2605995834c8a90ffac.mockapi.io/flashSales',
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const data = await res.json();

      set({ Trending: data[0].trending });

      if (!res.ok) throw new Error('Failed to fetch');
    } catch (error) {
      console.error('fetch error:', error);
    }
  },
}));
