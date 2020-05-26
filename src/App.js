import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import ErrorPageNotFound from "./pages/ErrorPageNotFound";
/*
import About from "./pages/About";
import Help from "./pages/Help";
import Menu from "./pages/Menu";
import Play from "./pages/Play";
import Stats from "./pages/Stats";
import Values from "./pages/Values";
*/

// components
import Alert from "./components/Alert";

function App() {
  return (
    <Router>
      <Alert />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="*">
          <ErrorPageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
