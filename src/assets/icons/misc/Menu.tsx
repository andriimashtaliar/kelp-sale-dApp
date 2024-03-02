import React from "react";

function Menu({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 19 14"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1.225 1h16m-16 6h16m-7 6h7"
      ></path>
    </svg>
  );
}

export default Menu;
