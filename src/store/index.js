import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import movieReducer from "./movie-slice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});
