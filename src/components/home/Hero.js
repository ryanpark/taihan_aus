import React from "react";
import styled from "styled-components";
import Bgg from "../../components/home/largeBg.png";
import { color, screen } from "../../global/constant";
import "animate.css/animate.min.css";

const Container = styled.div``;

const Img = styled.div`
  background: url(${Bgg});
  background-repeat: no-repeat;
  background-position: 1px 1px;
  background-size: cover;
  height: 700px;
  background-color: ${color.blue};
  position: relative;
  margin-top: -87px;
  @media ${screen.xxlgUp} {
    background-position: 1px 1px;
  }
`;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const HeadingWrapper = styled.div`
  text-align: center;
  padding-top: 173px;
  position: relative;
`;

const PrimaryHeading = styled.h1`
  color: white;
  font-size: 50px;
  line-height: 68px;
  font-weight: lighter;
  margin-bottom: 20px;
`;
const SecondaryHeading = styled.h1`
  color: white;
  font-size: 32px;
  line-height: 39px;
  font-weight: lighter;
`;

export default () => (
  <Container>
    <Img>
      <Wrapper>
        <HeadingWrapper>
          <PrimaryHeading>
            The Power Lighting Up <br />
            The World, Taihan.
          </PrimaryHeading>

          <SecondaryHeading>
            Taihan, the global cable & solution
            <br /> company is lighting up the world
          </SecondaryHeading>
        </HeadingWrapper>
      </Wrapper>
    </Img>
  </Container>
);
