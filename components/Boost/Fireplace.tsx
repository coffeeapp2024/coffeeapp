import React from "react";
import { FireIcon } from "@heroicons/react/24/outline";
import BoostDrawer from "./BoostDrawer";
import { useFireplaceLevelStore, useUserDataStore } from "@/store/zustand";
import {
  calcBalanceInStorage,
  updateUserDataAfterPurchase,
} from "@/lib/userActions";
import { toast } from "sonner";

const iconSize = "w-10 h-10";
const text = "Increase passive mining speed";
const textInner = "Better Fireplace boost mining speech";

const fireplaceIcons = [
  <FireIcon key="1" className={`${iconSize} text-rose-500`} />,
  <FireIcon key="3" className={`${iconSize} text-cyan-500`} />,
  <FireIcon key="4" className={`${iconSize} text-purple-600`} />,
  <FireIcon key="5" className={`${iconSize} text-red-600`} />,
];

function Fireplace() {
  const { userData, setUserData } = useUserDataStore();

  const { fireplaceLevels } = useFireplaceLevelStore();
  if (!fireplaceLevels) return;

  const maxFireplaceLevel = Math.max(
    ...fireplaceLevels.map((fireplaceLevel) => fireplaceLevel.level)
  );
  const userFireplaceLevel = userData?.fireplaceLevel;
  const isMaxLevel = userFireplaceLevel === maxFireplaceLevel;
  const nextFireplaceLevel = userFireplaceLevel && userFireplaceLevel + 1;

  const userFireplaceLevelData = fireplaceLevels.find(
    (fireplaceLevel) => fireplaceLevel.level === userFireplaceLevel
  );
  const nextBalanceLevelData = fireplaceLevels.find(
    (fireplaceLevel) => fireplaceLevel.level === nextFireplaceLevel
  );

  const { level, name, miningSpeed } = userFireplaceLevelData ?? {};
  if (!level || !name || !miningSpeed) return;

  const {
    name: nextName,
    level: nextLevel,
    price: nextPrice,
    miningSpeed: nextMiningSpeed,
  } = nextBalanceLevelData ?? {};

  const levelTexts = [
    `${miningSpeed} min per hour`,
    `${nextMiningSpeed} min per hour`,
  ];

  const handleUpgradeClick = async () => {
    if (!userData || !nextLevel || !nextPrice) return;

    const balanceInStorage = calcBalanceInStorage(userData);

    if (balanceInStorage)
      userData.inStorage = {
        balance: balanceInStorage,
        timeAt: new Date().toISOString(),
      };

    await toast.promise(
      await updateUserDataAfterPurchase(userData, setUserData, nextPrice, {
        fireplaceLevel: nextLevel,
        miningSpeed: nextMiningSpeed,
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
      icons={fireplaceIcons}
      nextName={nextName}
      text={text}
      textInner={textInner}
      isMaxLevel={isMaxLevel}
      onClickUpgrade={handleUpgradeClick}
      level={level}
      name={name}
      levelTexts={levelTexts}
      nextPrice={nextPrice || 0}
    />
  );
}

export default Fireplace;
