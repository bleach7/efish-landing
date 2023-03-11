import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { Logo } from "../Logo";

export const Footer = () => {
  return (
    <footer className="bg-[#FBFBFB]">
      <div className="container">
        <div className="flex items-center justify-between py-[63px]">
          <Logo color="gray" />
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
