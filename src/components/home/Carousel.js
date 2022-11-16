import React, { Fragment } from "react";
import styled from "styled-components";
import { color, screen } from "../../global/constant";
import MediaQuery from "react-responsive";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "./clients1.jpg";
import img2 from "./clients2.jpg";
import img3 from "./clients3.jpg";
import img4 from "./clients4.jpg";
import img5 from "./clients5.jpg";
import img6 from "./clients6.jpg";
import img0 from "./clientsNZ.jpg";
import mimg1 from "./mclient1.jpg";
import mimg2 from "./mclient2.jpg";
import mimg3 from "./mclient3.jpg";
import mimg4 from "./mclient4.jpg";
import mimg5 from "./mclient5.jpg";
import mimg6 from "./mclient6.jpg";
import mimg7 from "./mclientnz.jpg";

const Title = styled.h2`
  font-size: 26px;
  text-align: center;
  color: ${color.blue};
`;

const Wrapper = styled.div`
  padding: 0px 0 150px 0;
`;

export default () => {
  return (
    <Fragment>
      <Wrapper className="projects">
        <Title>Our Clients</Title>
        <MediaQuery query={screen.mdUp}>
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={true}
          >
            <div>
              <img alt="clients" src={img1} />
            </div>
            <div>
              <img alt="clients" src={img2} />
            </div>
            <div>
              <img alt="clients" src={img3} />
            </div>
            <div>
              <img alt="clients" src={img4} />
            </div>
            <div>
              <img alt="clients" src={img5} />
            </div>
            <div>
              <img alt="clients" src={img6} />
            </div>
            <div>
              <img alt="clients" src={img0} />
            </div>
          </Carousel>
        </MediaQuery>
        <MediaQuery query={screen.smDown}>
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={true}
          >
            <div>
              <img alt="clients" src={mimg1} />
            </div>
            <div>
              <img alt="clients" src={mimg2} />
            </div>
            <div>
              <img alt="clients" src={mimg3} />
            </div>
            <div>
              <img alt="clients" src={mimg4} />
            </div>
            <div>
              <img alt="clients" src={mimg5} />
            </div>
            <div>
              <img alt="clients" src={mimg6} />
            </div>
            <div>
              <img alt="clients" src={mimg7} />
            </div>
          </Carousel>
        </MediaQuery>
      </Wrapper>
    </Fragment>
  );
};
