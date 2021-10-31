import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).displayName
    : "",
  email: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).email
    : "",
  photo: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).photoURL
    : "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
