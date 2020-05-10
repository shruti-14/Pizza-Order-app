import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import Aux from "../../hoc/aux/aux";
import Pizza from '../../components/Pizza/Pizza';
import BuildControls from "../../components/Pizza/BuildControls/BuildControls";

class PizzaBuilder extends Component {
    render() {
        const pizza = (
            <Aux>
                <Pizza toppings={this.props.toppings} />
                <BuildControls
                    toppingAdded={this.props.onToppingAdded}
                    toppingRemoved={this.props.onToppingRemoved}
                    toppings = {this.props.toppings}
                    price={this.props.totalPrice} />
            </Aux>
        );
        return pizza;
    }
}

const mapStateToProps = (state) => {
    return {
        toppings: state.toppings,
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToppingAdded: (toppingName) => { dispatch({ type: actionTypes.ADD_TOPPING, toppingName: toppingName }) },
        onToppingRemoved: (toppingName) => { dispatch({ type: actionTypes.REMOVE_TOPPING, toppingName: toppingName }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBuilder);