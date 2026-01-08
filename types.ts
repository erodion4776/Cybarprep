
export interface ConsultationOption {
  id: string;
  title: string;
  price: string;
  turnaround: string;
  inclusions: string[];
  exclusions: string[];
}

export interface Product {
  id: string;
  title: string;
  type: 'Free' | 'Paid';
  description: string;
  price?: string;
  tagline?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
}
