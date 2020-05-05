import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/layout/layout';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={PizzaBuilder}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
