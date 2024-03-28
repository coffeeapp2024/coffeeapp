import React from "react";
import BoostDialog from "./BoostDialog";
import { FireIcon } from "@heroicons/react/24/outline";
import BoostDrawer from "./BoostDrawer";
import { useBalanceLevelStore, useUserDataStore } from "@/store/zustand";
import { updateUserDataAfterPurchase } from "@/lib/coinActions";
import { toast } from "sonner";

const iconSize = "w-10 h-10";
const text = "Increase passive mining speed";

const fireplaceIcons = [
  <FireIcon key="1" className={`${iconSize}`} />,
  <FireIcon key="2" className={`${iconSize} text-red-600`} />,
];

function Fireplace() {
  const { userData, setUserData } = useUserDataStore();

  const { balanceLevels } = useBalanceLevelStore();
  if (!balanceLevels) return;

  const maxStorageLevel = Math.max(
    ...balanceLevels.map((storage) => storage.level)
  );
  const userBalanceLevel = userData?.balanceLevel;
  const isMaxLevel = userBalanceLevel === maxStorageLevel;
  const nextBalanceLevel = userBalanceLevel && userBalanceLevel + 1;

  const userBalanceLevelData = balanceLevels.find(
    (storage) => storage.level === userBalanceLevel
  );
  const nextBalanceLevelData = balanceLevels.find(
    (storage) => storage.level === nextBalanceLevel
  );

  const { level, name, balance } = userBalanceLevelData ?? {};

  const {
    name: nextName,
    level: nextLevel,
    price: nextPrice,
    balance: nextBalance,
  } = nextBalanceLevelData ?? {};

  const levelTexts = [`${balance} min per hour`, `${nextBalance} min per hour`];

  const handleUpgradeClick = async () => {
    if (!userData || !nextLevel || !nextPrice) return;

    await updateUserDataAfterPurchase(userData, nextPrice, setUserData, [
      {
        key: "balanceLevel",
        value: nextLevel,
      },
    ]);
    toast.success("Upgrade successful!");
  };

  return (
    <BoostDrawer
      icons={fireplaceIcons}
      nextName={nextName}
      text={text}
      isMaxLevel={isMaxLevel}
      onClickUpgrade={handleUpgradeClick}
      level={level}
      name={name}
      levelTexts={levelTexts}
      price={nextPrice}
    />
  );
}

export default Fireplace;
