import React from "react";
import BoostDialog from "./BoostDialog";
import { useStorageStore } from "@/store/zustand";
import { BoltIcon } from "@heroicons/react/24/outline";
import BoostDrawer from "./BoostDrawer";

function Storage({ level }: any) {
  const { storages } = useStorageStore();
  const text = "Increase the fill <br/> time to claim less often";

  const iconSize = "w-10 h-10";

  const storageIcons = [
    <BoltIcon key="1" className={`${iconSize}`} />,
    <BoltIcon key="2" className={`${iconSize} text-yellow-500`} />,
  ];

  console.log("use storage:", storages);

  return <BoostDrawer icons={storageIcons} level={level} text={text} />;
}

export default Storage;
