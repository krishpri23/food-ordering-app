import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    login: {
      authenticated: false,
    },
    reducers: {
      login: (state) => {
        state.login.authenticated = true;
      },
    },
  },
});

export default loginSlice.reducer;
export const { login } = loginSlice.actions;
