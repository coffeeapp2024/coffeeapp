import React from "react";
import BoostDialog from "./BoostDialog";
import { FireIcon } from "@heroicons/react/24/outline";
import BoostDrawer from "./BoostDrawer";

function Fireplace({ level }: any) {
  const iconSize = "w-10 h-10";
  const text = "Increase passive mining speed";

  const fireplaceIcons = [
    <FireIcon key="1" className={`${iconSize}`} />,
    <FireIcon key="2" className={`${iconSize} text-red-600`} />,
  ];
  return <BoostDrawer icons={fireplaceIcons} level={level} text={text} />;
}

export default Fireplace;
