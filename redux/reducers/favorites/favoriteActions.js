import {
  ADD_TO_FAVORITES,
  FAVORITES_LOADING,
  FETCH_FAVORITES,
  REMOVE_FROM_FAVORITES
} from "./favoriteActionTypes";

export const addToFavorites = (item) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: item
  }
}

export const removeFromFavorites = (id) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: id
  }
}

export const fetchFavorites = () => {
  return {
    type: FETCH_FAVORITES
  }
}

export const favoritesLoading = () => {
  return {
    type: FAVORITES_LOADING
  }
}