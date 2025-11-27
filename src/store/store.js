import { createStore, combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productsReducer from "./productReducer";

const rootReducer = combineReducers({
  cart:cartReducer,
  products:productsReducer
});

export const store = createStore(rootReducer);