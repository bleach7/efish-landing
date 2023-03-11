import { LogoBlueIcon } from "@/assets/icons";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { LangSwitcher } from "../LangSwitcher";
import { MenuToggler } from "../MenuToggler";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between pt-[50px]">
          <Link
            href="/"
            className="grid grid-cols-[70px_1fr] gap-x-[10px] gap-y-[8px] uppercase"
          >
            <LogoBlueIcon className="row-span-2 h-auto w-full" />
            <p className="max-w-[245px] text-[14px] font-bold leading-[19px]">
              Мониторинг рыб и других водных животных
            </p>
            <p className="max-w-[283px] text-[9px] leading-[12px]">
              Министерство экологогии, геологии и природных ресурсов Республики
              Казахстан
            </p>
          </Link>
          <nav>
            <ul className="flex items-center font-medium">
              {NAV_LINKS.map((link, i) => (
                <li key={i} className="mr-[60px] last:mr-0">
                  <Link
                    href={link.path}
                    className="inline-block transition-colors duration-300 ease-in-out hover:text-[#52A5FC]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <LangSwitcher />
          <MenuToggler />
        </div>
      </div>
    </header>
  );
};
