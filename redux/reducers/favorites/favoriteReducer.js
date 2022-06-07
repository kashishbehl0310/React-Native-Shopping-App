import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  FETCH_FAVORITES,
  FAVORITES_LOADING
} from "./favoriteActionTypes";

const initialState = {
  favorites: [],
  isLoading: true
}

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      state.favorites.push({
        ...action.payload,
        favorite_at: new Date()
      })
      return {
        ...state
      }
    case REMOVE_FROM_FAVORITES:
      const id = action.payload;
      const newList = state.favorites.filter((item) => item.id !== id);
      return {
        ...state,
        favorites: newList
      }
    case FETCH_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites],
        isLoading: false
      }
    case FAVORITES_LOADING:
      return {
        ...state,
        isLoading: true
      }
    default:
      return {
        ...state
      }
  }
}