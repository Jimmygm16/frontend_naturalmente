import { showCurrency } from "@/helpers";
import { CartProduct } from "@/types";
import { countTotalProducts, sumTotalPrice } from "../../helpers";

type BuySummaryProps = {
  products: CartProduct[];
};

export default function BuySummary(props: BuySummaryProps): JSX.Element {
  return (
    <details className="cursor-pointer mt-3 duration-300 bg-gray-100 rounded-lg hover:shadow-md">
      <summary
        className="flex items-center justify-between bg-gray-200 text-lg px-6 py-2 cursor-pointer rounded-t-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="font-semibold">{`Artículos comprados: ${
          props.products ? countTotalProducts(props.products) : 0
        }`}</span>
        {props.products && (
          <span className="text-xl font-semibold text-orange-500">
            {`${showCurrency(sumTotalPrice(props.products))}`}
          </span>
        )}
      </summary>
      <section className="px-[3%] py-2 bg-white rounded-b-lg">
        <ul className="divide-y divide-gray-300">
          {props.products &&
            props.products.map((product) => (
              <li
                key={product.id}
                className="flex items-center justify-between py-0.5"
              >
                <span className="text-md font-light">
                  {`${product.name} (${product.pivot.orderedQuantity})`}
                </span>
                <span className="font-semibold text-sm text-green-700">
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
  );
}
