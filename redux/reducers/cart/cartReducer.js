import copyObject from "../../../utils/copyObject";
import {
  ADD_TO_CART,
  CART_LOADING,
  FETCH_CART,
  REMOVE_FROM_CART
} from "./cartActionTypes";

const initialState = {
  cartItems: [],
  isLoading: false,
  cartQuantity: 0
}

const findIndex = (cartList, id) => {
  const index = cartList.findIndex((cart) => {
    return cart.id === id
  });
  return index;
}

const fetchTotal = (cartList) => {
  let total = 0;
  cartList.map(cart => {
    total = total + cart.quantity;
  })
  return total
}

export const CartReducer = (state = initialState, action) => {
  const cartList = copyObject(state.cartItems);
  switch(action.type) {
    case ADD_TO_CART:
      const productToAdd = action.product;
      if (cartList && cartList.length !== 0) {
        const index = findIndex(state.cartItems, productToAdd.id);
        if (index >=0) {
          cartList[index] = {
            ...productToAdd,
            quantity: cartList[index].quantity + 1
          }
        } else {
          cartList.push({
            ...productToAdd,
            quantity: 1
          });
        }
      } else {
        cartList.push({
          ...productToAdd,
          quantity: 1
        });
      }
      return {
        ...state,
        cartItems: [...cartList],
        cartQuantity: fetchTotal(cartList)
      }
    case REMOVE_FROM_CART:
      const productId = action.productId;
      const index = findIndex(cartList, productId);
      if (cartList[index].quantity - 1 === 0) {
        cartList.splice(index, 1);
      } else {
        cartList[index].quantity = cartList[index].quantity - 1;
      }
      return {
        ...state,
        isLoading: false,
        cartItems: [...cartList],
        cartQuantity: fetchTotal(cartList)
      }
    case CART_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_CART:
      return {
        ...state,
        isLoading: false,
        cartItems: [...state.cartItems]
      };
    default:
      return {
        ...state
      }
  }
}