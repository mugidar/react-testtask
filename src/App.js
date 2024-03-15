import { pizzas } from "./data";
import "./App.css";
import { useState } from "react";
import PizzaItem from "./components/Pizza/pizza";

function App() {
  const [firstPizza, setFirstPizza] = useState(0);
  const [secondPizza, setSecondPizza] = useState(0);

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
      <p>
        First Pizza price
        <em>{pizzas[firstPizza].price}$ </em>
      </p>
      <p>
        Second Pizza price
        <em>{pizzas[firstPizza].price}$ </em>
      </p>
      <p>
        Total price
        <em>{pizzas[firstPizza].price + pizzas[secondPizza].price}$ </em>
      </p>
    </div>
  );
}

export default App;
