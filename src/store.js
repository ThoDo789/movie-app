import { configureStore } from "@reduxjs/toolkit";
import idReducer from "./container/movieSlice";
import keyReducer from "./container/searchSlice";
import dataReducer from "./container/slice";

export default configureStore({
  reducer: {
    getData: dataReducer,
    getIdMovie: idReducer,
    getKey: keyReducer,},
});
