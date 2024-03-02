import React from "react";

function Star({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="#00B94F"
        d="M10 0l.566 3.44a7.273 7.273 0 005.995 5.993L20 10l-3.44.566a7.273 7.273 0 00-5.993 5.995L10 20l-.567-3.44a7.273 7.273 0 00-5.994-5.993L0 10l3.44-.567A7.273 7.273 0 009.432 3.44L10 0z"
      ></path>
    </svg>
  );
}

export default Star;
