import React from "react";

export default (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 431.96 650"
    className={props.location}
    style={{ cursor: "pointer" }}
    onClick={(e) => props.openModal(props.location)}
  >
    <title>{props.location}</title>
    <path
      d="M541.39,215.45c0,119.28-216,434-216,434s-216-314.73-216-434,96.7-216,216-216S541.39,96.16,541.39,215.45Z"
      transform="translate(-109.43 0.54)"
      fill="#ff0004"
    />
    <circle
      cx="325.41"
      cy="205.93"
      r="101.52"
      transform="translate(-159.73 290.95) rotate(-45)"
      fill="#fff"
    />
    <path
      d="M146.45,234.41c0-103.62,84-187.62,187.62-187.62A187.3,187.3,0,0,1,482.79,120,187.56,187.56,0,0,0,320.1,25.93c-103.62,0-187.62,84-187.62,187.62a186.76,186.76,0,0,0,38.9,114.38A186.74,186.74,0,0,1,146.45,234.41Z"
      transform="translate(-109.43 0.54)"
      fill="#eb4943"
    />
    <path
      d="M274.48,566.86c29.43,49.31,50.93,82.6,50.93,82.6s216-314.73,216-434c0-6.26-.32-12.44-.85-18.57a524.48,524.48,0,0,1-35.36,96.2C464.3,378.16,403.84,432.69,339.45,501.73,318.69,524,297.08,546,274.48,566.86Z"
      transform="translate(-109.43 0.54)"
      fill="#c82127"
    />
  </svg>
);
