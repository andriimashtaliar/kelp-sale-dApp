import React from "react";

function Google({ ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" {...props}>
      <path
        fill="#4285F4"
        fillRule="evenodd"
        d="M20.852 10.937c0-.73-.065-1.433-.187-2.107h-9.699v3.983h5.542a4.737 4.737 0 01-2.055 3.109v2.584h3.329c1.947-1.793 3.07-4.433 3.07-7.57z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#34A853"
        fillRule="evenodd"
        d="M10.966 21c2.78 0 5.112-.922 6.815-2.494l-3.328-2.584c-.922.618-2.102.983-3.487.983-2.682 0-4.953-1.812-5.762-4.246h-3.44v2.668a10.294 10.294 0 009.202 5.674z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#FBBC05"
        fillRule="evenodd"
        d="M5.204 12.659a6.19 6.19 0 01-.323-1.957c0-.679.117-1.339.323-1.957V6.077h-3.44a10.294 10.294 0 00-1.096 4.625c0 1.662.398 3.234 1.095 4.625l3.44-2.668z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#EA4335"
        fillRule="evenodd"
        d="M10.966 4.5c1.512 0 2.87.52 3.937 1.54l2.953-2.954C16.073 1.425 13.742.404 10.966.404a10.294 10.294 0 00-9.203 5.674l3.44 2.668c.81-2.434 3.08-4.246 5.763-4.246z"
        clipRule="evenodd"
      ></path>{" "}
    </svg>
  );
}

export default Google;
