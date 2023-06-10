import React from "react";
import styled from "styled-components";
import { color, screen } from "../global/constant";
import QIcon from "../components/certificates/QIcon";
import RycycleIcon from "../components/certificates/recycleSign";
import ShieldIcon from "../components/certificates/shieldIcon";

import Ks from "../imgs/ks.jpg";
import Kc from "../imgs/kc.jpg";
import Kema from "../imgs/kema.jpg";
import Ul from "../imgs/ul.jpg";
import Pse from "../imgs/pse.jpg";
import Sabs from "../imgs/sabs.jpg";
import Gostr from "../imgs/go.jpg";
import Bsi from "../imgs/bsi.jpg";
import Eco from "../imgs/ecolabel.jpg";
import Rohs from "../imgs/rohs.jpg";
import Iso from "../imgs/svg-logo-ISO-14001.jpg";
import Mot from "../imgs/mot.gif";
import ISO90001 from "../imgs/iso9001.png";
import jazIso from "../imgs/jaz-iso.jpg";

const Wrapper = styled.div`
  background: ${color.blue};
  max-width: 1280px;
  margin: 0 auto;
  @media ${screen.mdUp} {
    img {
      width: auto;
    }
  }
`;

const QualityCertificates = styled.div`
  padding: 50px 50px;
`;

const EnviromentCertificates = styled.div`
  padding: 0px 50px;

  svg {
    fill: white;
  }
`;

const SafetyHealthCertificates = styled.div`
  padding: 50px 50px;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: lighter;
  font-size: 30px;
  display: block;

  svg {
    width: 60px;
    padding-bottom: 20px;
    display: block;
    margin: 0 auto;
  }

  @media ${screen.mdUp} {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 89px;
      display: inline-block;
      padding: 0px;
      margin: 20px 20px 20px 20px;
    }
  }
`;
const Listing = styled.div`
  display: block;
  justify-content: space-around;
  margin-bottom: 80px;

  @media ${screen.mdUp} {
    display: flex;
  }
`;
const List = styled.div`
  display: block;
  margin-bottom: 25px;

  @media ${screen.mdUp} {
    display: flex;
    width: 50%;
    margin-bottom: 0px;
  }

  ul {
    list-style-type: circle;
    padding-left: 20px;
    li {
      margin: 10px 0;
      line-height: 16px;
    }
  }
`;
const Details = styled.div`
  margin: 10px 0px;

  @media ${screen.mdUp} {
    margin: 0 10px;
  }
  p {
    margin: 0px 0;
  }
`;
const Img = styled.img`
  margin-right: 10px;
`;
const Heading = styled.h1`
  margin: 40px 0;
  font-size: 22px;
`;

