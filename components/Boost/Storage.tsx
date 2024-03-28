import React from "react";
import { useStorageStore, useUserDataStore } from "@/store/zustand";
import { BoltIcon } from "@heroicons/react/24/outline";
import BoostDrawer from "./BoostDrawer";
import { toast } from "sonner";
import { updateUserInFirestore } from "@/lib/firebaseFunctions";
import {
  updateDocumentInCollection,
  updateKeyInDocument,
} from "@/lib/firebaseUtils";

const iconSize = "w-10 h-10";
const storageIcons = [
  <BoltIcon key="1" className={`${iconSize}`} />,
  <BoltIcon key="2" className={`${iconSize} text-yellow-500`} />,
];
const text = "Increase the fill <br/> time to claim less often";

function Storage() {
  const { userData, userId, setUserData } = useUserDataStore();
  const { storages } = useStorageStore();
  if (!storages) return;

  const maxStorageLevel = Math.max(...storages.map((storage) => storage.level));
  const userStorageLevel = userData?.miningHourPerQrCodeLevel;
  const isMaxLevel = userStorageLevel === maxStorageLevel;
  const nextStorageLevel = userStorageLevel && userStorageLevel + 1;

  const userStorage = storages.find(
    (storage) => storage.level === userStorageLevel
  );
  const nextStorage = storages.find(
    (storage) => storage.level === nextStorageLevel
  );

  const { level, name, miningHourPerQrCode } = userStorage ?? {};

  const {
    name: nextName,
    level: nextLevel,
    price: nextPrice,
    miningHourPerQrCode: nextminingHourPerQrCode,
  } = nextStorage ?? {};

  const levelTexts = [
    `Claim ${miningHourPerQrCode} per QR Code`,
    `Claim ${nextminingHourPerQrCode} per QR Code`,
  ];

  const handleUpgradeClick = async () => {
    if (!userData || !nextLevel || !userId) return;
    const newUserData = {
      ...userData,
      miningHourPerQrCodeLevel: nextLevel,
    };
    await updateDocumentInCollection("users", userId, newUserData);
    setUserData(newUserData);

    toast.success("Upgrade successful!");
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
      levelTexts={levelTexts}
      price={nextPrice}
    />
  );
}

export default Storage;
