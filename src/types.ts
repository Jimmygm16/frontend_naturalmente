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
  product_name: string;
  product_description: string;
  price: number;
  quantity: number;
  product_category: Category
  product_type: ProductType
  img: string;
  created_at?: string;
  updated_at?: string;
};

type cartProduct = Product & {
  pivot: {
    user_id: number;
    product_id: number;
    id: number;
    orderedQuantity: number;
  }
}

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

type Filters = {
  searchTerm: string;
  categories: number[];
  productTypes: number[];
};

export type { 
  Product,
  NewUser,
  AuthUser,
  User,
  Category,
  ProductType,
  Filters,
  cartProduct
};