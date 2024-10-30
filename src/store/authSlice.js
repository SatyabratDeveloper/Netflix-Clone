import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registeredEmail: "",
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registeredEmail: (state, action) => {
      state.registeredEmail = action.payload.email;
    },
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.user;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { registeredEmail, login, logout } = authSlice.actions;

export default authSlice.reducer;
