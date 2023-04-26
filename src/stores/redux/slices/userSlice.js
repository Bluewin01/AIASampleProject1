import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  token: "",
  otp: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = [action.payload];
    },
    otpSuccess: (state, action) => {
      state.otp = [action.payload];
    },
  },
});

export const { loginSuccess, otpSuccess } = userSlice.actions;
export default userSlice.reducer;
