import React from "react";
import BoostDialog from "./BoostDialog";
import { useStorageStore } from "@/store/zustand";
import { BoltIcon } from "@heroicons/react/24/outline";
import BoostDrawer from "./BoostDrawer";

function Storage() {
  const iconSize = "w-10 h-10";
  const storageIcons = [
    <BoltIcon key="1" className={`${iconSize}`} />,
    <BoltIcon key="2" className={`${iconSize} text-yellow-500`} />,
  ];
  const text = "Increase the fill <br/> time to claim less often";

  const currentLevel = 0;
  const { storages } = useStorageStore();
  if (!storages) return;

  console.log("get storages", storages);

  const { level, name, timeMinePerQr } = storages[currentLevel] ?? {};
  const {
    name: nextName,
    price: nextPrice,
    timeMinePerQr: nextTimeMinePerQr,
  } = storages[currentLevel + 1] ?? {};

  const levelTexts = [
    `Claim ${timeMinePerQr} per QR Code`,
    `Claim ${nextTimeMinePerQr} per QR Code`,
  ];

  return (
    <BoostDrawer
      icons={storageIcons}
      level={level}
      nextName={nextName}
      name={name}
      text={text}
      levelTexts={levelTexts}
      price={nextPrice}
    />
  );
}

export default Storage;
