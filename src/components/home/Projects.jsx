import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { color, screen } from "../../global/constant";
import project1 from "./project1.jpg";
import project2 from "./project2.jpg";
import project3 from "./project3.jpg";
import project1NZ from "./project1_nz.jpg";
import project2NZ from "./project2_nz.jpg";
const Panels = styled.div`
  background: white;
  color: ${color.blue};
  text-align: center;
  padding: 35px 0px;
  max-width: 1280px;
  margin: 0 auto;

  @media ${screen.mdUp} {
    display: flex;
    background: ${color.blue};
    color: white;
    text-align: left;
    justify-content: space-between;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const Panel = styled.div``;
const Project = styled.div`
  padding: 10px 0px;

  a {
    color: ${color.blue};
    text-decoration: underline;
    :hover {
      text-decoration: none;
    }

    @media ${screen.mdUp} {
      color: white;
    }
  }
`;

const Title = styled.p`
  margin: 5px 0;
`;

export default props => (
  <Fragment>
    <Panels>
      {props.nz ? (
        <Panel>
          <img alt="project" src={project1NZ} />
          <Project>
            <Title>Supply, Jointing and Termination, Test – </Title>
            <Link to="../pages/projects">
              Hamilton Chedworth 110kV Undergrounding (2018)
            </Link>
          </Project>
        </Panel>
      ) : (
        <Panel>
          <img alt="project" src={project1} />
          <Project>
            <Title>Turnkey Design & Construct Packages</Title>
            <Link to="../pages/projects">
              {" "}
              Picnic Point to Willoughby. (2018)
            </Link>
          </Project>
        </Panel>
      )}

      {!props.smScreen && (
        <Fragment>
          {props.nz ? (
            <Fragment>
              <Panel>
                <img alt="project" src={project2NZ} />
                <Project>
                  <Title>Supply, Jointing and Termination, Test</Title>
                  <Link to="../pages/projects">
                    Hamilton Chedworth 110kV Undergrounding (2018)
                  </Link>
                </Project>
              </Panel>
              <Panel>
                <img alt="project" src={project1} />
                <Project>
                  <Title>Turnkey Design & Construct Packages</Title>
                  <Link to="../pages/projects">
                    {" "}
                    Picnic Point to Willoughby. (2018)
                  </Link>
                </Project>
              </Panel>
            </Fragment>
          ) : (
            <Fragment>
              <Panel>
                <img alt="project" src={project2} />
                <Project>
                  <Title>Turnkey Design & Construct</Title>
                  <Link to="../pages/projects">
                    Top Ryde to East Ryde. (2018)
                  </Link>
                </Project>
              </Panel>
              <Panel>
                <img alt="project" src={project3} />
                <Project>
                  <Title>Turnkey Design & Construct</Title>
                  <Link to="../pages/projects">
                    Homebush to Top Ryde 132Kv feeders. (2017)
                  </Link>
                </Project>
              </Panel>
            </Fragment>
          )}
        </Fragment>
      )}
    </Panels>
  </Fragment>
);
