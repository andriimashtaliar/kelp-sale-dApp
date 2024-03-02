import React from "react";

function Mouse({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 20"
      {...props}
    >
      <path
        fill="#1CC46A"
        d="M7 4a1 1 0 00-1 1v2a1 1 0 002 0V5a1 1 0 00-1-1zm0-4a7 7 0 00-7 7v6a7 7 0 1014 0V7a7 7 0 00-7-7zm5 13a5 5 0 11-10 0V7a5 5 0 1110 0v6z"
      ></path>
    </svg>
  );
}

export default Mouse;
