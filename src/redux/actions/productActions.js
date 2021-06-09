import { ActionTypes } from "../contants/actionTypes";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const seelectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const setAddToCart = (product) => {
  return {
    type: ActionTypes.SET_ADD_TO_CART,
    payload: product,
  };
};

export const setClearCart = () => {
  return {
    type: ActionTypes.CLEAR_CART,
  };
};

export const setRemoveItem = (item) => {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: item,
  };
};

export const setToggleAmount = (item) => {
  return {
    type: ActionTypes.TOGGLE_AMOUNT,
    payload: item,
  };
};

export const setCategory = (category) => {
  return {
    type: ActionTypes.SET_CATEGORY,
    payload: category,
  };
};
