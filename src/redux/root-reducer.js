import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

//redux persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // cartitem remain when reload
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
