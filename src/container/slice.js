import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk("getData/getPost", async () => {
  return fetch(
    `https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST`
  )
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
});

export const getDataSlice = createSlice({
  name: "getData",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getPost.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPost.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getPost.rejected]: (state) => {
      state.status = "failed";
    },
  },
});
export const selectList = (state) => state.getData.list;
export const selectStatus = (state) => state.getData.status;
export default getDataSlice.reducer;
