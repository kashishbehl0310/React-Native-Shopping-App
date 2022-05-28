import {
  ADD_TO_CART, CART_LOADING, FETCH_CART, REMOVE_FROM_CART
} from "./cartActionTypes";

export const addProductToCart = (item) => {
  return {
    type: ADD_TO_CART,
    product: item
  }
}

export const fetchCart = () => {
  return {
    type: FETCH_CART
  }
}

export const loadingCart = () => {
  return {
    type: CART_LOADING
  }
}

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    productId: id
  }
}