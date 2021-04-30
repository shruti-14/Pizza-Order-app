import Aux from "../aux/aux";
import React, { Component } from "react";
import classes from "./layout.module.css";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
