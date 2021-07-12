import { createSlice } from "@reduxjs/toolkit";

export const getSearchSlice = createSlice({
  name: "getKey",
  initialState: {
    key: "",
    newFilterList:[]
  },
  reducers: {
    getSearch: (state, { payload }) => {
      state.key = payload;
    },
    getNewFilterList :(state,{payload})=>{
      state.newFilterList = payload;
    }
  },
});
export const selectSearchKey = (state) => state.getKey.key;
export const selectFilterList = (state) => state.getKey.key;
export const { getSearch,getNewFilterList } = getSearchSlice.actions;
export default getSearchSlice.reducer;
