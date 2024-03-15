import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import CloseDialogButton from "../CloseDialogButton";

function AboutEventButton() {
  return (
    <Dialog>
      <DialogTrigger className="bg-neutral-800 rounded-lg px-3 py-1 flex items-center justify-center">
        info
      </DialogTrigger>
      <DialogContent className="max-w-sm rounded-2xl w-full min-h-96 bg-neutral-900 border-none">
        <CloseDialogButton />
      </DialogContent>
    </Dialog>
  );
}

export default AboutEventButton;
