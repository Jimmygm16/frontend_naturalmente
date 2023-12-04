import { Category, ProductType, Product } from "@/types"

const filteredProducts = (products: Product[], search: string) => {
  return products.filter((producto) =>
    producto.name.toLowerCase().includes(search.toLowerCase())
  );
}

export {
  filteredProducts,
};
