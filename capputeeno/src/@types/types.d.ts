export interface Product {
  image_url: string;
  name: string;
  sales: number;
  price_in_cents: string;
  created_at: string;
}

export type TabType = 'all' | 't-shirts' | 'mugs';
