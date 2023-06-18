import React, { Fragment } from "react";
import styled from "styled-components";
import { color, screen } from "../global/constant";
import PdfIcon from "../global/Pdf";
import whiteBg from "../global/bgg.png";
import whiteBgg from "../global/bggg.png";
import whiteBggg from "../global/bg33.png";

import pcone from "../components/products/pc1.jpg";
import pctwo from "../components/products/pc2.jpg";
import pcthree from "../components/products/pc3.jpg";
import pcfour from "../components/products/pc4.jpg";
import pcfive from "../components/products/pc5.jpg";
import pcsix from "../components/products/pc6.jpg";
import pcseven from "../components/products/pc7.jpg";
import pceight from "../components/products/pc8.jpg";
import pcnine from "../components/products/pc9.jpg";
import pcten from "../components/products/pc10.jpg";
import pceleven from "../components/products/pc11.jpg";

const Wrapper = styled.div`
  background: ${color.blue};
  padding: 0px 20px;
  max-width: 1280px;
  margin: 0 auto;

  @media ${screen.mdUp} {
    background-image: url(${whiteBg});
    background-repeat: no-repeat;
    background-position: 100% 1px;
  }
`;

const SecondaryWrapper = styled.div`
  background: ${color.blue};
  padding: 0px 20px;
  max-width: 1280px;
  margin: 0 auto;
  @media ${screen.mdUp} {
    background-image: url(${whiteBggg});
    background-repeat: no-repeat;
    background-position: 50% 253px;
  }
`;

const ThirdWrapper = styled.div`
  padding: 20px 20px;
  max-width: 1280px;
  margin: 0 auto;
  color: ${color.blue};

  @media ${screen.mdUp} {
    background-image: url(${whiteBgg});
    background-repeat: no-repeat;
    background-position: 100% -80px;
  }

  a {
    color: ${color.blue};
  }
`;

const PowerCables = styled.div`
  padding: 100px 0 50px 0;
  display: flex;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-size: 30px;
  line-height: 41px;
  margin-bottom: 20px;
  font-weight: lighter;

  @media ${screen.mdUp} {
    font-size: 40px;
    line-height: 55px;
  }
`;

const Paragraph = styled.p`
  line-height: 24px;
  margin-bottom: 20px;
`;

const Content = styled.div``;

const Listing = styled.div`
  display: flex;
  padding: 0px 0px 20px 0px;
  flex-wrap: wrap;

  @media ${screen.mdUp} {
    flex-wrap: nowrap;
  }
`;

const Link = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0;

  span {
    margin-left: 10px;
  }
`;

const List = styled.div`
  margin-right: 0px;

  @media ${screen.lgDown} {
    margin-right: 30px;
  }

  @media ${screen.xlgUp} {
    margin-right: 120px;
  }
  svg {
    width: 28px;
  }
`;

const Img = styled.img`
  display: block;
`;

const Telecomunication = styled.div`
  margin-top: 30px;
  display: flex;
  padding: 0px 0 50px 0;
  align-items: flex-start;
`;
const BaseMetal = styled.div`
  margin-top: 30px;
  padding: 0px 0 50px 0;
`;

const Container = styled.div`
  padding-bottom: 100px;
  background: white;
