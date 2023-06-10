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
      location: {}
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
                      zIndex: 999999
                    },
                    content: {
                      background: "#003084"
                    }
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
                          <strong>M-TEC</strong>
                        </Line>
                        <Line>
                          1 Steel Road, Peacehaven, Vereeniging 1939, <br />
                          Gauteng, South Africa
                        </Line>
                        <Line>
                          T +27-16-450-8220 <br />F +27-16-450-8202
                          <br />E info@m-tec.co.za
                          <br />W www.m-tec.co.za
                        </Line>
                      </td>
                      <td>
                        <Line>
                          <strong>Taihan VNA</strong>
                        </Line>
                        <Line>
                          Factory : Long Thanh IZ, <br />
                          Dong Nai Province, Vietnam HCMC
                          <br />
                          Rep : 2nd floor, 617 Dien <br />
                          Bien Phu Str., W.25, Binh Thanh District, <br />
                          HCMC, Vietnam.
                          <br />
                        </Line>
                        <Line>
                          T +84-28-3518-0786 <br />
                          F +84-28-3518-0785 <br />
                          E ysshin@taihancable.com
                          <br />W www.taihancable.com.vn
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Taihan Saudi</strong>
                        </Line>
                        <Line>
                          Exit-12, Al Kharj Road, <br />
                          PO Box 31329,
                          <br /> Riyadh 11497, K.S.A
                        </Line>
                        <Line>
                          T +966-11-214-2012
                          <br />F +966-11-214-2237
                          <br />E sikim@taihan.com | si.kim@sauditaihan.com
                        </Line>
                      </td>
                      <td>
                        <Line>
                          <strong>Taihan USA</strong>
                        </Line>
                        <Line>
                          12016 Telegraph Rd., <br />
                          Suite 200 Santa Fe Springs,
                          <br /> CA 90670 USA
                          <br />
                        </Line>
                        <Line>
                          T +1-562-946-8500 <br />F +1-562-946-0200 <br />E
                          cwlee@taihanusa.com | cwlee@taihan.com
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
                          Office No.18, 3rd Floor, Complex(7) Commercial Center
                          <br />
                          King Abdul Aziz Road P.O.Box300201, <br /> Riyadh
                          11372, K.S.A.
                          <br />
                        </Line>
                        <Line>
                          T +966-11-410-1773 <br />F +966-11-419-0262
                          <br />E jhshim@taihan.com | hslee0822@taihan.com
                        </Line>
                      </td>
                      <td>
                        <Line>
                          <strong>Dubai</strong>
                        </Line>
                        <Line>
                          Office No.908, Al Shafar Tower 1, <br />
                          TECOM, P.O.Box 117561,
                          <br />
                          Dubai, UAE <br />
                        </Line>
                        <Line>
                          T +971-4-368-8988 <br />F +971-4-368-6779 <br /> E
                          jshuh@taihan.com | sales@taihan.ae
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Abu Dhabi</strong>
                        </Line>
                        <Line>
                          Office No. 1902, Bin Hamoodah Tower,
                          <br /> Khaleej Al Arabi St. PO Box 54562,
                          <br /> Abu Dhabi, UAE
                          <br />
                        </Line>
                        <Line>
                          T +1-562-946-8500 <br />F +1-562-946-0200
                          <br />E jshuh@taihan.com
                        </Line>
                      </td>
                      <td>
                        <Line>
                          <strong>Australia</strong>
                        </Line>
                        <Line>
                          Suite 704, 815 Pacific Highway, <br />
                          Chatswood, NSW 2067, Australia
                          <br />
                        </Line>
                        <Line>
                          T +61-2-9411-7564 <br />F +61-2-9411-7579 <br /> E
                          sw1012@taihan.com | sw1012@taihan.com.au
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>New Zealand</strong>
                        </Line>
                        <Line>
                          7/325 Ti Rakau Drive, Burswood,
                          <br /> Auckland 2013, New Zealand
                        </Line>
                        <Line>
                          T +64-9-973-5062
                          <br />E c.kim@taihan.co.nz
                        </Line>
                      </td>
                      <td>
                        <Line>
                          <strong>Singapore</strong>
                        </Line>
                        <Line>
                          150 Kampong Ampat #07-04 KA CENTRE Singapore 368324,
                          <br />
                          Republic of Singapore
                        </Line>
                        <Line>
                          T +65-6842-5069 <br />F +65-6842-5076 <br /> E
                          jsnam@taihan.com | yda23@taihan.com
                        </Line>
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
                          <br />E jsnam@taihan.com | nor@taihan.com.my
                        </Line>
                      </td>
                      <td>
                        <Line>
                          <strong>Indonesia</strong>
                        </Line>
                        <Line>
                          Graha Surveyor Indonesia, <br />
                          19th Floor Suite 1903 Jl.Gatot Subroto Kav.
                          <br /> 56 Jakarata Selatan 12950, Indonesia
                        </Line>
                        <Line>
                          T +62 21 2941 0780 <br />F +62 21 2941 0775 <br /> E
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
                          T +1-562-946-8500
                          <br /> F +1-562-946-0200
                          <br />E cwlee@taihanusa.com | cwlee@taihan.com
                        </Line>
                      </td>
                      <td>
                        <Line>
                          <strong>USA New Jersey</strong>
                        </Line>
                        <Line>
                          560 Sylvan Ave 3rd Floor Englewood Cliffs, <br />
                          NJ 07632
                        </Line>
                        <Line>
                          T +1-201-569-2493 <br /> E dookim@taihanusa.com
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Russia</strong>
                        </Line>
                        <Line>
                          117335, Moscow, Vavilova street,
                          <br /> 69/75, office no. 1133, Russia
                        </Line>
                        <Line>
                          T +7- 495-225-9591
                          <br />E alexlee@taihan.com
                        </Line>
                      </td>
                      <td>
                        <Line>
                          <strong>UK</strong>
                        </Line>
                        <Line>
                          9 Teddington Business Park, Station Road, <br />
                          Teddington, Middlesex TW11 9BQ, UK
                        </Line>
                        <Line>
                          T +44-20-8943-4901 <br /> E jhhan@taihan.com
                          taihanuk@taihan.com
                        </Line>
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
                          <strong>M-TEC</strong>
                        </Line>
                        <Line>
                          1 Steel Road, Peacehaven, Vereeniging 1939, <br />
                          Gauteng, South Africa
                        </Line>
                        <Line>
                          T +27-16-450-8220 <br />F +27-16-450-8202
                          <br />E info@m-tec.co.za
                          <br />W www.m-tec.co.za
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Taihan VNA</strong>
                        </Line>
                        <Line>
                          Factory : Long Thanh IZ, <br />
                          Dong Nai Province, Vietnam HCMC
                          <br />
                          Rep : 2nd floor, 617 Dien <br />
                          Bien Phu Str., W.25, Binh Thanh District, <br />
                          HCMC, Vietnam.
                          <br />
                        </Line>
                        <Line>
                          T +84-28-3518-0786 <br />
                          F +84-28-3518-0785 <br />
                          E ysshin@taihancable.com
                          <br />W www.taihancable.com.vn
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Taihan Saudi</strong>
                        </Line>
                        <Line>
                          Exit-12, Al Kharj Road, <br />
                          PO Box 31329,
                          <br /> Riyadh 11497, K.S.A
                        </Line>
                        <Line>
                          T +966-11-214-2012
                          <br />F +966-11-214-2237
                          <br />E sikim@taihan.com | si.kim@sauditaihan.com
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Taihan USA</strong>
                        </Line>
                        <Line>
                          12016 Telegraph Rd., <br />
                          Suite 200 Santa Fe Springs,
                          <br /> CA 90670 USA
                          <br />
                        </Line>
                        <Line>
                          T +1-562-946-8500 <br />F +1-562-946-0200 <br />E
                          cwlee@taihanusa.com | cwlee@taihan.com
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
                          Office No.18, 3rd Floor, Complex(7) Commercial Center
                          <br />
                          King Abdul Aziz Road P.O.Box300201, <br /> Riyadh
                          11372, K.S.A.
                          <br />
                        </Line>
                        <Line>
                          T +966-11-410-1773 <br />F +966-11-419-0262
                          <br />E jhshim@taihan.com | hslee0822@taihan.com
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Dubai</strong>
                        </Line>
                        <Line>
                          Office No.908, Al Shafar Tower 1, <br />
                          TECOM, P.O.Box 117561,
                          <br />
                          Dubai, UAE <br />
                        </Line>
                        <Line>
                          T +971-4-368-8988 <br />F +971-4-368-6779 <br /> E
                          jshuh@taihan.com | sales@taihan.ae
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Abu Dhabi</strong>
                        </Line>
                        <Line>
                          Office No. 1902, Bin Hamoodah Tower,
                          <br /> Khaleej Al Arabi St. PO Box 54562,
                          <br /> Abu Dhabi, UAE
                          <br />
                        </Line>
                        <Line>
                          T +1-562-946-8500 <br />F +1-562-946-0200
                          <br />E jshuh@taihan.com
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Australia</strong>
                        </Line>
                        <Line>
                          Suite 704, 815 Pacific Highway, <br />
                          Chatswood, NSW 2067, Australia
                          <br />
                        </Line>
                        <Line>
                          T +61-2-9411-7564 <br />F +61-2-9411-7579 <br /> E
                          sw1012@taihan.com | sw1012@taihan.com.au
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>New Zealand</strong>
                        </Line>
                        <Line>
                          7/325 Ti Rakau Drive, Burswood,
                          <br /> Auckland 2013, New Zealand
                        </Line>
                        <Line>
                          T +64-9-973-5062
                          <br />E c.kim@taihan.co.nz
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Singapore</strong>
                        </Line>
                        <Line>
                          150 Kampong Ampat #07-04 KA CENTRE Singapore 368324,
                          <br />
                          Republic of Singapore
                        </Line>
                        <Line>
                          T +65-6842-5069 <br />F +65-6842-5076 <br /> E
                          jsnam@taihan.com | yda23@taihan.com
                        </Line>
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
                          <br />E jsnam@taihan.com | nor@taihan.com.my
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Indonesia</strong>
                        </Line>
                        <Line>
                          Graha Surveyor Indonesia, <br />
                          19th Floor Suite 1903 Jl.Gatot Subroto Kav.
                          <br /> 56 Jakarata Selatan 12950, Indonesia
                        </Line>
                        <Line>
                          T +62 21 2941 0780 <br />F +62 21 2941 0775 <br /> E
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
                          T +1-562-946-8500
                          <br /> F +1-562-946-0200
                          <br />E cwlee@taihanusa.com | cwlee@taihan.com
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>USA New Jersey</strong>
                        </Line>
                        <Line>
                          560 Sylvan Ave 3rd Floor Englewood Cliffs, <br />
                          NJ 07632
                        </Line>
                        <Line>
                          T +1-201-569-2493 <br /> E dookim@taihanusa.com
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>Russia</strong>
                        </Line>
                        <Line>
                          117335, Moscow, Vavilova street,
                          <br /> 69/75, office no. 1133, Russia
                        </Line>
                        <Line>
                          T +7- 495-225-9591
                          <br />E alexlee@taihan.com
                        </Line>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Line>
                          <strong>UK</strong>
                        </Line>
                        <Line>
                          9 Teddington Business Park, Station Road, <br />
                          Teddington, Middlesex TW11 9BQ, UK
                        </Line>
                        <Line>
                          T +44-20-8943-4901 <br /> E jhhan@taihan.com
                          taihanuk@taihan.com
                        </Line>
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
