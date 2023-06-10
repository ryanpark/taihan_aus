import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Logo from "./Logo";
import LogoSmall from "./LogoSmall";
import { Link } from "react-router-dom";
import { color, screen } from "../global/constant";

const LogoWrapper = styled.div`
  flex: 1 1 0%;
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 5px 5px 5px 20px;

  @media ${screen.mdUp} {
    padding: 5px 5px 5px 0px;
  }
`;

export default props => {
  const isHome = props.page === "Home";

  const Header = styled.div`
    display: flex;
    padding: 0.9em 0;
    position: relative;
    background: ${isHome ? "none" : color.blue};
    @media ${screen.mdUp} {
      z-index: 99999;
    }
  `;

  return (
    <Header>
      <LogoWrapper>
        <StyledLink to="/">
          <LogoSmall />
          <Logo />
        </StyledLink>
      </LogoWrapper>
      <Menu />
    </Header>
  );
};
