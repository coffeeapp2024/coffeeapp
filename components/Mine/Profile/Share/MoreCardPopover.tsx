"use client";

import MenuKebabIcon from "@/components/Icon/MenuKebabIcon";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SendProductDialog from "./SendProductDialog";

function MoreCardPopover() {
  const [openPopover, setOpenPopover] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handlePopoverClose = (open: boolean) => {
    setIsHidden(!isHidden); // Hidden the popover
    setOpenPopover(open); // Close the popover
  };

  return (
    <Popover open={openPopover} onOpenChange={setOpenPopover}>
      <PopoverTrigger className="absolute right-0 top-0 w-8 h-8 bg-neutral-200 bg-opacity-50 rounded-bl-lg flex items-center justify-center">
        <MenuKebabIcon className="w-5 h-5" />
      </PopoverTrigger>
      <PopoverContent
        align="start"
        side="left"
        sideOffset={-32}
        className={`${isHidden && "hidden"} w-fit rounded-2xl`}
      >
        <SendProductDialog handlePopoverClose={handlePopoverClose} />
      </PopoverContent>
    </Popover>
  );
}

export default MoreCardPopover;
