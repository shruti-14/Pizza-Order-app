import React from 'react';
import './pizza.css';



const pizza = (props) => {
    const getToppingItemsArray = (topping) => {
        const toppingItems = [];

        for (let i = 1; i <= topping.count; i++) {
            toppingItems.push(<div key={`${topping.type}${i}`} className={`${topping.type} ${topping.type}${i} `}></div>);
        }
        return toppingItems;
    }
    const toppingsObj = props.toppings;
    const pizzaToppings =
        Object.keys(props.toppings).map(topping => {
            return <div
                key={toppingsObj[topping].type} className={`${toppingsObj[topping].type}Layer ${!toppingsObj[topping].added ? 'hideLayer' : ''}`}>
                {getToppingItemsArray(toppingsObj[topping])}
            </div>
        });
    return (

        <div className="Pizza">
            <div className="crust">
                {pizzaToppings}
            </div>
        </div>
    );
}

export default pizza;