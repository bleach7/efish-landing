import { ArrowDownIcon } from "@/assets/icons";
import { Listbox } from "@headlessui/react";
import classNames from "classnames";
import { useState } from "react";

const LANGS = [
  { id: "ru", name: "Рус" },
  { id: "kz", name: "Қаз" },
];

export const LangSwitcher = () => {
  const [selectedPerson, setSelectedPerson] = useState(LANGS[0]);

  return (
    <Listbox
      as="div"
      value={selectedPerson}
      onChange={setSelectedPerson}
      className="relative text-[17px] font-medium leading-[23px]"
    >
      {({ open }) => (
        <>
          <Listbox.Button
            as="button"
            type="button"
            className={classNames(
              "grid w-[70px] grid-cols-[1fr_22px] items-center justify-between text-[#52A5FC] transition-colors duration-300 ease-in-out hover:text-[#5ABB5E]",
              {
                ["text-[#5ABB5E]"]: open,
              }
            )}
          >
            <span className="text-start">{selectedPerson.name}</span>
            <ArrowDownIcon
              className={classNames(
                "h-auto w-full transition-transform ease-in-out",
                {
                  ["rotate-180"]: open,
                }
              )}
            />
          </Listbox.Button>
          <Listbox.Options
            as="ul"
            className="absolute z-10 flex w-full translate-y-[10px] flex-col overflow-hidden rounded-[10px] border border-[#D3E7FB] bg-white shadow-[0px_8px_50px_rgba(210,232,254,0.4)]"
          >
            {LANGS.map((lang) => (
              <Listbox.Option as="li" key={lang.id} value={lang}>
                {({ active, selected }) => (
                  <button
                    type="button"
                    className={classNames(
                      "w-full px-[15px] py-[5px] text-start transition-colors duration-300 ease-in-out hover:bg-[#52A5FC] hover:text-white",
                      {
                        ["bg-[#52A5FC] text-white"]: active,
                        ["text-[#52A5FC]"]: selected,
                      }
                    )}
                  >
                    {lang.name}
                  </button>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </>
      )}
    </Listbox>
  );
};
