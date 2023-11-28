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
  category: Category
  product_type: ProductType
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
  Category,
  ProductType,
  Customer,
  NewUser,
  AuthUser,
  User,
  Filters,
  CartProduct
};
