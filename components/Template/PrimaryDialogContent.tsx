import React from "react";
import { DialogContent } from "../ui/dialog";
import CloseDialogButton from "./CloseDialogButton";

function PrimaryDialogContent({
  children,
  className,
  isShowCloseButton = true,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  isShowCloseButton?: boolean;
}>) {
  return (
    <DialogContent
      className={`${className} top-[40%] max-w-screen-sm aspect-square p-4 w-full bg-transparent shadow-none border-none`}
    >
      <div className="overflow-hidden rounded-2xl bg-background">
        {children}
      </div>
      {isShowCloseButton && <CloseDialogButton />}
    </DialogContent>
  );
}

export default PrimaryDialogContent;
