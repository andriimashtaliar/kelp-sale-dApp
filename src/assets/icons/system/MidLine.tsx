import React from "react";

const MidLine = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="44"
      fill="none"
      viewBox="0 0 13 44"
      {...props}
    >
      <path
        fill="#1CC46A"
        d="M6.255 41.037l2.887-2.887-2.887-2.886-2.887 2.886 2.887 2.887zM5.755.15v3.167h1V.15h-1zm0 9.5v6.334h1V9.65h-1zm0 12.667v6.333h1v-6.333h-1zm0 12.667v3.166h1v-3.166h-1zm.5 8.94l5.773-5.774-5.773-5.773L.48 38.15l5.774 5.774zM5.255.15v3.167h2V.15h-2zm0 9.5v6.334h2V9.65h-2zm0 12.667v6.333h2v-6.333h-2zm0 12.667v3.166h2v-3.166h-2z"
      ></path>
    </svg>
  );
};

export default MidLine;
