import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Order from "./components/Order";
import Error from "./components/Error";
import Summery from "./components/Summery";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/pizza/:id" component={Order} />
        <Route path="/summary" component={Summery} />
        <Route path="*" component={Error} />
      </Switch>
    </>
  );
};
export default App;
