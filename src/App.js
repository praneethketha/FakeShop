import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Pages/Nav";
import Foot from "./components/Foot";
import Products from "./Pages/Products";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Error from "./Pages/Error";


function App() {
  return (
    <Router>
      <Nav  />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/product/:id">
          <SingleProduct/>
        </Route>
        <Route path ="/cart">
          <Cart/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="*">
          <Error/>
        </Route>
      </Switch>
      <Foot  />
    </Router>
  );
}

export default App;
