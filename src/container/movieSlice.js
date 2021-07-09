import { createSlice } from "@reduxjs/toolkit";

export const getIdSlice = createSlice({
  name: "getIdMovie",
  initialState: {
    id: null,
    list: null,
  },
  reducers: {
    getId: (state, { payload }) => {
      console.log(payload);
      state.id = payload;
    },
    getFlatList: (state, { payload }) => {
      state.list = payload;
    },
  },
});
export const selectId = (state) => state.getIdMovie.id;
export const selectList = (state) => state.getIdMovie.List;

export const { getId, getFlatList } = getIdSlice.actions;
export default getIdSlice.reducer;
