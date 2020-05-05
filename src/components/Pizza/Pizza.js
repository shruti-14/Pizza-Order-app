import React from 'react';
import classes from './Pizza.css';

const pizza = (props) => {
    return (
        <div className={classes.Pizza}>
           <div class="pizzaDiv">
                <div class="crust"></div>
                <div class="cheese"></div>
                <div class="pepperoni pep1"></div>
                <div class="pepperoni pep2"></div>
                <div class="pepperoni pep3"></div>
                <div class="pepperoni pep4"></div>
                <div class="pepperoni pep5"></div>
                <div class="pepperoni pep6"></div>
            </div>
        </div>
    );
}

export default pizza;