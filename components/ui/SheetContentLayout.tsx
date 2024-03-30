import { SheetClose, SheetContent } from "./sheet";
import { ArrowLeftIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function SheetContentLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <SheetContent className="w-full pt-14 px-4 bg-neutral-50">
      <SheetClose className="fixed top-4 left-4">
        <button className="bg-white p-3 rounded-xl text-neutral-500">
          <ChevronLeftIcon className="w-4 h-4" />
        </button>
      </SheetClose>

      {children}
    </SheetContent>
  );
}
