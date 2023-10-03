import { combineReducers } from "redux";
import userReducer from "../slice/userSlice";
import cartReducer from "../slice/cartSlice";
import shopFilterReducer from "../slice/shopFilterSlice";
import adminReducer from "../slice/adminSlice";
import drawerWidthReducer from "../slice/drawerWidthSlice";
import ProductReducer from "../slice/ProductSlice";

const rootReducer = combineReducers({
  user: userReducer,
  admin: adminReducer,
  product: ProductReducer,
  cart: cartReducer,
  shopFilter: shopFilterReducer,
  drawerWidth: drawerWidthReducer,
});

export default rootReducer;
