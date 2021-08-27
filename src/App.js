import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// #material-ui :
import { ThemeProvider } from "@material-ui/core";
import Light from "./styles/Light";

// #pages :
import sample from "./pages/sample";

// #components :

export default function App() {
  return (
    <>
      <ThemeProvider theme={Light}>
        <Router>
          <Route path="/" component={sample} />

          <Switch></Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}
