import classNames from "classnames";
import { useState } from "react";

export const MenuToggler = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <button
      type="button"
      aria-label="Open menu"
      onClick={handleToggleMenu}
      className="flex h-[24px] w-[24px] flex-col items-center justify-between py-[6px] px-[3px] sm:hidden"
    >
      <span
        className={classNames(
          "inline-block h-[2px] w-full rounded-full transition-all duration-300 ease-in-out",
          {
            ["translate-y-[5px] rotate-45 bg-[#52A5FC]"]: isOpen,
            ["bg-[#0A091D]"]: !isOpen,
          }
        )}
      ></span>
      <span
        className={classNames(
          "inline-block h-[2px] w-full rounded-full bg-[#0A091D] transition-all duration-200 ease-in-out",
          {
            ["w-0 opacity-0"]: isOpen,
          }
        )}
      ></span>
      <span
        className={classNames(
          "inline-block h-[2px] w-full rounded-full transition-all duration-300 ease-in-out",
          {
            ["-translate-y-[5px] -rotate-[47deg] bg-[#52A5FC]"]: isOpen,
            ["bg-[#0A091D]"]: !isOpen,
          }
        )}
      ></span>
    </button>
  );
};
