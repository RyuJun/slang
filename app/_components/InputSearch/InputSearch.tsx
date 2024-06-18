import { Input } from "@nextui-org/react";
import { SearchIcon } from "../icons/SearchIcon";
import React from "react";

const InputSearch = (): React.ReactElement => {
  return (
    <div className="w-full max-sm:p-0 px-8 rounded-2xl flex justify-center items-center from-pink-500 to-yellow-500 text-white shadow-lg">
      <Input
        isClearable
        radius="md"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-100",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."
        startContent={
          <SearchIcon
            width={20}
            height={20}
            className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"
          />
        }
      />
    </div>
  );
};

export default InputSearch;
