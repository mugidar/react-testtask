import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ModalContext } from "../../providers/cart-modal-provider";
const Header = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  return (
    <header>
      <span>MugiSplitPizza </span>

      <ShoppingCartIcon onClick={() => setIsOpen(true)} className="cart-icon" />
    </header>
  );
};

export default Header;
