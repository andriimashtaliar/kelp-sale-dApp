import React from "react";

function Clipboard({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="18"
      fill="none"
      viewBox="0 0 19 18"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.5 6.75H8.75a1.5 1.5 0 00-1.5 1.5V15a1.5 1.5 0 001.5 1.5h6.75A1.5 1.5 0 0017 15V8.25a1.5 1.5 0 00-1.5-1.5z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.25 11.25H3.5A1.5 1.5 0 012 9.75V3a1.5 1.5 0 011.5-1.5h6.75a1.5 1.5 0 011.5 1.5v.75"
      ></path>
    </svg>
  );
}

export default Clipboard;
