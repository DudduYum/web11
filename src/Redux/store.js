import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers";

export default configureStore({
  reducer: cartReducer
});