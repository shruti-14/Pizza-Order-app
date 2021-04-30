import * as actionTypes from "./actions";
import * as toppingsCount from "./toppingsCount";

const initialState = {
  toppings: {
    pepperoni: {
      type: "pepperoni",
      label: "Pepperoni",
      count: toppingsCount.PEPPERONI_COUNT,
      added: false,
    },
    capsicum: {
      type: "capsicum",
      label: "Capsicum",
      count: toppingsCount.CAPSICUM_COUNT,
      added: false,
    },
    olive: {
      type: "olive",
      label: "Olives",
      count: toppingsCount.OLIVES_COUNT,
      added: false,
    },
    chicken: {
      type: "chicken",
      label: "Chicken",
      count: toppingsCount.CHICKEN_COUNT,
      added: false,
    },
    onion: {
      type: "onion",
      label: "Onion",
      count: toppingsCount.ONION_COUNT,
      added: false,
    },
  },
  totalPrice: 100,
};
const INGREDIENT_PRICES = {
  pepperoni: 70,
  capsicum: 40,
  olive: 50,
  chicken: 80,
  onion: 30,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TOPPING:
      return {
        ...state,
        toppings: {
          ...state.toppings,
          [action.toppingName]: {
            ...state.toppings[action.toppingName],
            added: true,
          },
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.toppingName],
      };
    case actionTypes.REMOVE_TOPPING:
      return {
        ...state,
        toppings: {
          ...state.toppings,
          [action.toppingName]: {
            ...state.toppings[action.toppingName],
            added: false,
          },
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.toppingName],
      };
    default:
      return state;
  }
};

export default reducer;
