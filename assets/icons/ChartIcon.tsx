import { IIcon } from "@/interfaces";
import { memo } from "react";

export const ChartIcon = memo(({ className, ...props }: IIcon) => {
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
        d="M24 40V20M36 40V8M12 40v-8"
      ></path>
    </svg>
  );
});

ChartIcon.displayName = "ChartIcon";
