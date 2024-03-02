import React from "react";

function USD({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.75"
        d="M9.375 5.4v.375h1.875a.375.375 0 010 .75h-3a1.125 1.125 0 000 2.25h1.5a1.875 1.875 0 110 3.75h-.375v1.125a.375.375 0 01-.75 0v-1.125H6.75a.375.375 0 110-.75h3a1.125 1.125 0 100-2.25h-1.5a1.875 1.875 0 110-3.75h.375V4.65a.375.375 0 01.75 0v.75zm-4.75-2.797a7.875 7.875 0 118.75 13.095 7.875 7.875 0 01-8.75-13.095zm.417 12.472a7.125 7.125 0 107.917-11.849 7.125 7.125 0 00-7.917 11.849z"
      ></path>
    </svg>
  );
}

export default USD;
