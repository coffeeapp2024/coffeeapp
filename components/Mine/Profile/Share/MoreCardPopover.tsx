"use client";

import MenuKebabIcon from "@/components/Icon/MenuKebabIcon";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SendProductDialog from "./SendProductDialog";

function MoreCardPopover({ onClick }: { onClick: () => void }) {
  const [openPopover, setOpenPopover] = useState(false);

  return (
    <Popover open={openPopover} onOpenChange={setOpenPopover}>
      <PopoverTrigger
        onClick={onClick}
        className="absolute right-0 top-0 w-8 h-8 bg-neutral-100 bg-opacity-50 rounded-bl-lg flex items-center justify-center"
      >
        <MenuKebabIcon className="w-5 h-5" />
      </PopoverTrigger>
      <PopoverContent
        align="start"
        side="left"
        sideOffset={-32}
        className="w-fit rounded-2xl"
      >
        <SendProductDialog setOpenPopover={setOpenPopover} />
      </PopoverContent>
    </Popover>
  );
}

export default MoreCardPopover;
