import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CloseDialogButton from "../../CloseDialogButton";
import Image from "next/image";

function AboutEventButton({ eventPosterURL }: { eventPosterURL: string }) {
  return (
    <Dialog>
      <DialogTrigger className="bg-neutral-800 rounded-lg px-3 py-1 flex items-center justify-center">
        info
      </DialogTrigger>
      <DialogContent className="max-w-sm aspect-[3/4] p-0 w-full bg-transparent  border-none">
        <div className="overflow-hidden rounded-2xl bg-neutral-900">
          <Image
            width={500}
            height={500}
            src={eventPosterURL}
            alt="Event Poster"
            className="object-cover"
          />
        </div>
        <CloseDialogButton />
      </DialogContent>
    </Dialog>
  );
}

export default AboutEventButton;
