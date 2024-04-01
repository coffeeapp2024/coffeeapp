import React from "react";
import { DialogClose, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import CloseDialogButton from "./CloseDialogButton";

function DialogContentTemplate({ imageURL }: { imageURL: string }) {
  return (
    <DialogContent className="max-w-sm aspect-square p-2 w-full bg-transparent shadow-none border-none">
      <div className="overflow-hidden rounded-2xl">
        <Image
          width={500}
          height={500}
          src={imageURL}
          alt="Event Poster"
          className="object-cover w-full h-full"
        />
      </div>
      <CloseDialogButton />
    </DialogContent>
  );
}

export default DialogContentTemplate;
