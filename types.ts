
export interface ConsultationOption {
  id: string;
  title: string;
  price: string;
  turnaround: string;
  inclusions: string[];
  exclusions: string[];
}

export interface ProductDetailSection {
  title: string;
  items: string[];
}

export interface Product {
  id: string;
  title: string;
  type: 'Free' | 'Paid';
  description: string;
  longDescription?: string;
  price?: string;
  tagline?: string;
  whatItIs?: string[];
  whatItIsNot?: string[];
  features?: string[];
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
}
