import React from "react";
import { DialogClose } from "@/components/ui/dialog";
import { XMarkIcon } from "@heroicons/react/24/outline";

function CloseDialogButton() {
  return (
    <DialogClose className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-white rounded-full bg-none border-[2px] p-1">
      <div>
        <XMarkIcon className="w-7 h-7 " />
      </div>
    </DialogClose>
  );
}

export default CloseDialogButton;
