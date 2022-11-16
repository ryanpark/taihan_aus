import { css } from "styled-components";
import { color, screen } from "../global/constant";

const styles = css`
  body {
    font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    color: white;
  }
  #Projects,
  #Products,
  #Contact,
  #Certificates,
  #Company,
  #Global {
    background-color: ${color.blue};
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    transition: all 1s;
    color: ${color.red};
  }
  #logo {
    width: 123px;
    display: none;
    @media ${screen.mdUp} {
      display: block;
    }
  }
  #logoSm {
    width: 80px;
    @media ${screen.mdUp} {
      display: none;
    }
  }

  #contactform123 {
    #form {
      padding: 0px !important;
    }
  }
  #slogan1 {
    width: 152px;
  }
  #slogan2 {
    width: 108px;
  }
  #slogan3 {
    width: 99px;
  }
  .mobileLink {
    font-size: 2em;
    font-weight: lighter;
  }
  .carousel .slide {
    background: #fff !important;
  }
  .carousel.carousel-slider {
    padding-top: 25px;
    overflow: inherit !important;
  }

  .Modal {
    position: absolute;
    top: 40px;
    left: 50%;
    width: 1100px;
    margin-left: -600px;
    right: 40px;
    border: 1px solid rgb(204, 204, 204);
    background: rgb(0, 48, 132);
    overflow: auto;
    border-radius: 4px;
    outline: none;
    padding: 20px;
  }
  .ModalLocation {
    position: absolute;
    top: 40px;
    left: 50%;
    width: 600px;
    margin-left: -300px;
    right: 40px;
    border: 1px solid rgb(204, 204, 204);
    background: rgb(0, 48, 132);
    overflow: auto;
    border-radius: 4px;
    outline: none;
    padding: 20px;
  }

  .projects .carousel.carousel-slider .control-arrow {
    background: ${color.blue};
    opacity: 1;
    top: 168px;
    margin: 0 20px;
    height: 50px;
  }
  .cls-1 {
    fill: #003084;
  }

  .cls-2,
  .cls-3,
  .cls-4 {
    fill: none;
    stroke-miterlimit: 10;
  }

  .cls-2,
  .cls-3 {
    stroke: #fff;
  }

  .cls-2 {
    stroke-width: 2px;
  }

  .cls-3,
  .cls-4 {
    stroke-width: 3px;
  }

  .cls-4 {
    stroke: #003084;
  }

  .cls-11,
  .cls-22 {
    fill: #003084;
  }

  .cls-22 {
    stroke: #003084;
  }
`;

export default styles;
