import { ActionTypes } from "../contants/actionTypes";
import { useDispatch } from "react-redux";
const initialState = {
  products: [],
  category: [],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload, category: action.payload };

    case ActionTypes.SET_CATEGORY:
      console.log(action.payload);
      if (action.payload === "all") {
        return { ...state, category: state.products };
      }
      const products_menu = state.products.filter(
        (item) => item.category === action.payload
      );
      return { ...state, category: products_menu };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

const initialCartState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};
export const setAddToCartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ActionTypes.SET_ADD_TO_CART:
      let cartString = localStorage.getItem("cart");
      const { product, amount } = action.payload;
      const { id, title, image, price } = product;
      const finalProduct = {
        id,
        price,
        title,
        image,
        amount,
        total: amount * price,
      };
      let products = [];
      if (cartString) {
        products = JSON.parse(cartString);
      }
      const exist = products.find((item) => item.id == product.id);
      if (exist) {
        exist.amount = exist.amount + amount;
        exist.total = exist.total + amount * price;
        localStorage.setItem("cart", JSON.stringify(products));
        return { ...state, cart: products };
      } else {
        products.push(finalProduct);
        localStorage.setItem("cart", JSON.stringify(products));
        return { ...state, cart: products };
      }
    case ActionTypes.CLEAR_CART:
      localStorage.removeItem("cart");
      localStorage.removeItem("totalAmount");
      return { ...state, cart: [], totalAmount: [] };
    case ActionTypes.REMOVE_ITEM:
      const { filterItem, item } = action.payload;
      localStorage.setItem("cart", JSON.stringify(filterItem));
      return {
        ...state,
        cart: filterItem,
      };
    case ActionTypes.TOGGLE_AMOUNT:
      const { item_id, toggle } = action.payload;
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      const exist_item = cartItems.find((item) => item.id == item_id);
      if (toggle == "desc") {
        exist_item.amount = exist_item.amount - 1;
        exist_item.total = exist_item.total - exist_item.price;
      } else {
        exist_item.amount = exist_item.amount + 1;
        exist_item.total = exist_item.total + exist_item.price;
      }
      localStorage.setItem("cart", JSON.stringify(cartItems));
      return {
        ...state,
        cart: cartItems,
      };
    default:
      return state;
  }
};
