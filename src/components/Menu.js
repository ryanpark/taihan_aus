import React from "react";
import styled from "styled-components";
import { screen } from "../global/constant";
import { Link } from "react-router-dom";

const Links = styled.ul`
  display: none;
  justify-content: flex-end;
  align-items: center;

  @media ${screen.mdUp} {
    display: flex;
  }
`;

const List = styled.li`
  display: inline-block;
  padding-right: 3em;
`;

export default () => (
  <Links>
    <List>
      {" "}
      <Link to="../pages/projects">Projects</Link>
    </List>
    <List>
      {" "}
      <Link to="../pages/products">Products</Link>
    </List>
    <List>
      {" "}
      <Link to="../pages/Certificates">Certificates</Link>
    </List>
    <List>
      {" "}
      <Link to="../pages/company">Company</Link>
    </List>
    <List>
      {" "}
      <Link to="../pages/global">Global Operations</Link>
    </List>
    <List>
      {" "}
      <Link to="../pages/contact">Contact</Link>
    </List>
  </Links>
);
