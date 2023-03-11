import classNames from "classnames";
import Link from "next/link";
import { forwardRef } from "react";
import { ILink } from "./Link.interface";

export const MyLink = forwardRef<HTMLAnchorElement, ILink>(
  (
    { href, children, appearance, icon: Icon, shadow, className, ...props },
    ref
  ) => {
    if (appearance === "button" && Icon) {
      return (
        <Link
          ref={ref}
          href={href}
          className={classNames(
            "grid w-fit grid-cols-[1fr_20px] items-center gap-x-[10px] rounded-[44px] bg-[#52A5FC] px-[30px] py-[15px] text-[16px] font-medium leading-[21px] text-white",
            {
              ["shadow-[0px_8px_50px_rgba(82,165,252,0.7)]"]: shadow === "blue",
            },
            className
          )}
          {...props}
        >
          <span>{children}</span>
          <Icon className="h-auto w-full" />
        </Link>
      );
    }

    if (appearance === "button") {
      return (
        <Link
          ref={ref}
          href={href}
          className={classNames(
            "inline-block rounded-[44px] bg-[#52A5FC] px-[30px] py-[15px] text-[16px] font-medium leading-[21px] text-white",
            {
              ["shadow-[0px_8px_50px_rgba(82,165,252,0.7)]"]: shadow === "blue",
            },
            className
          )}
          {...props}
        >
          {children}
        </Link>
      );
    }
    return (
      <Link ref={ref} href={href} {...props}>
        {children}
      </Link>
    );
  }
);

MyLink.displayName = "MyLink";
