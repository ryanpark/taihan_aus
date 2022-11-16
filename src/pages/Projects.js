import React, { Fragment } from "react";
import styled from "styled-components";
import { color } from "../global/constant";
import au1 from "../components/projects/au1.jpg";
import selectedau1 from "../components/projects/au1_1.jpg";
import au2 from "../components/projects/au2.jpg";
import selectedau2 from "../components/projects/au2_2.jpg";
import au3 from "../components/projects/au3.jpg";
import selectedau3 from "../components/projects/au3_3.jpg";
import au4 from "../components/projects/au4.jpg";
import selectedau4 from "../components/projects/au4_4.jpg";
import nz1 from "../components/projects/nz1.jpg";
import selectednz1 from "../components/projects/nz1_1.jpg";
import nz2 from "../components/projects/nz2.jpg";
import selectednz2 from "../components/projects/nz2_2.jpg";
import Project from "../components/projects/Project";

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  background: ${color.blue};
  color: white;
  padding-bottom: 150px;
`;

const ProjectList = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  span {
    :hover {
      text-decoration: underline;
    }
  }
`;

const Title = styled.h1`
  font-size: 40px;
  line-height: 55px;
  padding: 60px;
  font-weight: lighter;
  text-align: center;
`;

export default class Projects extends React.Component {
  state = { nz: false };

  componentDidMount() {
    const { props } = this;
    props.updateMobileMenuState();
    props.updatePageLocation("Projects");
    if (window.pageYOffset > 0) {
      window.scrollTo(0, 0);
    }
    this.checkDomain();
  }
  checkDomain() {
    const domainName = window.location.hostname;
    if (domainName.includes("nz")) {
      this.setState({ nz: true });
    }
  }
  updateShowState() {
    this.setState({ isHiding: !this.state.isHiding });
  }
  render() {
    const AusProjects = () => (
      <ProjectList>
        <Project
          imgSrc={au1}
          index={1}
          isHiding={this.state.isHiding}
          updateShowState={this.updateShowState.bind(this)}
          selectedSrc={selectedau1}
          direction="right"
          title={
            <span>
              Turnkey Design & Construct - <br />
              Homebush to Top Ryde 132Kv feeders. (2017)
            </span>
          }
          description={
            <span>
              The general scope of work for this contract included design
              ductline construction, manufacture, supply, installation, jointing
              and termination of two new underground 132 kV cable circuits over
              5,700 metres between Homebush and Top Ryde in Sydney to replace
              the existing oil filled feeders. The works involved complex design
              and contract constraints with crossing over the 300 metre wide
              Parramatta River on multiple occasions that required innovative
              solutions. Overall project took about one year and finally
              completed in late 2017
            </span>
          }
        />
        <Project
          imgSrc={au2}
          index={2}
          isHiding={this.state.isHiding}
          updateShowState={this.updateShowState.bind(this)}
          selectedSrc={selectedau2}
          direction="left"
          title={
            <span>
              Turnkey Design & Construct - <br />
              Top Ryde to East Ryde. (2018)
            </span>
          }
          description="The general scope of work for this contract included design, ductline construction, manufacture, supply, installation, jointing and termination of two new underground 132 kV cable circuits over 3,500 metres between Top Ryde and East Ryde in Sydney to replace the existing oil filled feeders. The scope involved many challenging horizontal directional drills in order to minimise community, road and nature reserve impacts. The project completed in mid 2018. 
            "
        />
        <Project
          imgSrc={au3}
          index={3}
          isHiding={this.state.isHiding}
          updateShowState={this.updateShowState.bind(this)}
          direction="right"
          selectedSrc={selectedau4}
          title={
            <span>
              Supply & Install - <br /> WestConnex NewM5. (2018)
            </span>
          }
          e
          description="The general scope of works for this contract included manufacture, supply, installation and jointing of two new underground 132kV cable circuits over 1,800 metres between St Peters and Alexandria in Sydney. The cable installation represented many extreme challenges that required immediate solutions. 
            "
        />
        <Project
          imgSrc={au4}
          index={4}
          isHiding={this.state.isHiding}
          direction="left"
          selectedSrc={selectedau3}
          updateShowState={this.updateShowState.bind(this)}
          title={
            <span>
              Turnkey Design & Construct Packages - <br /> Picnic Point to
              Willoughby. (2018)
            </span>
          }
          description="Taihan has recently been awarded 3 packages of work with the general scope of works to include design, ductline construction, manufacture, supply, installation, jointing and termination of multiple new underground 132 kV cable circuits over 14,300 metres between Willoughby & Mosman, Kingsford & Clovelly and Picnic Point & Revesby in Sydney to replace the existing oil filled feeders.  
            "
        />
      </ProjectList>
    );

    const NzProjects = () => (
      <ProjectList>
        <Project
          imgSrc={nz2}
          index={1}
          isHiding={this.state.isHiding}
          updateShowState={this.updateShowState.bind(this)}
          selectedSrc={selectednz2}
          direction="right"
          title={
            <span>
              Turnkey Design & Construct - <br />
              Flat Bush 220kV undergrounding (2018)
            </span>
          }
          description="The general scope of work for this contract included design, ductline construction, manufacture, supply, installation, jointing and termination of two new underground 220 kV 2500mm2 cable circuits over 2300 metres to underground 6 spans of overhead transmission lines.
              The works involved complex design and contract constraints with work within new housing developments in South Auckland
            "
        />
        <Project
          imgSrc={nz1}
          index={2}
          isHiding={this.state.isHiding}
          updateShowState={this.updateShowState.bind(this)}
          selectedSrc={selectednz1}
          direction="left"
          title={
            <span>
              Supply, Jointing and Termination, Test – <br /> Hamilton Chedworth
              110kV Undergrounding (2018)
            </span>
          }
          description="The general scope of work for this contract included manufacture, supply, cable hauling supervision, jointing and termination and testing of two new underground 110kV 400mm2 cable circuits over 2200 metres to underground existing overhead transmission lines. Six ducts, one for each high voltage power cable, are trenched up to 5m below ground and protected by aggregate to withstand extreme heat and wrapped with a protect sheath. This is part of Waikato developer’s housing development project to bury a section of the national power grid. The project was completed in early 2018.
              
            "
        />
      </ProjectList>
    );
    return (
      <Container>
        <Wrapper>
          {this.state.nz ? (
            <Fragment>
              <Title>NZ Projects</Title>
              <NzProjects />
              <Title>AU Projects</Title>
              <AusProjects />
            </Fragment>
          ) : (
            <Fragment>
              <Title>AU Projects</Title>
              <AusProjects />
              <Title>NZ Projects</Title>
              <NzProjects />
            </Fragment>
          )}
        </Wrapper>
      </Container>
    );
  }
}
