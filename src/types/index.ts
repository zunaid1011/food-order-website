export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'starters' | 'main' | 'desserts' | 'drinks';
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface UserDetails {
  name: string;
  phone: string;
  address: string;
}