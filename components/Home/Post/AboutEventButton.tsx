import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CloseDialogButton from "../../Template/CloseDialogButton";
import Image from "next/image";
import DialogContentTemplate from "@/components/Template/DialogContentTemplate";

function AboutEventButton({ eventPosterURL }: { eventPosterURL: string }) {
  return (
    <Dialog>
      <DialogTrigger className="bg-neutral-900 rounded-xl px-3 py-1 flex items-center justify-center">
        info
      </DialogTrigger>
      <DialogContentTemplate imageURL="bg/main-bg.jpg" />
      <CloseDialogButton />
    </Dialog>
  );
}

export default AboutEventButton;
