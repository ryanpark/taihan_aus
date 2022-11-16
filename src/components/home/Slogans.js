import React from "react";
import styled from "styled-components";
import { color, screen } from "../../global/constant";
import Slogan1 from "./Slogan1";
import Slogan2 from "./Slogan2";
import Slogan3 from "./Slogan3";

const Wrapper = styled.div`
  display: block;
  align-items: flex-end;
  padding: 50px 0px 100px 0px;

  @media ${screen.mdUp} {
    display: flex;
    justify-content: space-evenly;
  }
`;

const Slogan = styled.div`
  color: ${color.blue};

  text-align: center;
  border-right: 1px solid #ddd;
  margin-bottom: 50px;

  @media ${screen.mdUp} {
    width: 423px;
    margin-bottom: 0px;
    margin-bottom: 30px;
  }
  :last-child {
    border: none;
  }
  svg {
    height: 125px;
    margin-bottom: 10px;

    @media ${screen.mdUp} {
      margin-bottom: 35px;
    }
  }
`;

const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 15px;

  @media ${screen.mdUp} {
    margin-bottom: 25px;
  }
`;

const Paragraph = styled.p``;
export default () => (
  <Wrapper>
    <Slogan>
      <Slogan1 />
      <Title>People Centric Culture</Title>
      <Paragraph>
        A people-centric corporate culture, focusing <br /> on communications
        and mutual trust
      </Paragraph>
    </Slogan>
    <Slogan>
      <Slogan2 />
      <Title>Solution</Title>
      <Paragraph>
        Customer satisfaction through <br /> technology and quality
      </Paragraph>
    </Slogan>
    <Slogan>
      <Slogan3 />
      <Title>Future Oriented</Title>
      <Paragraph>
        A brighter future through creative <br /> thinking and taking on
        challenges
      </Paragraph>
    </Slogan>
  </Wrapper>
);
