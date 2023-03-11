import { IIcon } from "@/interfaces";
import { memo } from "react";

export const PointerIcon = memo(({ className, ...props }: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      className={className}
      {...props}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        clipPath="url(#clip0_2_1155)"
      >
        <path d="M15.833 9.167V3.333a1.667 1.667 0 00-1.666-1.666H3.333a1.667 1.667 0 00-1.666 1.666v10.834a1.666 1.666 0 001.666 1.666h5.834"></path>
        <path d="M10 10l3.472 8.333 1.233-3.629 3.628-1.232L10 10zM15 15l2.5 2.5"></path>
      </g>
      <defs>
        <clipPath id="clip0_2_1155">
          <path fill="currentColor" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
});

PointerIcon.displayName = "PointerIcon";
