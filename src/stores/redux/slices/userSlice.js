import { createSlice } from "@reduxjs/toolkit";
import baseApi from "../../../networks/baseApi";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
  },
  reducers: {
    fetchUserInfo: (state, action) => {
      state.data = [action.payload];
    },
    createUser: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const getUserAsync = () => async (dispatch) => {
  try {
    const response = await baseApi.get("profile");
    dispatch(fetchUserInfo(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const createUserAsync = (data) => async (disptach) => {
  try {
    const response = await baseApi.post("register", data);
    disptach(createUser(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const { fetchUserInfo, createUser } = userSlice.actions;
export default userSlice.reducer;
