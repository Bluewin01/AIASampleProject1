import { createSlice } from "@reduxjs/toolkit";
import baseApi from "../../../networks/baseApi";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    loading: false,
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

export const loginAsync = (data) => async (dispatch) => {
  console.log(data);
  try {
    const response = await baseApi.post("login", data);
    dispatch(fetchUserInfo(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const updateProfileAsync = (data) => async (dispatch) => {
  try {
    const response = await baseApi.put("update", data);
    dispatch(createUser(response.data));
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
