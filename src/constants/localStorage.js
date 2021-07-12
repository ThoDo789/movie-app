import { getFlatList, getId } from "../container/movieSlice";
import store from "../store";

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
const getTodosFromLocalStorage = (storage) => {
  try {
    const persistedState = localStorage.getItem(storage);
    if (persistedState) return JSON.parse(persistedState);
  } catch (e) {
    console.log(e);
  }
};

getTodosFromLocalStorage("reduxState");
