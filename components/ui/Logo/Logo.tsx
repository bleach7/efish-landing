import { LogoBlueIcon, LogoGrayIcon } from "@/assets/icons";
import classNames from "classnames";
import Link from "next/link";
import { ILogo } from "./Logo.interface";

export const Logo = ({ color }: ILogo) => {
  return (
    <Link
      href="/"
      className={classNames(
        "grid grid-cols-[70px_1fr] gap-x-[10px] gap-y-[8px] uppercase",
        {
          ["text-[#BABABA]"]: color === "gray",
        }
      )}
    >
      {color === "blue" && (
        <LogoBlueIcon className="row-span-2 h-auto w-full" />
      )}
      {color === "gray" && (
        <LogoGrayIcon className="row-span-2 h-auto w-full" />
      )}
      <p className="max-w-[245px] text-[14px] font-bold leading-[19px]">
        Мониторинг рыб и других водных животных
      </p>
      <p className="max-w-[283px] text-[9px] leading-[12px]">
        Министерство экологогии, геологии и природных ресурсов Республики
        Казахстан
      </p>
    </Link>
  );
};
