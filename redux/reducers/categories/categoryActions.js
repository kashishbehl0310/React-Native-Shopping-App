import { getCategories } from "../../../api";
import {
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS
} from "./categoryActionTypes";

export const fetchCategoriesRequest = () => {
  return {
    type: FETCH_CATEGORY_REQUEST
  }
}

export const fetchCategoriesError = (error) => {
  return {
    type: FETCH_CATEGORY_ERROR,
    payload: error
  }
}

export const fetchCategoriesSucces = (category) => {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    payload: category
  }
}

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch(fetchCategoriesRequest);
    getCategories((err, res) => {
      if (err) {
        console.log("errror ---------------------------")
        dispatch({
          type: FETCH_CATEGORY_ERROR,
          payload: err
        });
        return;
      }
      if (res.success && res.data && res.data.length > 0) {
        const resData = res.data[0];
        console.log({
          resData
        })
        dispatch({
          type: FETCH_CATEGORY_SUCCESS,
          payload: resData
        });
      } else {
        dispatch({
          type: FETCH_CATEGORY_ERROR,
          payload: "Error fetching categories"
        });
      }
    })
  }
}