const P = styled.p`
  text-decoration: underline;
`;
export default class Certificates extends React.Component {
  componentDidMount() {
    const { props } = this;
    props.updateMobileMenuState();
    props.updatePageLocation("Certificates");
  }
  render() {
    return (
      <Wrapper>
        <QualityCertificates>
          <Title>
            <QIcon />
            Quality Certificates
          </Title>
          <Heading>Product</Heading>
          <Listing>
            <List>
              <Img src={Ks} width="121" height="120" />
              <Details>
                <P>KS</P>
                <ul>
                  <li>
                    [Wire] 14 items including polyethylene insulation vinyl
                    sheath, urban twin cable
                  </li>
                  <li> [Instrumentation] Induction-type watt hour meter</li>
                  <li>Korea Standards Association</li>
                </ul>
              </Details>
            </List>

            <List>
              <Img src={Kc} width="92" height="124" />
              <Details>
                <P>Safety Certification</P>
                <ul>
                  <li>
                    After expiration, earned the safety certification again
                  </li>
                  <li> Date of Award: January 2002 (initial award date)</li>
                  <li>
                    4 products and 63 types including the vinyl armored cable
                  </li>
                  <li>Korea Testing Certification</li>
                </ul>
              </Details>
            </List>
          </Listing>
          <Listing>
            <List>
              <Img src={Kema} width="138" height="52" />
              <Details>
                <P>KEMA</P>
                <ul>
                  <li>May 1985 (initial award date)</li>
                  <li>
                    5 types including extra-high voltage OF cable; 4 types
                    including 400kV extra-high voltage XLPE cable
                  </li>
                </ul>
              </Details>
            </List>

            <List>
              <Img src={Ul} width="109" height="109" />
              <Details>
                <P>United States UL</P>
                <ul>
                  <li>November 1974 (initial award date)</li>
                  <li>13 products and 15 types including fixture wire</li>
                  <li>UL (United States)</li>
                </ul>
              </Details>
            </List>
          </Listing>
          <Listing>
            <List>
              <Img src={Pse} width="122" height="119" />
              <Details>
                <P>JET-PSE</P>
                <ul>
                  <li>April 28 2003 (initial award date)</li>
                  <li>
                    1 product and 13 types including synthetic resin Insulated
                    Wire
                  </li>
                  <li>PSE JET</li>
                </ul>
              </Details>
            </List>

            <List>
              <Img src={Mot} width="98" height="70" />
              <Details>
                <P>Ministry of Trade</P>
                <ul>
                  <li>April, 1998 (initial award date)</li>
                  <li>
                    Composite resin insulated wire & cable and one item and 5
                    types
                  </li>
                  <li>Ministry of Trade, Japan</li>
                </ul>
              </Details>
            </List>
          </Listing>
          <Listing>
            <List>
              <Img src={Sabs} width="130" height="78" />
              <Details>
                <P>SABS, South African Republic</P>
                <ul>
                  <li>September 1999</li>
                  <li>3.8/6kV - 19/33kV XLPE cable</li>
                  <li>SABS (the Rep. of South Africa)</li>
                </ul>
              </Details>
            </List>

            <List>
              <Img src={Gostr} width="106" height="103" />
              <Details>
                <P>GOSTR, Russia</P>
                <ul>
                  <li>
                    After expiration, earned the safety certification again
                  </li>
                  <li>Date of Award: January 2002 (initial award date)</li>
                  <li>
                    4 products and 63 types including the vinyl armored cable
                  </li>
                  <li>Korea Testing Certification</li>
                </ul>
              </Details>
            </List>
          </Listing>
          <Heading>System</Heading>
          <Listing>
            <List>
              <Img src={Bsi} width="245" height="123" />
              <Details>
                <P>SABS, South African Republic</P>
                <ul>
                  <li>September 1999</li>
                  <li>3.8/6kV - 19/33kV XLPE cable</li>
                  <li>SABS (the Rep. of South Africa)</li>
                </ul>
              </Details>
            </List>
            <List>
              <Img src={ISO90001} />
              <Details>
                <P>ISO9001</P>
                <ul>
                  <li>
                    Certified to ISO 9001 certification in November 1993 and
                    current in use throughout the company sites
                  </li>
                </ul>
              </Details>
            </List>
          </Listing>
        </QualityCertificates>

        <EnviromentCertificates>
          <Title>
            <RycycleIcon />
            Enviroment Certificates
          </Title>
          <Heading>Product</Heading>
          <Listing>
            <List>
              <Img src={Eco} width="121" height="129" />
              <Details>
                <P>Environmentally Friendly Products</P>
                <ul>
                  <li>Date of Award : February 10, 2006 </li>
                  <li>
                    Certification-awarding Organization : Korea Environmental
                    Industry & Technology Institute
                  </li>
                </ul>
              </Details>
            </List>
            <List>
              <Img src={Rohs} width="121" height="119" />
              <Details>
                <P>Environmentally Friendly Products</P>
                <ul>
                  <li>Date of Award : January 24, 2006 </li>
                  <li>
                    Certification-awarding Organization : ITS (Intertek Testing
                    Service) Shenzhen
                  </li>
                </ul>
              </Details>
            </List>
          </Listing>
          <Heading>System</Heading>
          <Listing>
            <List>
              <Img src={Iso} width="265" height="115" />
              <Details>
                <P>ISO 14001</P>
                <ul>
                  <li>
                    Certified to ISO 14001 certification from SGS-ICS in
                    February 2001 for the Anyang and Dangjin sites and currently
                    these sites are working to incorporate it.
                  </li>
                </ul>
              </Details>
            </List>
            <List />
          </Listing>
        </EnviromentCertificates>

        <SafetyHealthCertificates>
          <Title>
            <ShieldIcon />
            Safety & Health Certificates
          </Title>
          <Heading>System</Heading>
          <Listing>
            <List>
              <Img src={jazIso} />
              <Details>
                <P>ISO 45001</P>
              </Details>
            </List>
            <List></List>
          </Listing>
        </SafetyHealthCertificates>
      </Wrapper>
    );
  }
}
