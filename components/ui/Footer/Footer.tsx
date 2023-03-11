import { LogoGrayIcon } from "@/assets/icons";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#FBFBFB]">
      <div className="container">
        <div className="flex items-center justify-between py-[63px]">
          <Link
            href="/"
            className="grid grid-cols-[70px_1fr] gap-x-[10px] gap-y-[8px] uppercase text-[#BABABA]"
          >
            <LogoGrayIcon className="row-span-2 h-auto w-full" />
            <p className="max-w-[245px] text-[14px] font-bold leading-[19px]">
              Мониторинг рыб и других водных животных
            </p>
            <p className="max-w-[283px] text-[9px] leading-[12px]">
              Министерство экологогии, геологии и природных ресурсов Республики
              Казахстан
            </p>
          </Link>
          <ul className="flex items-center gap-x-[61px] text-[14px] font-medium leading-[19px] text-[#BCBCBC]">
            {NAV_LINKS.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.path}
                  className="inline-block transition-colors duration-300 ease-in-out hover:text-[#0A091D]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
