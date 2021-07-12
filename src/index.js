import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import LoadingPage from "./components/pages/loadingPage";






ReactDOM.render(
  <Suspense fallback={<LoadingPage/>}>
<Provider store={store}>
    <App />
  </Provider>
  </Suspense>
  ,
  document.getElementById("root")
);
