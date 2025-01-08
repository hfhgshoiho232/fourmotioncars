export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  color: string;
  images: string[];
  features: string[];
  description: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
}

export interface FilterOptions {
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  transmission?: string;
  fuelType?: string;
}