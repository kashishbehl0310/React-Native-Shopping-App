import React from "react";
import {
  SafeAreaView
} from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { applyMiddleware, combineReducers, createStore } from "redux";
import Navigation from "./navigation";
import {
  composeWithDevTools
} from "redux-devtools-extension";
import thunk from "redux-thunk";

import {
  productReducer,
  CartReducer,
  favoriteReducer,
  categoriesReducer
} from "./redux/reducers";
import {
  Provider
} from "react-redux";
// import { Provider } from "react-native/Libraries/Text/TextAncestor";

const rootReducer = combineReducers({
  products: productReducer,
  cart: CartReducer,
  favorites: favoriteReducer,
  categories: categoriesReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const App = () => {
  return (
    <Provider
      store={store}
    >
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  )
}

export default App;