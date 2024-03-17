import React, { createContext, useState } from "react";
import Modal from "../components/Modal/modal";

export const ModalContext = createContext(null);

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
