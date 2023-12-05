type Category = {
  id: number;
  name: string;
}

type ProductType = {
  id: number;
  name: string;
}

type Product = {
  id?: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: Category | number;
  product_type: ProductType | number;
  img: string;
  created_at?: string;
  updated_at?: string;
};

type CartProduct = Product & {
  pivot: {
    user_id: number;
    product_id: number;
    id: number;
    orderedQuantity: number;
  }
}

type Customer = {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  address: string;
  status: string;
  profile_image: string;
}

type UserType = {
  id: number;
  type_name: string;
}

type NewUser = {
  name: string;
  lastName?: string;
  email: string;
  password: string;
  phone_number: string,
  address: string
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

type Filters = {
  searchTerm: string;
  categories: number[];
  productTypes: number[];
};

type Sell ={
  id: number;
  user_id: number;
  total_price: number;
  status: string;
  created_at: string;
  updated_at: string;
  products: Product[];
}

export type {
  Product,
  Category,
  ProductType,
  Customer,
  NewUser,
  AuthUser,
  User,
  Filters,
  CartProduct,
  Sell
};
