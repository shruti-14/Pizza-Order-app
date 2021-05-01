import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {/* <div className={classes.priceDiv}>Bill Amount: <strong>{props.price}</strong></div> */}
    {Object.keys(props.toppings).map((ctrl, index) => (
      <BuildControl
        key={`${props.toppings[ctrl].label}+${index}`}
        added={props.toppings[ctrl].added}
        label={props.toppings[ctrl].label}
        toppingAdded={() => {
          props.toppingAdded(props.toppings[ctrl].type);
        }}
        toppingRemoved={() => {
          props.toppingRemoved(props.toppings[ctrl].type);
        }}
      />
    ))}
  </div>
);

export default buildControls;
