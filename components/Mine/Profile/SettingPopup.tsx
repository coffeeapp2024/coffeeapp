import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import SignOutButton from "./SignOutButton";

function SettingPopup() {
  return (
    <Popover>
      <PopoverTrigger className="absolute right-3 top-5">
        <EllipsisVerticalIcon className="w-6 h-6" />
      </PopoverTrigger>
      <PopoverContent className="p-2 relative w-30 min-h-10 rounded-2xl flex items-center justify-center">
        <SignOutButton />
      </PopoverContent>
    </Popover>
  );
}

export default SettingPopup;
