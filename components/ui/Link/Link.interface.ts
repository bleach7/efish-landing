import { IIcon } from "@/interfaces";
import { LinkProps } from "next/link";
import { ElementType, PropsWithChildren } from "react";

export interface ILink extends LinkProps, PropsWithChildren {
  className?: string;
  appearance?: "button" | "link";
  icon?: ElementType<IIcon | any>;
  shadow?: "blue";
}
