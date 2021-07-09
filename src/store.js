import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./container/slice";
import idReducer from "./container/movieSlice";
import keyReducer from "./container/searchSlice";

export default configureStore({
  reducer: {
    getData: dataReducer,
    getIdMovie: idReducer,
    getKey: keyReducer,
  },
});
