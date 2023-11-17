import { useProductLogic } from "../products/ProductLogic";

export default function Product ():JSX.Element{
    const {
        filteredProducts,
      } = useProductLogic();
    return(
        <div className="w-full lg:w-3/4 p-4 flex-grow overflow-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((producto, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <img
                src={`https://source.unsplash.com/random?sig=${index}`}
                alt={producto.tipo_producto}
                className="w-full h-64 object-cover mb-2 rounded"
              />
              <h2 className="text-lg font-bold mb-2">{producto.tipo_producto}</h2>
              <p>Categoría: {producto.category}</p>
              <p>Precio: ${producto.price}</p>
              <p>Cantidad: {producto.quantity}</p>
            </div>
          ))}
        </div>
      </div>

    );

}