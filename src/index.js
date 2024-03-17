import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./components/Header/header";
import Modal from "./components/Modal/modal";
import ModalProvider from "./providers/cart-modal-provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {" "}
    <ModalProvider>
      <Modal/>
      <Header />
      <App />
    </ModalProvider>
  </>
);
