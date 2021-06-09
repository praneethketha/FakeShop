import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  setAddToCartReducer,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cart: setAddToCartReducer,
});

export default reducers;
