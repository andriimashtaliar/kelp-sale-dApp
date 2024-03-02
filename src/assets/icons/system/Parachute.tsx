import React from "react";

function Parachute({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 30 30"
      {...props}
    >
      <path
        stroke="#1CC46A"
        strokeLinejoin="round"
        strokeWidth="2.667"
        d="M10.153 15c1.616-1.616 3.232-2.424 4.848-2.424 1.617 0 3.233.808 4.849 2.424 1.885-1.616 3.3-2.424 4.242-2.424.943 0 2.357.808 4.243 2.424 0-7.363-5.97-13.333-13.334-13.333C7.638 1.667 1.668 7.637 1.668 15c1.885-1.616 3.3-2.424 4.242-2.424.943 0 2.357.808 4.243 2.424z"
      ></path>
      <path
        stroke="#1CC46A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.667"
        d="M1.668 15l13.333 13.333L10.153 15"
      ></path>
      <path
        stroke="#1CC46A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.667"
        d="M19.85 15L15 28.333 28.334 15"
      ></path>
    </svg>
  );
}

export default Parachute;