`;
export default class Products extends React.Component {
  componentDidMount() {
    const { props } = this;
    props.updateMobileMenuState();
    props.updatePageLocation("Products");

    if (window.pageYOffset > 0) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <Fragment>
        <Wrapper>
          <PowerCables>
            <Content>
              <Title>Power Cables</Title>
              <Paragraph>
                A leading supplier in extra-high voltage wire and cable, Taihan
                has successfully <br />
                Developed in 1976 the 154KV OF Cable, the ninth in the world an
                the first time in Korea.
                <br />
                Since that time on, we have intensified our effort in investment
                and technical skill building,
                <br />
                Producing the 154KV XLPE, 345KV OF cable for domestic and
                overseas markets.
                <br />
                In response to the ever-increasing power consumption and the
                expansion of extra
                <br />
                High voltage cable demand, Taihan expanded on 1996 the
                production
              </Paragraph>
            </Content>
          </PowerCables>
          <Listing>
            <List>
              <Img alt="power cable" src={pcone} />
              <Link
                href="https://www.taihan.com/customer/catalogue"
                target="_blank"
              >
                <PdfIcon /> <span>EHV XLPE Cable</span>
              </Link>
            </List>
            <List>
              <Img alt="power cable" src={pctwo} />
              <Link
                href="https://www.taihan.com/customer/catalogue"
                target="_blank"
              >
                <PdfIcon /> <span>EHV Cable Accessories</span>
              </Link>
            </List>
            <List>
              <Img alt="power cable" src={pcthree} />
              <Link
                href="https://www.taihan.com/customer/catalogue"
                target="_blank"
              >
                <PdfIcon /> <span>EHV OF Cable & Accessories</span>
              </Link>
            </List>
            <List>
              <Img alt="power cable" src={pcfour} />
              <Link
                href="https://www.taihan.com/customer/catalogue"
                target="_blank"
              >
                <PdfIcon /> <span>MV/LV CABLE & WIRE</span>
              </Link>
            </List>
          </Listing>
          <Listing>
            <List>
              <Img alt="power cable" src={pcfive} />
              <Link
                href="https://www.taihan.com/customer/catalogue"
                target="_blank"
              >
                <PdfIcon /> <span>ACCC Conductors</span>
              </Link>
            </List>
            <List>
              <Img alt="power cable" src={pcsix} />
              <Link
                href="https://www.taihan.com/customer/catalogue"
                target="_blank"
              >
                <PdfIcon /> <span>AL Conductors</span>
              </Link>
            </List>
            <List>
              <Img alt="power cable" src={pcseven} width="236" height="328" />
              <Link
                href="https://www.taihan.com/customer/catalogue"
                target="_blank"
              >
                <PdfIcon /> <span>T-BUSWAY BUSDUCT SYSTEM</span>
              </Link>
            </List>
            <List>
              <Img alt="power cable" src={pceight} width="236" height="328" />
              <Link
                href="https://www.taihan.com/customer/catalogue"
                target="_blank"
              >
                <PdfIcon />
                <span>
                  TF-BUSWAY <br /> BUSDUCT SYSTEM
                </span>
              </Link>
            </List>
          </Listing>
        </Wrapper>
        <Container>
          <ThirdWrapper>
            <Telecomunication>
              <Content id="teleComunication">
                <Title>Telecomunication</Title>
                <Paragraph>
                  From cable supplies to installation services and
                  communications cable solutions, <br />
                  Taihan is leading the industry, with the biggest production
                  capacity in the world.
                  <br /> In terms of product variety, Taihan produces primary
                  cable, seconary cable and indoor Cable <br />
                  such diverse forms as duct cable, overhead transmission lines,
                  tap armoured Buried cable,
                  <br /> and wire armoured submarine cable, contributing in a
                  significant way to the global infrastructure development
                </Paragraph>
              </Content>
            </Telecomunication>
            <Listing>
              <List>
                <Img alt="power cable" src={pcnine} />
                <Link
                  href="https://www.taihan.com/customer/catalogue"
                  target="_blank"
                >
                  <PdfIcon /> <span>Link Master</span>
                </Link>
              </List>
            </Listing>
          </ThirdWrapper>
        </Container>
        <SecondaryWrapper>
          <BaseMetal>
            <Content>
              <Title>Base Metal</Title>
              <Paragraph>
                Taihan has introduced the state-of-the-art SCR system that
                allows us to <br />
                Control automatically the whole production lines, analyse the
                collected data,
                <br />
                And thereby produce the highest-quality rods.
                <br />
                In our in-house shaft furnace, the nation’s biggest, we can
                produce high-quality
                <br />
                Rods whose maximum casting diameter is up to 10.2. sq. in
              </Paragraph>
            </Content>
          </BaseMetal>
          <Listing>
            <List>
              <Img alt="power cable" src={pceleven} />
              <Link
                href="https://www.taihan.com/customer/catalogue"
                target="_blank"
              >
                <PdfIcon /> <span>Copper Rod</span>
              </Link>
            </List>
          </Listing>
          <div id="baseMetal" />
        </SecondaryWrapper>
      </Fragment>
    );
  }
}
