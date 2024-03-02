import React from "react";

function Timer({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 19"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2.182 2.673V5.4h2.727M1.5 9.15A7.5 7.5 0 102.504 5.4"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.001 4.65v4.504l3.18 3.18"
      ></path>
    </svg>
  );
}

export default Timer;
