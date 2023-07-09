import React from "react";

export default (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 426.69 638.44"
    className={props.location}
    style={{ cursor: "pointer" }}
    onClick={(e) => props.openModal(props.location)}
  >
    <title>{props.location}</title>
    <path
      d="M523.76,224.35c0,109.54-198.35,398.58-198.35,398.58s-198.35-289-198.35-398.58S215.87,26,325.41,26,523.76,114.8,523.76,224.35Z"
      transform="translate(-112.06 -11)"
      fill="#fff"
      stroke="#ff0004"
      strokeMiterlimit="10"
      strokeWidth="30"
    />
    <circle
      cx="325.41"
      cy="210.53"
      r="97.58"
      transform="translate(-165.62 280.76) rotate(-45)"
      fill="#dc000c"
    />
  </svg>
);
