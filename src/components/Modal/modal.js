import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import CloseIcon from "@mui/icons-material/Close";
import { ModalContext } from "../../providers/cart-modal-provider";
import { pizzas } from "../../data";

const Modal = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const first = pizzas.find(
      (item) => item.id === Number(localStorage.getItem("firstPizzaId"))
    );

    const second = pizzas.find(
      (item) => item.id === Number(localStorage.getItem("secondPizzaId"))
    );
    setItems([first, second]);
  }, [isOpen]);

  if (isOpen)
    return (
      <div className="modal">
        <span className="modal_close_btn">
          <CloseIcon onClick={() => setIsOpen(false)} />
        </span>
        <div className="modal_inner">
          {items.length > 0 ? (
            <ul>
              {items.map((item, i) => (
                <li key={i}>
                  {i + 1} - {item.name}
                </li>
              ))}
            </ul>
          ) : (
            <h1>Cart is empty</h1>
          )}
          <button onClick={() => setIsOpen(false)}>Checkout</button>
        </div>
      </div>
    );
};

export default Modal;
