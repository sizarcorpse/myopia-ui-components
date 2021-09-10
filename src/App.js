import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// #material-ui :
import { ThemeProvider } from "@material-ui/core";
import Light from "./styles/Light";
import Dark from "./styles/Dark";

import sample from "./pages/sample";
// #pages
import Navigation from "./components/sections/Navigation/Navigation";
// Patient
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import PatientsPage from "./pages/PatientsPage";
import ServicesPage from "./pages/ServicesPage";
import SingleServicePage from "./pages/SingleServicePage";
// Practioner
import PractionerHomePage from "./pages/PractionerHomePage";
import GlassBreakPage from "./pages/GlassBreakPage";

// #components :
export default function App() {
  return (
    <>
      <ThemeProvider theme={Light}>
        <Router>
          <Route path="/" component={Navigation} />

          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/s" component={sample} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/contact" exact component={ContactUsPage} />
            <Route path="/patients" exact component={PatientsPage} />
            <Route path="/services" exact component={ServicesPage} />
            <Route
              path="/services/service"
              exact
              component={SingleServicePage}
            />
            <Route path="/practioner" exact component={PractionerHomePage} />
            <Route
              path="/practioner/break-glass"
              exact
              component={GlassBreakPage}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}
