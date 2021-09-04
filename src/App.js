import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// #material-ui :
import { ThemeProvider } from "@material-ui/core";
import Light from "./styles/Light";
import Dark from "./styles/Dark";

// #pages
import Navigation from "./components/sections/Navigation/Navigation";
import sample from "./pages/sample";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";

// #components :
export default function App() {
  return (
    <>
      <ThemeProvider theme={Light}>
        <Router>
          {/* <Route path="/" component={Navigation} /> */}

          <Switch>
            {/* <Route path="/" exact component={HomePage} /> */}
            <Route path="/" component={sample} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/contact" exact component={ContactUsPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}
