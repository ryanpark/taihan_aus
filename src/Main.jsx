import React from "react";
import { Switch, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Products from "./pages/Products";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Global from "./pages/Global";
import Home from "./pages/Home";
import Certificates from "./pages/Certificates";

export default class Main extends React.Component {
  componentDidUpdate() {}
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <Home
              updateMobileMenuState={this.props.updateMobileMenuState}
              updatePageLocation={this.props.updatePageLocation}
              page={props.match}
            />
          )}
        />

        <Route
          path="/pages/Projects"
          render={() => (
            <Projects
              updateMobileMenuState={this.props.updateMobileMenuState}
              updatePageLocation={this.props.updatePageLocation}
            />
          )}
        />
        <Route
          path="/pages/Products"
          render={() => (
            <Products
              updateMobileMenuState={this.props.updateMobileMenuState}
              updatePageLocation={this.props.updatePageLocation}
            />
          )}
        />
        <Route
          path="/pages/company"
          render={() => (
            <Company
              updateMobileMenuState={this.props.updateMobileMenuState}
              updatePageLocation={this.props.updatePageLocation}
            />
          )}
        />
        <Route
          path="/pages/global"
          render={() => (
            <Global
              updateMobileMenuState={this.props.updateMobileMenuState}
              updatePageLocation={this.props.updatePageLocation}
            />
          )}
        />
        <Route
          path="/pages/contact"
          render={() => (
            <Contact
              updateMobileMenuState={this.props.updateMobileMenuState}
              updatePageLocation={this.props.updatePageLocation}
            />
          )}
        />
        <Route
          path="/pages/certificates"
          render={() => (
            <Certificates
              updateMobileMenuState={this.props.updateMobileMenuState}
              updatePageLocation={this.props.updatePageLocation}
            />
          )}
        />
      </Switch>
    );
  }
}
