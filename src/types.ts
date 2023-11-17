type Product = {
  id?: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: number |{
    id: number;
    category_name: string;
  };
  product_type: number | {
    id: number;
    product_type_name: string;
  };
  img: string;
  created_at?: string;
  updated_at?: string;
};

type Category = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

type ProductType = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

type Client = {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  status: string;
}

export type { Product, Category, ProductType, Client };