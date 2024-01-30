import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    codes: [],
    centers: [],
    loading: false,
  },
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    getCodes: (state, action) => {
      state.codes = action.payload;
    },
    getCenters: (state, action) => {
      state.centers = action.payload;
    },
    setLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const { getUsers, getCodes, getCenters, setLoading } =
  usersSlice.actions;

export default usersSlice.reducer;
