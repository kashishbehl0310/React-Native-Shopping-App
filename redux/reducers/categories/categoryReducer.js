import {
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS
} from "./categoryActionTypes";

const initialState = {
  categories: [],
  error: "",
  loading: false
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        categories: []
      }
    case FETCH_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false,
        categories: action.payload
      }
    default:
      return {
        ...state
      }
  }
}
