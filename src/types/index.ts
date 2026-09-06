export type Category = "Phones" | "Laptops" | "Gaming" | "Gadgets" | "Accessories";
export type Condition = "New" | "Premium Used";
export type Status = "In Stock" | "Low Stock" | "Sold Out";

export interface Product {
  id: string;
  name: string;
  category: Category;
  brand: string;
  condition: Condition;
  price: number;
  oldPrice?: number;
  status: Status;
  storage?: string;
  ram?: string;
  color?: string;
  batteryHealth?: string;
  network?: string;
  warranty?: string;
  description: string;
  whatsInBox: string[];
  specs: { label: string; value: string }[];
  images: string[];
  isDeal?: boolean;
  isNew?: boolean;
  createdAt: string; // ISO date, for "Newest" sort
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  rating: number;
}
