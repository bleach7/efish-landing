import { IIcon } from "@/interfaces";
import { memo } from "react";

export const TurnoverIcon = memo(({ className, ...props }: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 48 48"
      className={className}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M42 24A18 18 0 1129.562 6.88"
      ></path>
    </svg>
  );
});

TurnoverIcon.displayName = "TurnoverIcon";
