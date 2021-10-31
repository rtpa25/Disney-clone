import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./user-slice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
