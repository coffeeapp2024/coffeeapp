import MenuKebabIcon from "@/components/Icon/MenuKebabIcon";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SendIcon from "@/components/Icon/SendIcon";

function MoreCardPopover() {
  return (
    <Popover>
      <PopoverTrigger className="absolute right-0 top-0 w-8 h-8 bg-neutral-200 bg-opacity-50 rounded-bl-lg flex items-center justify-center">
        <MenuKebabIcon className="w-5 h-5" />
      </PopoverTrigger>
      <PopoverContent
        align="start"
        side="left"
        sideOffset={-32}
        className="w-fit rounded-2xl"
      >
        <div className="flex items-center gap-x-2">
          <SendIcon className="w-5 h-5" />
          <span className="text-sm text-nowrap font-medium">
            Send to your friend
          </span>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default MoreCardPopover;
