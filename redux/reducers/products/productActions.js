import products from "../../../data/products";
import { FETCH_PRODUCTS, PRODUCTS_LOADING, FETCH_SINGLE_PRODUCT, PRODUCTS_ERROR } from "./productActionTypes"

export const fetchProducts = () => {
  // return async (dispatch) => {
  //   dispatch({
  //     type: PRODUCTS_LOADING
  //   });
  //   try {
  //     dispatch({
  //       type: FETCH_PRODUCTS,
  //       products: products
  //     })
  //   } catch (err) {
  //     dispatch({
  //       type: PRODUCTS_ERROR
  //     })
  //   }
  // }
  return {
    type: FETCH_PRODUCTS,
    products: products
  }
}

export const fetchSingleProduct = (productId) => {
  const fetchedProduct = products.filter(p => p.id === productId);
  let toReturn;
  if (fetchedProduct && fetchedProduct.length > 0) {
    toReturn = {
      type: FETCH_SINGLE_PRODUCT,
      product: fetchedProduct[0]
    }
  } else {
    toReturn = {
      type: PRODUCTS_ERROR,
      error: "Error fetching product"
    }
  }
  return toReturn;
}

export const loadingProducts = () => {
  return {
    type: PRODUCTS_LOADING
  }
}