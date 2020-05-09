import * as actionTypes from './actions';
import * as toppingsCount from './toppingsCount';

const initialState = {
    toppings: {
        pepperoni: {
            type: "pepperoni",
            count: toppingsCount.PEPPERONI_COUNT,
            added: true
        },
        capsicum: {
            type: "capsicum",
            count: toppingsCount.CAPSICUM_COUNT,
            added: true
        },
        olive: {
            type: "olive",
            count: toppingsCount.OLIVES_COUNT,
            added: true
        },
        chicken: {
            type: "chicken",
            count: toppingsCount.CHICKEN_COUNT,
            added: true
        }
    },
    totalPrice: 100
};
const INGREDIENT_PRICES = {
    pepperoni: 70,
    capsicum: 40,
    olive: 50,
    chicken: 80
};
const reducer = (state = initialState,action) => {
 switch(action.type) {
    case actionTypes.ADD_TOPPING : 
        return {
            ...state,
            toppings: {
                ...state.toppings,
                ...state.toppings[action.toppingName],
                added: true
            },
            totalPrice: state.totalPrice + INGREDIENT_PRICES[action.toppingName]
        }
    case actionTypes.REMOVE_TOPPING : 
        return {
            ...state,
            toppings: {
                ...state.toppings,
                ...state.toppings[action.toppingName],
                added: false
            },
            totalPrice: state.totalPrice - INGREDIENT_PRICES[action.toppingName]
        }  
    default: 
        return state;      
 }   
}

export default reducer;