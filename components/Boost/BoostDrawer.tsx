import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import BoostCard from "../Boost/BoostCard";

function BoostDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <BoostCard />
      </DrawerTrigger>
      <DrawerContent className="rounded-t-3xl h-[60vh] sm:max-w-screen-sm mx-auto border-none">
        <div>
          <h3 className="">Metal Storage</h3>
          <p>Better storage holds more MIN and you can claim it less often</p>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default BoostDrawer;
