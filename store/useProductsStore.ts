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

export interface TopItem {
  id: number;
  brand: string;
  title: string;
  price: number;
  oldPrice: number;
  discount: string;
  rating: number;
  reviews: number;
  image: string;
}

export interface ProductPrice {
  current: number;
  old: number;
  discount: string;
}

export interface Product {
  id: number;
  title: string;
  subtitle: string;
  brand: string;
  model: string;
  style: string;
  color: string;
  size: string[];
  rating: number;
  reviews: number;
  price: ProductPrice;
  image: string;
}

interface ProductsState {
  FleshSales: FlashSaleItem[];
  Trending: trendingItem[];
  Top100: TopItem[];
  Products: Product[];
  fetchFleshSales: () => Promise<void>;
  fetchTranding: () => Promise<void>;
  fetchTops: () => Promise<void>;
  fetchProducts: () => Promise<void>;
}

export const useProductsStore = create<ProductsState>((set, get) => ({
  FleshSales: [],
  Trending: [],
  Top100: [],
  Products: [],

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

  fetchTops: async () => {
    try {
      const res = await fetch(
        'https://6734d2605995834c8a90ffac.mockapi.io/flashSales',
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const data = await res.json();

      set({ Top100: data[0].top100 });

      if (!res.ok) throw new Error('Failed to fetch');
    } catch (error) {
      console.error('fetch error:', error);
    }
  },

  fetchProducts: async () => {
    try {
      const res = await fetch(
        'https://6734d2605995834c8a90ffac.mockapi.io/flashSales',
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const data = await res.json();

      set({ Products: data[0].products });

      if (!res.ok) throw new Error('Failed to fetch');
    } catch (error) {
      console.error('fetch error:', error);
    }
  },
}));
