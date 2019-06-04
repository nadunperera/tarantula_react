import React from "react";

import Home from "./pages/Home";
import Store from "./pages/Store";
import StoreSpec from "./pages/StoreSpec";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/store" component={Store} />
      <Route exact path="/store/spec" component={StoreSpec} />
    </>
  );
}

export default App;
