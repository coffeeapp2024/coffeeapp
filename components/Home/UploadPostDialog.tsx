import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { XMarkIcon } from "@heroicons/react/24/outline";
import CoinIcon from "../CoinIcon";

function UploadPostDialog() {
  return (
    <Dialog>
      <DialogTrigger className="bg-neutral-800 w-full text-white font-semibold mx-4 rounded-3xl px-3 py-3 flex items-center justify-center">
        Upload your image
      </DialogTrigger>
      <DialogContent className="max-w-sm rounded-2xl w-full min-h-96 bg-white opacity-80 border-none">
        <DialogClose className="absolute -bottom-20 left-1/2 -translate-x-1/2">
          <button className="text-neutral-950 bg-white rounded-full p-4">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

export default UploadPostDialog;
