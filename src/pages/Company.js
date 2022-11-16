import React from "react";
import styled from "styled-components";
import bg from "../components/company/bgcompany.png";
import person from "../components/home/superpower.jpg";

import { color, screen } from "../global/constant";
const Container = styled.div`
  margin: 0 auto;
  background: url(${bg});
  background-repeat: no-repeat;
  background-color: ${color.blue};
  position: relative;
`;
const Hero = styled.div`
  padding: 95px 30px 30px 30px;

  @media ${screen.mdUp} {
    padding: 150px;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 30px;
  line-height: 41px;
  margin-bottom: 40px;
  font-weight: lighter;

  @media ${screen.mdUp} {
    font-size: 45px;
    line-height: 55px;
  }
`;

const Paragraph = styled.p`
  line-height: 24px;
  text-align: center;
  margin-bottom: 20px;

  a {
    color: ${color.blue};
    text-decoration: underline;
  }
`;

const Wrapper = styled.div`
  background: white;
  color: ${color.blue};
  padding: 20px 20px;

  @media ${screen.mdUp} {
    padding: 50px 0;
  }
`;

const Competitiveness = styled.div`
  padding: 20px;
  margin: 0 auto;
  @media ${screen.mdUp} {
    display: flex;
    justify-content: center;
    padding: 54px;
  }
`;

const Lists = styled.ul`
  li {
    margin-bottom: 25px;
  }
`;

const Bold = styled.span`
  font-weight: bold;
  margin-bottom: 25px;
  display: block;
`;

const Office = styled.div`
  padding: 20px;
  text-align: center;

  @media ${screen.mdUp} {
    padding: 20px 154px;
  }
`;

const ListsWrapper = styled.div`
  padding: 0px 20px;
`;

const Img = styled.img`
  width: 100%;
  max-width: 514px;
  height: auto;
  margin-bottom: 15px;

  @media ${screen.mdUp} {
    margin: 0;
  }
`;

export default class Company extends React.Component {
  componentDidMount() {
    const { props } = this;
    props.updateMobileMenuState();
    this.props.updatePageLocation("Company");
  }
  render() {
    return (
      <Container>
        <Hero>
          <Heading>
            Taihan will open a new era to be <br /> the one with 100 year
            history
          </Heading>
          <Paragraph>
            We are preparing for the future, towards being known as a great
            company with a hundred years of history, <br /> based on the
            capability and energy which have made us grow and win over
            customers’ trust over the last 60 years. <br /> We will keep
            developing while communicating with our global customers, with a
            strong will for accomplishing <br /> our goal and responsibility for
            realizing the best customer satisfaction. Just like we have been
            doing so far, <br /> we promise to proceed resolutely despite
            hardships and ordeals. <br /> TAIHAN’s challenge and innovation
            towards a bigger world and a better tomorrow have just started.
          </Paragraph>
        </Hero>
        <Wrapper>
          <Heading>Global Leading Company</Heading>
          <Paragraph>
            We are approaching our half-century milestone in core competences,
            accumulating 50 years of excellence.
          </Paragraph>
          <Paragraph>
            {" "}
            In 1955, when the national industrial development began, after
            Korean War, Taihan Electric Wire was established as the first wire
            and <br /> cable company in Korea. During half a century, our
            company has grown into a global company with high competitiveness
            <br />
            in power. communication and metal industry.
          </Paragraph>
          <Paragraph>
            Now, our company is standing shoulder to shoulder with the leading
            companies in the world not only in the power and communication cable{" "}
            <br />
            but also in the network field and stainless steel business through
            its steady improvement in technology and quality. Cable and metal
            industries <br /> are more meaningful in that every members of
            society share its value together. Taihan provides the quality
            products and services <br /> whenever and wherever customers need.{" "}
          </Paragraph>
          <Paragraph>
            We will also develop and further expand our involvement in growth
            industries such as home network, <br /> solar power generation,
            rental and leisure busines s.{" "}
          </Paragraph>
          <Paragraph>
            Taihan is committed to contribute to the value creation of our
            customers with the ceaseless change and innovation, and maximizes
            the <br /> Corporate value through its commitment. We will make
            every efforts to be a company growing with customers based <br /> on
            the right-of-way management.{" "}
          </Paragraph>
          <Paragraph>
            The creation of customer’s value is the first priority of all of
            Taihan family.{" "}
          </Paragraph>
        </Wrapper>
        <Competitiveness>
          <div>
            <Img alt="building" src={person} />
          </div>
          <ListsWrapper>
            <Bold>Taihan’s Competitiveness</Bold>
            <Lists>
              <li>&#8226; &nbsp; Fully Equipped Manufacturing Facilities</li>
              <li>&#8226; &nbsp; Experienced & Skilled Techincal Man Power</li>
              <li>&#8226; &nbsp; Turn-key Solution</li>
              <li>&#8226; &nbsp; Customer Oriented Sales & Management</li>
              <li>
                &#8226; &nbsp; Various Facilities & Process for Quality
                Assurance
              </li>
            </Lists>
          </ListsWrapper>
        </Competitiveness>
        <Wrapper>
          <Office>
            <Paragraph>
              <Bold>Taihan Electric Wire CO., LTD Head Office</Bold>{" "}
            </Paragraph>
            <Paragraph>
              Taihan Smart Tower, <br />
              317 Simin-daero, Dongan-gu, <br /> Anyang-si, Gyeonggi-do, South
              Korea <br />
              <br />
              <a
                href="http://www.taihan.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                www.taihan.com
              </a>
            </Paragraph>
          </Office>
        </Wrapper>
      </Container>
    );
  }
}
