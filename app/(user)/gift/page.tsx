"use client";

import BoostDialog from "@/components/Gift/BoostDialog";
import GameDialog from "@/components/Gift/GameDialog";
import React, { useEffect } from "react";
import VoucherDialog from "@/components/Gift/VoucherDialog";
import { useCaseStore, useLevelStore, useVoucherStore } from "@/store/zustand";
import {
  fetchCasesFromFirestore,
  fetchLevelsFromFirestore,
  fetchVouchersFromFirestore,
} from "@/lib/firebaseFunctions";

function Page() {
  const { vouchers, setVouchers } = useVoucherStore();
  const { cases, setCases } = useCaseStore();
  const { levels, setLevels } = useLevelStore();

  useEffect(() => {
    const fetchVouchers = async () => {
      try {
        const fetchedVouchers = await fetchVouchersFromFirestore();
        setVouchers(fetchedVouchers);
        const fetchedCases = await fetchCasesFromFirestore();
        setCases(fetchedCases);
        const fetchedLevels = await fetchLevelsFromFirestore();
        setLevels(fetchedLevels);
      } catch (error) {
        console.error("Error fetching vouchers:", error);
      }
    };

    fetchVouchers();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(https://i.pinimg.com/564x/19/3a/27/193a2720e7f0edbc3508be3d29593a45.jpg)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="bg-neutral-700 min-h-screen px-4 pt-4"
    >
      <div className="grid grid-cols-2 gap-4 pb-40">
        <GameDialog />
        <BoostDialog />
        <VoucherDialog />
      </div>
    </div>
  );
}

export default Page;
