import { SheetClose, SheetContent } from "./sheet";
import { ArrowLeftIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function SheetContentLayout({
  children, // will be a page or nested layout
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <SheetContent className={`w-full pt-14 px-4 bg-background ${className}`}>
      <SheetClose className="fixed top-4 left-4">
        <button className="bg-white bg-opacity-95 shadow-sm p-3 rounded-xl text-neutral-500">
          <ChevronLeftIcon className="w-4 h-4" />
        </button>
      </SheetClose>

      {children}
    </SheetContent>
  );
}
