import React from "react";

function EqualCircle({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 28 28"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18 15.334h-8A1.333 1.333 0 1010 18h8a1.333 1.333 0 100-2.666zM18 10h-8a1.334 1.334 0 000 2.667h8A1.333 1.333 0 1018 10zM14 .667a13.333 13.333 0 100 26.666A13.333 13.333 0 0014 .667zm0 24a10.667 10.667 0 110-21.333 10.667 10.667 0 010 21.333z"
      ></path>
    </svg>
  );
}

export default EqualCircle;
