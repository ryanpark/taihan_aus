import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import { color, screen } from "../global/constant";
import MapBg from "../components/global/gMap.png";
import Pin from "../components/global/Pin";
import PinV from "../components/global/PinV";
import Modal from "react-modal";
import getLocation from "../components/global/Locations";
import CloseButtonSVG from "../global/CloseButton";

const Container = styled.div`
  margin: 0 auto;
  background: white;
`;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  color: ${color.blue};
  padding-bottom: 150px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 40px;
  line-height: 55px;
  padding: 60px;
  text-align: center;
`;

const Inner = styled.div`
  margin: 0 auto;
`;
const TableList = styled.div`
  text-align: left;
  line-height: 23px;
  table {
    margin: 0 auto;

    @media ${screen.mdUp} {
      width: 800px;
    }
  }
  td {
    text-align: center;
    padding-bottom: 40px;

    @media ${screen.mdUp} {
      text-align: left;
      width: 400px;
      padding-right: 40px;
    }
  }
`;
const Line = styled.p`
  margin: 10px 0;

  strong {
    font-weight: bold;
  }
`;
const CloseButton = styled.div`
  text-align: right;
  cursor: pointer;
  right: 10px;
  top: 0px;

  svg {
    width: 40px;
    fill: white;
  }

  @media ${screen.mdUp} {
    margin: 0px;
    position: absolute;
  }
`;

const GlobalMap = styled.div`
  width: 990px;
  height: 961px;
  background: url(${MapBg});
  margin: 0 auto;
  position: relative;

  svg {
    width: 21px;
    position: absolute;
  }
  svg.Sydney {
    bottom: 325px;
    right: 139px;
  }
  svg.Auckland {
    bottom: 311px;
    right: 74px;
  }
  svg.Indonesia {
    bottom: 407px;
    right: 245px;
  }
  svg.Singapore {
    bottom: 436px;
    right: 259px;
  }
  svg.Malaysia {
    bottom: 440px;
    right: 275px;
  }
  svg.Malaysia {
    bottom: 440px;
    right: 275px;
  }
  svg.Vietnam {
    bottom: 459px;
    right: 239px;
  }
  svg.LA {
    top: 395px;
    left: 150px;
  }
  svg.NewJersey {
    top: 401px;
    left: 259px;
  }
  svg.USA {
    top: 382px;
    left: 274px;
  }
  svg.SouthAfrica {
    bottom: 338px;
    left: 517px;
  }
  svg.uk {
    top: 339px;
    left: 448px;
  }
  svg.Russia {
    top: 339px;
    left: 548px;
  }
  svg.Dubai {
    bottom: 493px;
    left: 596px;
  }
  svg.AbuDubai {
    bottom: 483px;
    left: 584px;
  }
  svg.Saudi {
    bottom: 466px;
    left: 568px;
  }
  svg.SaudiArabia {
    bottom: 505px;
    left: 568px;
  }
`;

const Header = styled.h2`
  margin: 5px 0 20px 0;
`;

const Heading = styled.h1`
  font-size: 25px;
  line-height: 27px;
  margin: 60px 0;
`;

const LocationContent = styled.div`
  div {
    margin: 10px 0;
  }
