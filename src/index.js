import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import LoadingPage from "./components/pages/loadingPage";

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




ReactDOM.render(
  <Suspense fallback={<LoadingPage/>}>
<Provider store={store}>
    <App />
  </Provider>
  </Suspense>
  ,
  document.getElementById("root")
);
