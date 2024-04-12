import React from "react";
import { useStorageStore, useUserDataStore } from "@/store/zustand";
import { BoltIcon } from "@heroicons/react/24/outline";
import BoostDrawer from "./BoostDrawer";
import { toast } from "sonner";
import { updateUserDataAfterPurchase } from "@/lib/userActions";

const iconSize = "w-10 h-10";
const storageIcons = [
  <BoltIcon key="1" className={`${iconSize} text-yellow-500`} />,
  <BoltIcon key="2" className={`${iconSize} text-blue-600`} />,
  <BoltIcon key="2" className={`${iconSize} text-green-500`} />,
  <BoltIcon key="3" className={`${iconSize} text-purple-600`} />,
  <BoltIcon key="4" className={`${iconSize} text-red-600`} />,
];
const text = "Increase the fill <br/> time to claim less often";
const textInner =
  "Better storage holds more MIN and you can claim it less often";

function Storage() {
  const { userData, setUserData } = useUserDataStore();

  const { storages } = useStorageStore();
  if (!storages) return;

  const maxStorageLevel = Math.max(...storages.map((storage) => storage.level));
  const userStorageLevel = userData?.storageLevel;
  const isMaxLevel = userStorageLevel === maxStorageLevel;
  const nextStorageLevel = userStorageLevel && userStorageLevel + 1;

  const userStorage = storages.find(
    (storage) => storage.level === userStorageLevel
  );
  const nextStorage = storages.find(
    (storage) => storage.level === nextStorageLevel
  );

  const { level, name, fillTime } = userStorage ?? {};
  if (!level || !name || !fillTime) return;

  const {
    name: nextName,
    level: nextLevel,
    price: nextPrice,
    fillTime: nextFillTime,
  } = nextStorage ?? {};

  const levelTexts = [
    `Claim ${fillTime}h per QR Code`,
    `Claim ${nextFillTime}h per QR Code`,
  ];

  const handleUpgradeClick = async () => {
    if (!userData || !nextLevel || !nextPrice) return;

    await toast.promise(
      updateUserDataAfterPurchase(userData, setUserData, nextPrice, {
        fillTime: nextFillTime,
        storageLevel: nextLevel,
      }),
      {
        loading: "Proccessing...",
        success: "Upgrade successful!",
        error: (error) => error.message,
      }
    );
  };

  return (
    <BoostDrawer
      icons={storageIcons}
      isMaxLevel={isMaxLevel}
      onClickUpgrade={handleUpgradeClick}
      level={level}
      nextName={nextName}
      name={name}
      text={text}
      textInner={textInner}
      levelTexts={levelTexts}
      nextPrice={nextPrice || 0}
    />
  );
}

export default Storage;
