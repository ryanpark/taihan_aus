import React, { Fragment } from "react";
import MediaQuery from "react-responsive";
import { screen, color } from "../global/constant";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Wrapper from "../components/Wrapper";
import Arrow from "../global/Arrow";
import Carousel from "../components/home/Carousel";
import CarouselNz from "../components/home/CarouselNz";
import SecondaryBG from "../global/bg2.png";
import Projects from "../components/home/Projects";
import Products from "../components/home/Products";
import Slogans from "../components/home/Slogans";
import MobileHero from "../components/home/MobileHero";

const PrimaryVertigo = styled.div`
  padding: 100px 200px 20px 200px;
  text-align: center;
  color: ${color.blue};
`;
const PrimaryWrapper = styled.div`
  padding: 0px;
  background: white url(${SecondaryBG}) no-repeat;
  background-position: 100%;
`;
const SecondaryWrapper = styled.div`
  padding: 0px;
  background: white;
`;

const SecondaryVertigo = styled.div`
  padding: 20px;
  text-align: center;
  color: ${color.blue};

  @media ${screen.mdUp} {
    padding: 150px;
  }
`;
const Heading = styled.h1`
  font-size: 30px;
  line-height: 45px;

  @media ${screen.mdUp} {
    font-size: 40px;
    line-height: 55px;
  }
`;

const Child = styled.h2`
  font-size: 22px;
  text-align: center;
  margin: 0px;
  padding-top: 40px;
  color: ${color.blue};
  background: #fff;

  @media ${screen.mdUp} {
    margin-top: 80px;
    background: none;
  }
`;

const PrimaryLink = styled.div`
  svg {
    width: 29px;
    position: relative;
    top: 3px;
    margin-left: 9px;
  }

  a {
    display: block;
    color: ${color.red};
    padding-right: 20px;
    padding-top: 10px;
    text-align: right;

    display: none;
    @media ${screen.mdUp} {
      display: block;
    }
  }
`;

const Title = styled.h1`
  font-size: 26px;
  text-align: center;
  padding-bottom: 20px;
  color: ${color.blue};
`;
const ThirdWrapper = styled.div`
  max-width: 1280px;
  background: white;
  margin: 0 auto;
`;

const BlueWrapper = styled.div`
  background: ${color.blue};
`;
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nz: false };
  }
  componentDidMount() {
    this.props.updateMobileMenuState();
    this.props.updatePageLocation("Home");
    this.checkDomain();
  }
  checkDomain() {
    const domainName = window.location.hostname;
    if (domainName.includes("nz")) {
      this.setState({ nz: true });
    }
  }
  render() {
    return (
      <Fragment>
        <MediaQuery query={screen.mdUp}>
          <Wrapper>
            <PrimaryVertigo>
              <Heading>
                We Connect the Future <br />
                To a Better Futures.
              </Heading>
              <Child>Latest Projects</Child>
            </PrimaryVertigo>
          </Wrapper>
          <BlueWrapper>
            <Projects nz={this.state.nz} />
          </BlueWrapper>
          <Wrapper>
            <PrimaryWrapper>
              <PrimaryLink href="#">
                <Link to="../pages/projects">
                  View All Projects
                  <Arrow />
                </Link>
              </PrimaryLink>
              <SecondaryVertigo>
                <Heading>
                  Taihan, the global cable & solution company <br />
                  is lighting up the world.
                </Heading>
              </SecondaryVertigo>
              <Title>Our Cables</Title>
            </PrimaryWrapper>
          </Wrapper>
          <BlueWrapper>
            <Products />
          </BlueWrapper>
        </MediaQuery>
        <MediaQuery query={screen.smDown}>
          <MobileHero />
          <Child>Latest Projects</Child>
          <Projects nz={this.state.nz} smScreen={true} />
          <Child>Our Cables</Child>
          <Products />
        </MediaQuery>
        <Wrapper>
          <SecondaryWrapper>
            <PrimaryLink href="#">
              <Link to="../pages/products">
                View All Products
                <Arrow />
              </Link>
            </PrimaryLink>
            <SecondaryVertigo>
              <Heading>
                Taihan Leaps up
                <br />
                Vigorously to a Better Future.
              </Heading>
            </SecondaryVertigo>
            <Slogans />
          </SecondaryWrapper>
        </Wrapper>
        <ThirdWrapper>
          {this.state.nz ? <CarouselNz /> : <Carousel />}
        </ThirdWrapper>
      </Fragment>
    );
  }
}
