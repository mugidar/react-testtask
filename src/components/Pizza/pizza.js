import React, { useEffect } from "react";
import "./index.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
    if (pizzasLength === currentPizza + 1) return;
    setPizza((prev) => prev + 1);
  };

  useEffect(() => {
    !secondPizza
      ? localStorage.setItem("firstPizzaId", currentPizza)
      : localStorage.setItem("secondPizzaId", currentPizza);
  }, [currentPizza]);

  const formattedDesc = pizza.desc.split(",");
  console.log(formattedDesc);

  return (
    <div>
      <div className="pizza_info">
        <h1>{pizza.name}</h1>
        <div className="pizza_desc-tags">
          {formattedDesc.map((desc) => (
            <span className="pizza_desc-tag" key={desc}>{desc}</span>
          ))}
        </div>
        <em>{pizza.price}$</em>
      </div>
      <div className="pizza_container">
        <button onClick={onPrev}>
          <KeyboardArrowUpIcon />
        </button>
        <img
          src={`/${pizza.img}`}
          style={{
            transform: secondPizza ? "translateX(-50%)" : "translateX(50%)",
            alignItems: secondPizza ? "start" : "end",
          }}
          alt=""
        />
        <button onClick={onNext}>
          <KeyboardArrowDownIcon />
        </button>
      </div>
    </div>
  );
};

export default PizzaItem;
