import React from "react";

const SmallLine = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="44"
      fill="none"
      viewBox="0 0 12 28"
      {...props}
    >
      <path
        fill="#1CC46A"
        d="M6 3.264L3.113 6.15 6 9.037 8.887 6.15 6 3.264zm.5 23.886v-2.625h-1v2.625h1zm0-7.875v-5.25h-1v5.25h1zm0-10.5V6.15h-1v2.625h1zM6 .377L.226 6.15 6 11.924l5.774-5.774L6 .377zM7 27.15v-2.625H5v2.625h2zm0-7.875v-5.25H5v5.25h2zm0-10.5V6.15H5v2.625h2z"
      ></path>
    </svg>
  );
};

export default SmallLine;
