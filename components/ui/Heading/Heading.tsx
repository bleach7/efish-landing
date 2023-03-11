import classNames from "classnames";
import { createElement } from "react";
import { IHeading } from "./Heading.interface";

export const Heading = ({ as, children, className, ...props }: IHeading) => {
  return createElement(
    as,
    {
      className: classNames(
        "text-[36px] font-semibold uppercase leading-[48px]",
        className
      ),
      ...props,
    },
    children
  );
};
