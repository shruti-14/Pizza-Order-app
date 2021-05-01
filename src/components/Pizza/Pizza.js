import React from "react";
import "./pizza.css";

const pizza = (props) => {
  const getToppingItemsArray = (topping) => {
    const toppingItems = [];

    for (let i = 1; i <= topping.count; i++) {
      toppingItems.push(
        <div
          key={`${topping.type}${i}`}
          className={`${topping.type} ${topping.type}${i} `}
        ></div>
      );
    }
    return toppingItems;
  };
  const toppingsObj = props.toppings;
  const pizzaToppings = Object.keys(props.toppings).map((topping) => {
    return (
      <div
        key={toppingsObj[topping].type}
        className={`${toppingsObj[topping].type}Layer ${
          !toppingsObj[topping].added ? "hideLayer" : ""
        }`}
      >
        {getToppingItemsArray(toppingsObj[topping])}
      </div>
    );
  });
  return (
    <div className="Pizza">
      <div className="base">
        <div className="crust">{pizzaToppings}</div>
      </div>
      <div className="plusContainer">
        <img
          alt="add"
          className="addIcon"
          src={process.env.PUBLIC_URL + "/plus.png"}
        />
      </div>
      <div className="mealOption">
        <div className="friesContainer">
          <img
            alt="fries"
            className="fries"
            src={process.env.PUBLIC_URL + "/chips.png"}
          />
        </div>
        <div className="drinkContainer">
          <img
            alt="drinkContainer"
            className="coolDrink"
            src={process.env.PUBLIC_URL + "/coke.jpeg"}
          />
        </div>
        <div className="cupCakeConatiner">
          <img
            alt="cupcake"
            className="cupcake"
            src={process.env.PUBLIC_URL + "/cupcake.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default pizza;
