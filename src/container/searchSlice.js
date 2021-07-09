import { createSlice } from "@reduxjs/toolkit";

export const getSearchSlice = createSlice({
  name: "getKey",
  initialState: {
    key: "",
  },
  reducers: {
    getSearch: (state, { payload }) => {
      state.key = payload;
    },
  },
});
export const selectSearchKey = (state) => state.key;
export const { getSearch } = getSearchSlice.actions;
export default getSearchSlice.reducer;
