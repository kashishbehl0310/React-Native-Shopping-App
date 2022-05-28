import {
  FETCH_PRODUCTS,
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  FETCH_SINGLE_PRODUCT
} from "./productActionTypes";

const initialState = {
  products: [],
  isLoading: false,
  error: "",
  product: {}
};

export const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: "Error fetching folders"
      }
    case FETCH_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        error: "",
        products: [...action.products]
      }
    case FETCH_SINGLE_PRODUCT:
      return {
        ...state,
        isLoading: false,
        error: "",
        product: action.product
      }
    default:
      return {
        ...state
      }
  }
}