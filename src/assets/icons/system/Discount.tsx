import React from "react";

function Discount({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <g clipPath="url(#clip0_209_10839)">
        <path
          stroke="currentColor"
          strokeWidth="2.667"
          d="M14.014 3.552a2.667 2.667 0 013.974 0l1.311 1.466c.54.603 1.326.928 2.134.884l1.964-.109a2.667 2.667 0 012.81 2.81l-.108 1.964c-.045.809.28 1.594.884 2.134l1.465 1.312a2.667 2.667 0 010 3.973l-1.465 1.312a2.666 2.666 0 00-.884 2.134l.108 1.964a2.667 2.667 0 01-2.81 2.81l-1.964-.108a2.667 2.667 0 00-2.134.884l-1.311 1.465a2.667 2.667 0 01-3.974 0l-1.312-1.465a2.667 2.667 0 00-2.134-.884l-1.964.108a2.667 2.667 0 01-2.81-2.81l.109-1.964a2.667 2.667 0 00-.884-2.134l-1.466-1.311a2.667 2.667 0 010-3.974L5.02 12.7c.603-.54.928-1.325.884-2.134l-.109-1.964a2.667 2.667 0 012.81-2.81l1.964.109a2.667 2.667 0 002.134-.884l1.312-1.466z"
        ></path>
        <circle cx="19.334" cy="19.333" r="2" fill="currentColor"></circle>
        <circle cx="12.667" cy="12.667" r="2" fill="currentColor"></circle>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.667"
          d="M20 12l-8 8"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_209_10839">
          <path fill="#fff" d="M0 0H32V32H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Discount;
