import { type } from "os";

type Product = {
  id?: number;
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
  lastName?: string;
  email: string;
  password: string;
}

type AuthUser = {
  email: string;
  password: string;
}

type User = {
  id: number;
  name: string;
  email: string;
  phone_number: string | null;
  status: string;
  profile_image: string | null;
  created_at?: string;
  updated_at?: string;
}

export type { 
  Product,
  NewUser,
  AuthUser,
  User
};