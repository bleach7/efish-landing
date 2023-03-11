import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { LangSwitcher } from "../LangSwitcher";
import { Logo } from "../Logo";
import { MenuToggler } from "../MenuToggler";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between pt-[50px]">
          <Logo color="blue" />
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
