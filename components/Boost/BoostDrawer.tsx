import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import BoostCard from "../Boost/BoostCard";

function BoostDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <BoostCard />
      </DrawerTrigger>
      <DrawerContent className="rounded-t-3xl h-[60vh] sm:max-w-screen-sm mx-auto"></DrawerContent>
    </Drawer>
  );
}

export default BoostDrawer;
