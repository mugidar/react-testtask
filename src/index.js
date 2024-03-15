import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./components/Header/header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <App />
  </>
);
