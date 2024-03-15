import React from "react";
import "./index.css";
const PizzaItem = ({
  pizza,
  secondPizza = false,
  pizzasLength,
  currentPizza,
  setPizza,
}) => {
  const onPrev = () => {
    if (currentPizza <= 0) return;
    setPizza((prev) => (prev -= 1));
  };
  const onNext = () => {
    if (pizzasLength - 1 === currentPizza + 1) return;
    setPizza((prev) => (prev += 1));
  };

  return (
    <div>
      <h1>{pizza.name}</h1>
      <p>{pizza.desc}</p>
      <em>{pizza.price}$</em>
      <div className="pizza_container">
        <button onClick={onPrev}>↑</button>
        <img
          src={`/${pizza.img}`}
          style={{
            transform: secondPizza ? "translateX(-50%)" : "translateX(50%)",
            alignItems: secondPizza ? "start" : "end",
          }}
          alt=""
        />
        <button onClick={onNext}>↓</button>
      </div>
    </div>
  );
};

export default PizzaItem;
