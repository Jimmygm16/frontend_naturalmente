import { Category, ProductType, Product } from "@/types"

const filteredProducts = (products: Product[], search: string) => {
  return products.filter((producto) =>
    producto.product_name.toLowerCase().includes(search.toLowerCase())
  );
}

export {
  filteredProducts,
};
