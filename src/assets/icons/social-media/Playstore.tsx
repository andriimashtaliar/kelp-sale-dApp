import React from "react";

function Playstore({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="34"
      fill="none"
      viewBox="0 0 32 34"
      {...props}
    >
      <path
        fill="url(#paint0_linear_224_2250)"
        d="M.913.88c-.391.4-.618 1.022-.618 1.828v28.75c0 .805.227 1.428.618 1.827l.097.088 16.523-16.104v-.38L1.01.785.913.88z"
      ></path>
      <path
        fill="url(#paint1_linear_224_2250)"
        d="M23.035 22.64l-5.502-5.37v-.38l5.508-5.37.124.069 6.523 3.619c1.862 1.027 1.862 2.717 0 3.75l-6.523 3.613-.13.07z"
      ></path>
      <path
        fill="url(#paint2_linear_224_2250)"
        d="M23.165 22.57l-5.632-5.49L.913 33.285c.618.633 1.627.71 2.773.076L23.165 22.57z"
      ></path>
      <path
        fill="url(#paint3_linear_224_2250)"
        d="M23.165 11.59L3.686.797C2.54.17 1.531.247.913.88l16.62 16.2 5.632-5.49z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_224_2250"
          x1="16.066"
          x2="-5.744"
          y1="31.757"
          y2="9.387"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00A0FF"></stop>
          <stop offset="0.007" stopColor="#00A1FF"></stop>
          <stop offset="0.26" stopColor="#00BEFF"></stop>
          <stop offset="0.512" stopColor="#00D2FF"></stop>
          <stop offset="0.76" stopColor="#00DFFF"></stop>
          <stop offset="1" stopColor="#00E3FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_224_2250"
          x1="32.112"
          x2="-0.15"
          y1="17.078"
          y2="17.078"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE000"></stop>
          <stop offset="0.409" stopColor="#FFBD00"></stop>
          <stop offset="0.775" stopColor="orange"></stop>
          <stop offset="1" stopColor="#FF9C00"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_224_2250"
          x1="20.102"
          x2="-9.474"
          y1="14.095"
          y2="-16.24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3A44"></stop>
          <stop offset="1" stopColor="#C31162"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_224_2250"
          x1="-3.271"
          x2="9.937"
          y1="42.851"
          y2="29.305"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#32A071"></stop>
          <stop offset="0.069" stopColor="#2DA771"></stop>
          <stop offset="0.476" stopColor="#15CF74"></stop>
          <stop offset="0.801" stopColor="#06E775"></stop>
          <stop offset="1" stopColor="#00F076"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Playstore;
