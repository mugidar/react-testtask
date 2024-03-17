import { pizzas } from "./data";
import "./App.css";
import { useContext, useEffect, useState } from "react";
import PizzaItem from "./components/Pizza/pizza";
import { ModalContext } from "./providers/cart-modal-provider";

function App() {
  const [firstPizza, setFirstPizza] = useState(pizzas[0].id);
  const [secondPizza, setSecondPizza] = useState(pizzas[0].id);
  const { isOpen, setIsOpen } = useContext(ModalContext);
  console.log(pizzas[firstPizza].price);
  const handleSubmit = () => {
    setIsOpen(true);
  };

  return (
    <div className="App">
      <div className="pizzas">
        <PizzaItem
          pizzasLength={pizzas.length}
          currentPizza={firstPizza}
          pizza={pizzas[firstPizza]}
          setPizza={setFirstPizza}
        />
        <PizzaItem
          pizzasLength={pizzas.length}
          currentPizza={secondPizza}
          pizza={pizzas[secondPizza]}
          setPizza={setSecondPizza}
          secondPizza={true}
        />
      </div>{" "}
      <div className="summary">
        <div className="prices_container">
          <table border={1} cellPadding={0} cellSpacing={0} className="prices">
            <tr>
              <td>First Pizza price:</td> <td>{pizzas[firstPizza].price}$ </td>
            </tr>
            <tr>
              <td> Second Pizza price:</td>{" "}
              <td>{pizzas[secondPizza].price}$ </td>
            </tr>
            <tr>
              <td> Total price: </td>{" "}
              <td>{pizzas[firstPizza].price + pizzas[secondPizza].price}$ </td>
            </tr>
          </table>
        </div>
        <button className="place_order-btn" onClick={() => handleSubmit()}>
          {" "}
          Place order
        </button>
      </div>
    </div>
  );
}

export default App;
