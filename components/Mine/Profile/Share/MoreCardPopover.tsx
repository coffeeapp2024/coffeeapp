import MenuKebabIcon from "@/components/Icon/MenuKebabIcon";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function MoreCardPopover() {
  return (
    <Popover>
      <PopoverTrigger className="absolute right-0 top-0 w-8 h-8 bg-neutral-200 bg-opacity-50 rounded-bl-lg flex items-center justify-center">
        <MenuKebabIcon className="w-5 h-5" />
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
}

export default MoreCardPopover;
