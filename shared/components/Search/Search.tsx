import { SearchIcon } from "../../../public/icons/SearchIcon";
import {
  Divider,
  Input,
  Listbox,
  ListboxItem,
  Spacer,
  User,
} from "@nextui-org/react";
import React, { useState } from "react";

const Search = (): React.ReactElement => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div className="w-full flex flex-col gap-4">
      <Input
        isClearable
        radius="lg"
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
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        value={value}
        onChange={(e) => {
          console.log(e.target.value);
        }}
        placeholder="Type to search..."
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
      <div className="w-full border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
        <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
          <ListboxItem key="Juno">
            <User
              name="Juno Ryu"
              description="FrontEnd Developer"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
              }}
            />
          </ListboxItem>
          <ListboxItem key="Divider">
            <Divider className="my-4" />
          </ListboxItem>
          <ListboxItem key="new">
            <User
              name="Jane Doe"
              description="Product Designer"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
              }}
            />
          </ListboxItem>
          <ListboxItem key="copy">
            <User
              name="Jane Doe"
              description="Product Designer"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
              }}
            />
          </ListboxItem>
          <ListboxItem key="edit">
            <User
              name="Jane Doe"
              description="Product Designer"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
              }}
            />
          </ListboxItem>
          <ListboxItem key="delete" className="text-danger" color="danger">
            <User
              name="Jane Doe"
              description="Product Designer"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
              }}
            />
          </ListboxItem>
        </Listbox>
      </div>
    </div>
  );
};

export default Search;
