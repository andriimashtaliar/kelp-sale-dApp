import React from "react";

function NetworkTree({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.667"
        d="M8 22.667H2.667V28H8v-5.333zM26.666 4H5.333v8h21.333V4zM16 22.667V12M5.333 22.666v-5.333h21.333v5.333M29.333 22.667H24V28h5.333v-5.333zM18.666 22.667h-5.333V28h5.333v-5.333zM9.333 8h1.333"
      ></path>
    </svg>
  );
}

export default NetworkTree;
