import React from "react";

function Wallet({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        stroke="#1CC46A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.667"
        d="M11.988 7.98l9.202-5.313 3.075 5.326-12.277-.013z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#1CC46A"
        strokeLinejoin="round"
        strokeWidth="2.667"
        d="M2.667 9.333C2.667 8.597 3.264 8 4 8h24c.737 0 1.334.597 1.334 1.333V28c0 .736-.597 1.333-1.334 1.333H4A1.333 1.333 0 012.667 28V9.333z"
      ></path>
      <path
        stroke="#1CC46A"
        strokeLinejoin="round"
        strokeWidth="2.667"
        d="M23.5 22h5.833v-6.667H23.5c-1.933 0-3.5 1.492-3.5 3.333C20 20.507 21.567 22 23.5 22z"
      ></path>
      <path
        stroke="#1CC46A"
        strokeLinecap="round"
        strokeWidth="2.667"
        d="M29.333 11v16"
      ></path>
    </svg>
  );
}

export default Wallet;
