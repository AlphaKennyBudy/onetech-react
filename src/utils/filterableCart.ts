import { ProductType } from "../store/types";
import { Dispatch } from "redux";
import { setProductQuantity, setProductOrdered } from "../store/actions";
import { calculateTotal } from "./calculateTotal";

export function filterableCart(state: ProductType[], dispatch: Dispatch) {
  return state
    .filter(({ ordered }) => ordered)
    .map((product: ProductType) => {
      return {
        ...product,
        onChange: (payload: number) =>
          dispatch(setProductQuantity(product.id, payload)),
        onCancel: () => {
          dispatch(setProductOrdered(product.id, false));
          dispatch(setProductQuantity(product.id));
        },
        total: calculateTotal([product]),
      };
    });
}
