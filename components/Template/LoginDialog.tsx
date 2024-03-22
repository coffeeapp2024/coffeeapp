import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import LoginButton from "../Mine/Profile/LoginButton";
import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

function LoginDialog({ open }: { open: boolean }) {
  return (
    <Dialog open={open || false}>
      <DialogTrigger></DialogTrigger>
      <DialogContent className="bg-transparent border-none">
        <LoginButton />
        <Link
          href="/"
          className="w-10 h-10 border-[2px] rounded-full absolute -bottom-24 opacity-50 left-1/2 -translate-x-1/2 flex items-center justify-center focus:scale-95 transition-transform"
        >
          <ArrowUturnLeftIcon className="w-6 h-6 text-white" />
        </Link>
      </DialogContent>
    </Dialog>
  );
}

export default LoginDialog;