`;

Modal.setAppElement("#root");

export default class Global extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      location: {},
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
    const { props } = this;
    props.updateMobileMenuState();
    props.updatePageLocation("Global");
  }
  renderModal(location) {
    const selectionLocation = getLocation(location);
    this.setState({ location: selectionLocation });
  }
  openModal(location) {
    if (location) {
      this.renderModal(location);
    }
    this.setState({ modalIsOpen: true });
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  render() {
    return (
      <Container>
        <Wrapper>
          <Inner>
            <Title>Global Branch Offices</Title>
            <MediaQuery query={screen.mdUp}>
              <GlobalMap>
                <Pin location="Sydney" openModal={this.openModal} />
                <Pin location="Auckland" openModal={this.openModal} />
                <Pin location="Indonesia" openModal={this.openModal} />
                <Pin location="Singapore" openModal={this.openModal} />
                <Pin location="Malaysia" openModal={this.openModal} />
                <PinV location="Vietnam" openModal={this.openModal} />
                <Pin location="LA" openModal={this.openModal} />
                <Pin location="NewJersey" openModal={this.openModal} />
                <PinV location="USA" openModal={this.openModal} />
                <PinV location="SouthAfrica" openModal={this.openModal} />
                <Pin location="uk" openModal={this.openModal} />
                <Pin location="Russia" openModal={this.openModal} />
                <Pin location="Dubai" openModal={this.openModal} />
                <Pin location="AbuDubai" openModal={this.openModal} />
                <Pin location="Saudi" openModal={this.openModal} />
                <PinV location="SaudiArabia" openModal={this.openModal} />
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  className="ModalLocation"
                  contentLabel="Example Modal"
                  style={{
                    overlay: {
                      zIndex: 999999,
                    },
                    content: {
                      background: "#003084",
                    },
                  }}
                >
                  <LocationContent>
                    <CloseButton onClick={this.closeModal}>
                      <CloseButtonSVG />
                    </CloseButton>
                    {this.state.location ? (
                      <div>
                        <Header>{this.state.location.title}</Header>
                        <div>
                          <iframe
                            src={this.state.location.gmap}
                            title="google map"
                            width="600"
                            height="400"
                          />
                        </div>
                        <div>Address: {this.state.location.address}</div>
                        <div>Tel: {this.state.location.tel}</div>
                        <div>Fax: {this.state.location.fax}</div>
                        <div>Email: {this.state.location.email}</div>
                        <div>Web: {this.state.location.web}</div>
                      </div>
                    ) : (
                      <div>nothing</div>
                    )}
                  </LocationContent>
                </Modal>
              </GlobalMap>
            </MediaQuery>
            <MediaQuery query={screen.mdUp}>
              <Heading>Overseas corporation</Heading>
              <TableList>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <Line>
                          <strong>Taihan VINA</strong>
                        </Line>
                        <Line>
                          21-23 Nguyen Thi Minh Khai Street, <br />
                          Ben Nghe Ward, Distric 1, HCM City
                        </Line>
                        <Line>taihan@taihancable.com</Line>
                      </td>
                      <td>
                        <Line>
                          <strong>Taihan Saudi</strong>
                        </Line>
                        <Line>hslee0822@taihan.com</Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Taihan Netherlands</strong>
                        </Line>
                        <Line>
                          Stroombaan 4(1181 VX), <br />
                          Amsterveen, Netherlands
                        </Line>
                        <Line>
                          T +31-20-358-3541
                          <br />
                          jhhan@taihan.com
                        </Line>
                      </td>
                      <td>
                        <Line>
                          <strong>Taihan USA</strong>
                        </Line>
                        <Line>
                          99 Tulip Ave, Floral Park,
                          <br /> New York 11001, US
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Taihan Kuwait</strong>
                        </Line>
                        <Line>
                          plot no. 123, 125, 127, 129 & 131 in Mina Abdullah
                          <br /> Industrial Area-sector 21, Kuwait
                        </Line>
                        <Line>
                          T: +965-9727-4637
                          <br />
                          F: +965-2552-8508
                          <br />
                          E: jmcho@taihan.com
                        </Line>
                      </td>
                      <td>
                        <Line>
                          <strong>Saudi Taihan Cable & Solution</strong> (In the
                          process of establishing)
                        </Line>
                        <Line>
                          Office No. 18, 3rd Floor, Complex(7) Commercial <br />
                          Center, King Abdul Aziz Road <br />
                          (Near Kingdom Hospital & Kingdom School) P.O.Box
                          300201, Riyadh 11372, KSA
                        </Line>
                        <Line>
                          T: +966-11-230-1554
                          <br />
                          F: +966-11-229-7754
                          <br />
                          frkwak@taihan.com
                        </Line>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TableList>
              <Heading>Overseas branch office</Heading>
              <TableList>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <Line>
                          <strong>Saudi</strong>
                        </Line>

                        <Line>
                          T +966-11-230-1554 <br />F +966-11-229-7754
                          <br />
                          hslee0822@taihan.com
                        </Line>
                      </td>
                      <td>
                        <Line>
                          <strong>Dubai</strong>
                        </Line>
                        <Line> seanlee@taihan.com | info@taihan.ae</Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Abu Dhabi</strong>
                        </Line>
                        <Line>
                          T: +971-2-627-1847 <br />
                          F: +971-2-627-1843
                          <br /> seanlee@taihan.com
                        </Line>
                      </td>
                      <td>
                        <Line>
                          <strong>Australia</strong>
                        </Line>

                        <Line>
                          jameskim@taihan.com | daniellee@taihan.com.au
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Qatar</strong>
                        </Line>
                        <Line>
                          Office No. 12, Building No. 340, Zone 24, <br />
                          Street No. 230 Al Muntaza Doha-Qatar
                        </Line>
                        <Line>
                          T +974-4414-6357 <br />F +974-4415-2243
                          <br />
                          colee@taihan.com
                        </Line>
                      </td>

                      <td>
                        <Line>
                          <strong>Kuwait</strong>
                        </Line>
                        <Line>
                          House No. 8, Basement, Street No. 26, Block No. 4,
                          <br />
                          Sabah Al-Salem, State of Kuwait
                        </Line>
                        <Line>
                          T +965-2552-8642 <br />
                          janghee@taihan.com
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Sweden</strong>
                        </Line>
                        <Line>Drottninggatan 86 111 36 STOCKHOLM</Line>
                        <Line>jhhan@taihan.com</Line>
                      </td>
                      <td>
                        <Line>
                          <strong>Singapore</strong>
                        </Line>
                        <Line>jshuh@taihan.com | bheeyup@taihan.com</Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Malaysia</strong>
                        </Line>
                        <Line>
                          NO. 2-09, Jalan Pandan Prima1, <br />
                          Dataran Pandan Prima, <br />
                          55100 Kuala Lumpur, Malaysia
                        </Line>
                        <Line>
                          T +60-3-9285-8017
                          <br /> F +60-3-9200-1136
                          <br />
                          jshuh@taihan.com | nor@taihan.com.my
                        </Line>
                      </td>
                      <td>
                        <Line>
                          <strong>Indonesia</strong>
                        </Line>
                        <Line>
                          jsnam@taihan.com | veiky.taufik@taihan.co.id
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>USA LA</strong>
                        </Line>
                        <Line>
                          12016 Telegraph Rd., <br />
                          Suite 200 Santa Fe Springs, <br />
                          CA90670, USA
                        </Line>
                        <Line>
                          krkycho2@taihanusa.com | bryce@taihanusa.com
                        </Line>
                      </td>
                      <td>
                        <Line>
                          <strong>USA New Jersey</strong>
                        </Line>

                        <Line>okkwon@taihanusa.com | manny@taihanusa.com</Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>UK</strong>
                        </Line>
                        <Line>
                          dwafe122@taihan.com | songyun.seol@taihan.com |
                          info@taihan.co.uk
                        </Line>
                      </td>
                      <td>
                        <Line>
                          <strong>Denmark</strong>
                        </Line>
                        <Line>
                          Herlev Hovedgade 195, DK-2730 Herlve, Denmark
                        </Line>
                        <Line>jhhan@taihan.com</Line>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TableList>
            </MediaQuery>
            <MediaQuery query={screen.smDown}>
              <Heading>Overseas corporation</Heading>
              <TableList>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <Line>
                          <strong>Taihan VINA</strong>
                        </Line>
                        <Line>
                          21-23 Nguyen Thi Minh Khai Street, <br />
                          Ben Nghe Ward, Distric 1, HCM City
                        </Line>
                        <Line>taihan@taihancable.com</Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Taihan Netherlands</strong>
                        </Line>
                        <Line>
                          Stroombaan 4(1181 VX), <br />
                          Amsterveen, Netherlands
                        </Line>
                        <Line>
                          T +31-20-358-3541
                          <br />
                          jhhan@taihan.com
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Taihan Saudi</strong>
                        </Line>
                        <Line>hslee0822@taihan.com</Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Taihan USA</strong>
                        </Line>
                        <Line>
                          99 Tulip Ave, Floral Park,
                          <br /> New York 11001, US
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Taihan Kuwait</strong>
                        </Line>
                        <Line>
                          plot no. 123, 125, 127, 129 & 131 in Mina Abdullah
                          <br /> Industrial Area-sector 21, Kuwait
                        </Line>
                        <Line>
                          T: +965-9727-4637
                          <br />
                          F: +965-2552-8508
                          <br />
                          jmcho@taihan.com
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Saudi Taihan Cable & Solution</strong> (In the
                          process of establishing)
                        </Line>
                        <Line>
                          Office No. 18, 3rd Floor, Complex(7) Commercial <br />
                          Center, King Abdul Aziz Road <br />
                          (Near Kingdom Hospital & Kingdom School) P.O.Box
                          300201, Riyadh 11372, KSA
                        </Line>
                        <Line>
                          T: +966-11-230-1554
                          <br />
                          F: +966-11-229-7754
                          <br />
                          frkwak@taihan.com
                        </Line>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TableList>
              <Heading>Overseas branch office</Heading>
              <TableList>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <Line>
                          <strong>Saudi</strong>
                        </Line>

                        <Line>
                          T +966-11-230-1554 <br />F +966-11-229-7754
                          <br />
                          hslee0822@taihan.com
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Dubai</strong>
                        </Line>

                        <Line> seanlee@taihan.com | info@taihan.ae</Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Abu Dhabi</strong>
                        </Line>
                        <Line>
                          T +971-2-627-1847 <br />F +971-2-627-1843
                          <br />
                          seanlee@taihan.com
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Australia</strong>
                        </Line>
                        <Line>
                          jameskim@taihan.com | daniellee@taihan.com.au
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Qatar</strong>
                        </Line>
                        <Line>
                          Office No. 12, Building No. 340, Zone 24, <br />
                          Street No. 230 Al Muntaza Doha-Qatar
                        </Line>
                        <Line>
                          T +974-4414-6357 <br />F +974-4415-2243
                          <br /> colee@taihan.com
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Kuwait</strong>
                        </Line>
                        <Line>
                          House No. 8, Basement, Street No. 26, Block No. 4,
                          <br />
                          Sabah Al-Salem, State of Kuwait
                        </Line>
                        <Line>
                          T +965-2552-8642 <br />
                          janghee@taihan.com
                        </Line>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <Line>
                          <strong>Singapore</strong>
                        </Line>
                        <Line> jshuh@taihan.com | bheeyup@taihan.com</Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Malaysia</strong>
                        </Line>
                        <Line>
                          NO. 2-09, Jalan Pandan Prima1, <br />
                          Dataran Pandan Prima, <br />
                          55100 Kuala Lumpur, Malaysia
                        </Line>
                        <Line>
                          T +60-3-9285-8017
                          <br /> F +60-3-9200-1136
                          <br />
                          jshuh@taihan.com | nor@taihan.com.my
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Indonesia</strong>
                        </Line>
                        <Line>
                          jshuh@taihan.com | veiky.taufik@taihan.co.id
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>USA LA</strong>
                        </Line>
                        <Line>
                          12016 Telegraph Rd., <br />
                          Suite 200 Santa Fe Springs, <br />
                          CA90670, USA
                        </Line>
                        <Line>
                          krkycho2@taihanusa.com | bryce@taihanusa.com
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>USA New Jersey</strong>
                        </Line>

                        <Line>okkwon@taihanusa.com | manny@taihanusa.com</Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>UK</strong>
                        </Line>

                        <Line>
                          dwafe122@taihan.com | songyun.seol@taihan.com |
                          info@taihan.co.uk
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Denmark</strong>
                        </Line>
                        <Line>
                          Herlev Hovedgade 195, DK-2730 Herlve, Denmark
                        </Line>
                        <Line>jhhan@taihan.com</Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Sweden</strong>
                        </Line>
                        <Line>Drottninggatan 86 111 36 STOCKHOLM</Line>
                        <Line>jhhan@taihan.com</Line>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TableList>
            </MediaQuery>
          </Inner>
        </Wrapper>
      </Container>
    );
  }
}
