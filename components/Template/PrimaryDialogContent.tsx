import React from "react";
import { DialogContent } from "../ui/dialog";
import CloseDialogButton from "./CloseDialogButton";

function PrimaryDialogContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DialogContent className="max-w-screen-sm aspect-square p-4 w-full bg-transparent shadow-none border-none">
      <div className="overflow-hidden rounded-2xl bg-background">
        {children}
      </div>
      <CloseDialogButton />
    </DialogContent>
  );
}

export default PrimaryDialogContent;
