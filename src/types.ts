type Product = {
  id: number;
  product_name: string;
  product_description: string;
  price: number;
  quantity: number;
  category: {
    id: number;
    category_name: string;
  };
  product_type: {
    id: number;
    product_type_name: string;
  };
  img: string;
  created_at?: string;
  updated_at?: string;
};

type NewUser = {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export type { 
  Product,
  NewUser 
};