import React from "react";

function Percentage({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      fill="none"
      viewBox="0 0 19 19"
      {...props}
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.792 6.58a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75zM14.542 16.33a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.417 2.83l-13.5 13.5"
      ></path>
    </svg>
  );
}

export default Percentage;
