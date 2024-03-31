import { SheetClose, SheetContent } from "./sheet";
import { ArrowLeftIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function SheetContentLayout({
  children, // will be a page or nested layout
  className,
  backgroundImage,
}: {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
}) {
  return (
    <SheetContent
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className={`w-full h-full pt-14 px-4 bg-background overflow-y-scroll border-l-0 ${className} `}
    >
      <SheetClose className="fixed top-4 left-4 z-50">
        <button className="bg-white bg-opacity-95 shadow-sm p-3 rounded-xl text-neutral-500">
          <ChevronLeftIcon className="w-4 h-4" />
        </button>
      </SheetClose>

      {children}
    </SheetContent>
  );
}
