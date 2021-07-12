import { createSlice } from "@reduxjs/toolkit";

export const getIdSlice = createSlice({
  name: "getIdMovie",
  initialState: {
    id: null,
    list: null,
    flatList:[],
  },
  reducers: {
 
    getFlatList: (state, { payload }) => {
      state.list = payload;
    },
   
  },
});
export const selectList = (state) => state.getIdMovie.list;

export const {  getFlatList} = getIdSlice.actions;
export default getIdSlice.reducer;
