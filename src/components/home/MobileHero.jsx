import React from "react";
import styled from "styled-components";
import img from "./bgMobile.jpg";

const Hero = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 668px;
`;

const PrimaryTitle = styled.h1`
  text-align: center;
  font-size: 30px;
  line-height: 43px
  padding: 96px 20px;
  font-weight: lighter;
`;

const SecondaryTitle = styled.h1`
  text-align: center;
  font-size: 30px;
  padding: 150px 20px;
  line-height: 43px
  font-weight: lighter;
`;

export default () => (
  <Hero>
    <PrimaryTitle>
      The Power Lighting Up <br />
      The World, Taihan.
    </PrimaryTitle>
    <SecondaryTitle>We Connect the Future</SecondaryTitle>
  </Hero>
);
