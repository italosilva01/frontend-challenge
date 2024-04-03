export interface Product {
  image_url: string;
  name: string;
  sales: number;
  price_in_cents: string;
  created_at: string;
  id: string;
  description?: string;
  category?: TabType;
  quantity?: number;
}

export type TabType = 'all' | 't-shirts' | 'mugs';
