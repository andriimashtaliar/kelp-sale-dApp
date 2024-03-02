import React from "react";

const Thunder = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 20"
      {...props}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.833 1.667l-8.333 10H9l-.833 6.667 8.333-10H9l.833-6.667z"
      ></path>
    </svg>
  );
};

export default Thunder;
