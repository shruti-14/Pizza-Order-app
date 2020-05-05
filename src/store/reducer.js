import * as actionTypes from './actions';
const initialState = {
    toppings: {
        pepperoni: false,
        capsicum: false,
        olives: false,
        chicken: false
    },
    totalPrice: 100
};
const INGREDIENT_PRICES = {
    pepperoni: 70,
    capsicum: 40,
    olives: 50,
    chicken: 80
};
const reducer = (state = initialState,action) => {
 switch(action.type) {
    case actionTypes.ADD_TOPPING : 
        return {
            ...state,
            toppings: {
                ...state.toppings,
                [action.toppingName]: true
            },
            totalPrice: state.totalPrice + INGREDIENT_PRICES[action.toppingName]
        }
    case actionTypes.REMOVE_TOPPING : 
        return {
            ...state,
            toppings: {
                ...state.toppings,
                [action.toppingName]: false
            },
            totalPrice: state.totalPrice - INGREDIENT_PRICES[action.toppingName]
        }  
    default: 
        return state;      
 }   
}

export default reducer;