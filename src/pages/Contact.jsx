import React from "react";
import styled from "styled-components";
import { color, screen } from "../global/constant";
import Map from "../components/contact/bgMap.png";
import MapNZ from "../components/contact/bgMapNZ.jpg";
import Iframe from "react-iframe";
import MediaQuery from "react-responsive";

const Container = styled.div`
  margin: 0 auto;
  background: white;
`;
const SecondaryContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Information = styled.div`
  background: ${color.blue};
  background-image: url("${Map}");
  padding: 20px;
  height: 400px;
  background-position: center bottom;
  color: ${color.blue};
  background-size: auto;

  @media ${screen.mdUp} {
    padding: 100px 50px 40px 50px;
  }
`;

const InformationNz = styled.div`
  background: ${color.blue};
  background-image: url("${MapNZ}");
  padding: 20px;
  height: 400px;
  background-position: center bottom;
  color: ${color.blue};
  background-size: cover;

  @media ${screen.mdUp} {
    padding: 100px 50px 40px 50px;
  }
`;

const Paragraph = styled.p`
  line-height: 24px;
  margin-bottom: 20px;
`;
const Inner = styled.div`
  padding-top: 100px;
  font-weight: lighter;
`;
const Wrapper = styled.div`
  height: 400px;
  width: 400px;
  padding: 5px;
  text-align: center;
  border-radius: 50%;
  display: inline-block;
  color: #fff;
  font-size: 1.1em;
  font-weight: 600;
  background-color: ${color.blue};
  @media ${screen.mdUp} {
    margin-right: 200px;
    margin-top: -52px;
  }
`;
const BoldText = styled.span`
  font-weight: bold;
`;
const mapUrl =
  "https://www.google.com/maps/place/Taihan+Electric+Australia+Pty+Ltd/@-33.7963545,151.1788289,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12a8d3b5b61cdf:0xad00a21fa350068d!8m2!3d-33.7963545!4d151.1788289!16s%2Fg%2F11cls6cdy8?hl=en&entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D";
const nzMapUrl = "https://goo.gl/maps/X6JYB75EyL32";

const MapLink = styled.a`
  display: block;
  text-decoration: underline;
`;

const Bold = styled.span`
  font-size: 22px;
`;

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nz: false };
  }
  componentDidMount() {
    const { props } = this;
    props.updateMobileMenuState();
    props.updatePageLocation("Contact");
    this.checkDomain();
  }
  checkDomain() {
    const domainName = window.location.hostname;
    if (domainName.includes("nz")) {
      this.setState({ nz: true });
    }
  }
  render() {
    const iframeUrl = this.state.nz
      ? "//www.123formbuilder.com/my-contact-form-4573152.html"
      : "//www.123formbuilder.com/my-contact-form-4485387.html";

    return (
      <div>
        <MediaQuery query={screen.mdUp}>
          {!this.state.nz ? (
            <Information>
              <SecondaryContainer>
                <Wrapper>
                  <Inner>
                    <Paragraph>
                      <Bold>Taihan Electric Australia Pty Ltd</Bold>
                    </Paragraph>
                    <Paragraph>
                      Suite 704, 815 Pacific Highway,
                      <br /> Chatswood NSW 2067 Australia
                    </Paragraph>
                    <Paragraph>
                      <BoldText>p</BoldText> +61 (0)2 9411 7564 <br />
                      <BoldText>f</BoldText> +61 (0)2 9411 7579 <br />
                      <BoldText>e</BoldText> sales@taihan.com.au <br />
                      &nbsp;&nbsp;&nbsp;accounts@taihan.com.au
                      <br />
                      <br />
                      <MapLink href={mapUrl} target="_blank">
                        Google Map
                      </MapLink>
                    </Paragraph>
                  </Inner>
                </Wrapper>
              </SecondaryContainer>
            </Information>
          ) : (
            <InformationNz>
              <SecondaryContainer>
                <Wrapper>
                  <Inner>
                    <Paragraph>
                      <Bold>Taihan New Zealand Limited</Bold>
                    </Paragraph>
                    <Paragraph>
                      Suite 7, 325 Ti Rakau Drive, <br /> Burswood, Auckland,
                      New Zealand 2013
                    </Paragraph>
                    <Paragraph>
                      <BoldText>p</BoldText> +64-27-653-2359 <br />
                      <BoldText>e</BoldText> c.kim@taihan.co.nz <br />
                      &nbsp;&nbsp;&nbsp;sales@taihan.co.nz
                      <br />
                      <br />
                      <MapLink href={nzMapUrl} target="_blank">
                        Google Map
                      </MapLink>
                    </Paragraph>
                  </Inner>
                </Wrapper>
              </SecondaryContainer>
            </InformationNz>
          )}
        </MediaQuery>
        <MediaQuery query={screen.smDown}>
          <SecondaryContainer>
            <Wrapper>
              {!this.state.nz ? (
                <Inner>
                  <Paragraph>
                    <Bold>Taihan Electric Australia Pty Ltd</Bold>
                  </Paragraph>
                  <Paragraph>
                    Suite 704, 815 Pacific Highway,
                    <br /> Chatswood NSW 2067 Australia
                  </Paragraph>
                  <Paragraph>
                    <BoldText>p</BoldText> +61 -2-9411-7564 <br />
                    <BoldText>f</BoldText> +61 -2-9411-7579 <br />
                    <BoldText>e</BoldText> sales@taihan.com.au <br />
                    &nbsp;&nbsp;&nbsp;accounts@taihan.com.au
                    <br />
                    <br />
                    <MapLink href={mapUrl} target="_blank">
                      Google Map
                    </MapLink>
                  </Paragraph>
                </Inner>
              ) : (
                <Inner>
                  <Paragraph>
                    <Bold>Taihan Electric New Zealand Pty Ltd</Bold>
                  </Paragraph>
                  <Paragraph>
                    Suite 7, 325 Ti Rakau Drive, <br /> Burswood, Auckland, New
                    Zealand 2013
                  </Paragraph>
                  <Paragraph>
                    <BoldText>p</BoldText> +64-27-653-2359 <br />
                    <BoldText>e</BoldText> c.kim@taihan.co.nz <br />
                    &nbsp;&nbsp;&nbsp;sales@taihan.co.nz
                    <br />
                    <br />
                    <MapLink href={nzMapUrl} target="_blank">
                      Google Map
                    </MapLink>
                  </Paragraph>
                </Inner>
              )}
            </Wrapper>
          </SecondaryContainer>
          <Information />
        </MediaQuery>
        <Container>
          <Iframe
            url={iframeUrl}
            width="100%"
            height="800px"
            id="contactform123"
            allowTransparency
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen
          />
        </Container>
      </div>
    );
  }
}
