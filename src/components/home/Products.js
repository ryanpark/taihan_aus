import React, { Fragment } from "react";
import styled from "styled-components";
import { color, screen } from "../../global/constant";
import { HashLink as Link } from "react-router-hash-link";

import img1 from "./powerCable.png";
import img2 from "./baseMetal.png";
import img3 from "./teleCable.png";

const Wrapper = styled.div`
  background: ${color.blue};
  color: #fff;
  display: block;
  margin-bottom: 20px;
  text-align: center;
  max-width: 1280px;
  margin: 0 auto;

  @media ${screen.mdUp} {
    display: flex;
    justify-content: space-around;
    padding-bottom: 40px;
    align-items: flex-end;
    margin-bottom: 0px;
  }

  img {
    display: block;
    width: 40%;
    margin: 0 auto;

    @media ${screen.mdUp} {
      width: 100%;
      margin: 0;
    }
  }

  a {
    text-decoration: underline;
    :hover {
      text-decoration: none;
    }
  }
`;

const PrimaryProduct = styled.img`
  position: relative;
  left: -15px;
`;
const List = styled.div`
  padding-bottom: 20px;
  @media ${screen.mdUp} {
    padding: 0px;
  }
`;

export default () => (
  <Fragment>
    <Wrapper>
      <List>
        <PrimaryProduct alt="clients" src={img1} />
        <Link to="../pages/products">Power Cable</Link>
      </List>
      <List>
        <PrimaryProduct alt="clients" src={img2} />
        <Link to="../pages/products#baseMetal">Base Metal</Link>
      </List>
      <List>
        <PrimaryProduct alt="clients" src={img3} />
        <Link to="../pages/products#teleComunication">Telecomunication</Link>
      </List>
    </Wrapper>
  </Fragment>
);
