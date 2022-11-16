import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import { screen, color } from "../global/constant";
import "../global/hamburger.css";

const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
}`;

const Links = styled.ul`
  display: block;
  align-items: center;
  padding-top: 16%;
  animation: ${fadeIn} 1s;
  @media ${screen.mdUp} {
    display: none;
  }
`;

const List = styled.li`
  display: block;
  padding-bottom: 3em;
  text-align: center;
`;

const Button = styled.a`
  position: absolute;
  right: 0.3em;
  top: 0.3em;
  @media ${screen.mdUp} {
    display: none;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  background: ${color.blue};
  height: 100%;
  z-index: 9999999;
`;

export default class MobileMenu extends React.Component {
  render() {
    return (
      <Fragment>
        <Button onClick={this.props.updateMobileMenuState.bind(true)}>
          <button
            className={`hamburger hamburger--vortex ${
              this.props.menuExpanded ? "is-active" : ""
            }`}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </Button>
        {this.props.menuExpanded && (
          <Wrapper>
            <Links>
              <List>
                {" "}
                <Link className="mobileLink" to="../pages/projects">
                  Projects
                </Link>
              </List>
              <List>
                {" "}
                <Link className="mobileLink" to="../pages/products">
                  Products
                </Link>
              </List>
              <List>
                {" "}
                <Link className="mobileLink" to="../pages/Certificates">
                  Certificates
                </Link>
              </List>
              <List>
                {" "}
                <Link className="mobileLink" to="../pages/company">
                  Company
                </Link>
              </List>
              <List>
                {" "}
                <Link className="mobileLink" to="../pages/global">
                  Global Operations
                </Link>
              </List>
              <List>
                {" "}
                <Link className="mobileLink" to="../pages/contact">
                  Contact
                </Link>
              </List>
            </Links>
          </Wrapper>
        )}
      </Fragment>
    );
  }
}
