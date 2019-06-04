import React from "react";

import Home from "./pages/Home";
import Store from "./pages/Store";
import StoreSpec from "./pages/StoreSpec";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/MainNavbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/store" component={Store} />
        <Route exact path="/store/spec" component={StoreSpec} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
