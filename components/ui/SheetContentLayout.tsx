import { SheetClose, SheetContent } from "./sheet";
import {
  ArrowLeftCircleIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

export default function SheetContentLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <SheetContent className="w-full pt-36 bg-neutral-100">
      <SheetClose className="fixed top-4 left-4">
        <button className="bg-neutral-200 p-2 rounded-xl">
          <ArrowLeftIcon className="w-4 h-4" />
        </button>
      </SheetClose>

      {children}
    </SheetContent>
  );
}
