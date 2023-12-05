import { CartProduct } from "@/types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { getFinalPrice, sumAmountOfProducts, sumTotalPrice } from "../helpers";
import { showCurrency } from "@/helpers";

type CartSummaryProps = {
  products: CartProduct[];
};

export default function CartSummary(props: CartSummaryProps): JSX.Element {
  return (
    <section className="col-span-1">
      <div className="border-2 px-5 py-3 border-gray-300 rounded-lg">
        <details className="hover:cursor-pointer py-1 duration-700">
          <summary className="flex justify-between bg-inherit text-lg">
            <span className="font-light">
              {`Artículos comprados: ${sumAmountOfProducts(props.products)}`}
            </span>
            <span className="font-semibold text-color3">
              {`${showCurrency(sumTotalPrice(props.products))} COP`}
            </span>
          </summary>
          <section className="mx-[5%]">
            <ul className="divide-y-2 divide-gray-200 py-1">
              {props.products &&
                props.products.map((product) => (
                  <li
                    key={product.id}
                    className="flex flex-row justify-between py-0.5"
                  >
                    <span className="font-light text-md">
                      {product.name + ` (${product.pivot.orderedQuantity})`}
                    </span>
                    <span className="font-semibold text-sm text-color4">
                      {`${showCurrency(
                        product.pivot.orderedQuantity * product.price
                      )} COP`}
                    </span>
                  </li>
                ))}
              <li className="flex flex-row justify-between py-0.5">
                <span className="font-semibold text-md">{`Total`}</span>
                <span className="font-semibold text-sm text-orange-500">
                  {`${showCurrency(sumTotalPrice(props.products))} COP`}
                </span>
              </li>
            </ul>
          </section>
        </details>
        <div className="flex justify-between text-lg py-1">
          <span className="font-light">Coste de envio</span>
          <span className="font-semibold text-color3">
            {showCurrency(sumTotalPrice(props.products) * 0.07) + " COP"}
          </span>
        </div>
        <div className="flex justify-between text-lg py-1">
          <span className="font-light">{`Impuestos (IVA)`}</span>
          <span className="font-semibold text-color3">
            {showCurrency(sumTotalPrice(props.products) * 0.19) + " COP"}
          </span>
        </div>
        <div className="flex justify-between text-lg py-1 border-t-2 border-gray-100">
          <span className="font-light">Subtotal</span>
          <span className="font-semibold text-orange-500">
            {showCurrency(getFinalPrice(sumTotalPrice(props.products))) +
              " COP"}
          </span>
        </div>
        <button className="w-full flex items-center gap-2 justify-center text-md font-semibold text-white bg-color4 rounded-3xl py-3 mt-5">
          <ShoppingCartIcon sx={{ fontSize: 20 }} />
          Realizar pedido
        </button>
      </div>
    </section>
  );
}
