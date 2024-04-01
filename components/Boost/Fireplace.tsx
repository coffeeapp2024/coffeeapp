import React from "react";
import BoostDialog from "./BoostDialog";
import { FireIcon } from "@heroicons/react/24/outline";
import BoostDrawer from "./BoostDrawer";
import { useBalanceLevelStore, useUserDataStore } from "@/store/zustand";
import { updateUserDataAfterPurchase } from "@/lib/coinActions";
import { toast } from "sonner";

const iconSize = "w-10 h-10";
const text = "Increase passive mining speed";
const textInner = "Better Fireplace boost mining speech";

const fireplaceIcons = [
  <FireIcon key="1" className={`${iconSize} text-rose-500`} />,
  <FireIcon key="1" className={`${iconSize} text-orange-500`} />,
  <FireIcon key="1" className={`${iconSize} text-cyan-500`} />,
  <FireIcon key="1" className={`${iconSize} text-purple-600`} />,
  <FireIcon key="2" className={`${iconSize} text-red-600`} />,
];

function Fireplace() {
  const { userData, setUserData } = useUserDataStore();

  const { balanceLevels } = useBalanceLevelStore();
  if (!balanceLevels) return;

  const maxBalanceLevel = Math.max(
    ...balanceLevels.map((balance) => balance.level)
  );
  const userBalanceLevel = userData?.balanceLevel;
  const isMaxLevel = userBalanceLevel === maxBalanceLevel;
  const nextBalanceLevel = userBalanceLevel && userBalanceLevel + 1;

  const userBalanceLevelData = balanceLevels.find(
    (balance) => balance.level === userBalanceLevel
  );
  const nextBalanceLevelData = balanceLevels.find(
    (balance) => balance.level === nextBalanceLevel
  );

  console.log("userBalanceLevelData", userBalanceLevelData);
  const { level, name, balance } = userBalanceLevelData ?? {};
  if (!level || !name || !balance) return;

  const {
    name: nextName,
    level: nextLevel,
    price: nextPrice,
    balance: nextBalance,
  } = nextBalanceLevelData ?? {};

  const levelTexts = [`${balance} min per hour`, `${nextBalance} min per hour`];

  const handleUpgradeClick = async () => {
    if (!userData || !nextLevel || !nextPrice) return;

    await toast.promise(
      updateUserDataAfterPurchase(userData, setUserData, nextPrice, [
        {
          key: "balanceLevel",
          value: nextLevel,
        },
        {
          key: "balance",
          value: nextBalance,
        },
      ]),
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
