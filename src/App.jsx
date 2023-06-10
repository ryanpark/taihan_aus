import React, { Component, Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import reset from "./global/reset";
import styles from "./global/styles";
import MediaQuery from "react-responsive";
import { color, screen } from "./global/constant";
import Hero from "./components/home/Hero";
import HeaderWrapper from "./components/HeaderWrapper";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Main from "./Main";

import "./App.css";

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${styles}
`;
const smallDeviceScreenSize = 767;

const Footer = styled.div`
  height: 30px;
  background: ${color.blue};
`;

class App extends Component {
  state = { menuExpanded: false, page: "" };
  componentDidMount() {
    this.state.menuExpanded
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }
  updateMobileMenuState = status => {
    if (this.state.menuExpanded) {
      return this.setState({ menuExpanded: false });
    }

    this.setState({ menuExpanded: status });
  };

  updateBodyState() {
    if (window.innerWidth > smallDeviceScreenSize) {
      return false;
    }
    !this.state.menuExpanded
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }

  updatePageLocation = page => {
    this.setState({ page });
  };

  render() {
    return (
      <Fragment>
        <div id={this.state.page}>
          <GlobalStyles />
          <HeaderWrapper>
            <Header page={this.state.page} />
          </HeaderWrapper>
          <MediaQuery query={screen.mdUp}>
            {this.state.page === "Home" && <Hero />}
          </MediaQuery>

          <MediaQuery query={screen.smDown}>
            <MobileMenu
              updateMobileMenuState={this.updateMobileMenuState}
              menuExpanded={this.state.menuExpanded}
            />
          </MediaQuery>
          <Main
            updateMobileMenuState={this.updateMobileMenuState}
            updatePageLocation={this.updatePageLocation}
          />
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default App;
