"use client";

import BoostDialog from "@/components/Gift/BoostDialog";
import GameDialog from "@/components/Gift/GameDialog";
import React, { useEffect, useState } from "react";
import VoucherDialog from "@/components/Gift/VoucherDialog";
import {
  useCaseStore,
  useLevelStore,
  useUserDataStore,
  useVoucherStore,
} from "@/store/zustand";
import {
  fetchCasesFromFirestore,
  fetchLevelsFromFirestore,
  fetchUserData,
  fetchVouchersFromFirestore,
} from "@/lib/firebaseFunctions";
import { auth } from "@/lib/firebase";

function Page() {
  const { userData, setUserData, setUserId } = useUserDataStore();

  const { vouchers, setVouchers } = useVoucherStore();
  const { cases, setCases } = useCaseStore();
  const { levels, setLevels } = useLevelStore();

  useEffect(() => {
    if (userData === null) {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          try {
            console.log("rerender page");
            const fetchedUserData = await fetchUserData(user.uid);
            setUserData(fetchedUserData);
            setUserId(user.uid);
          } catch (error) {
            console.error("Error fetching or creating user data:", error);
          }
        } else {
          setUserData(null);
        }
      });

      return () => unsubscribe();
    }
  }, [userData, setUserData, setUserId]);

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
        console.error("Error fetching:", error);
      }
    };

    fetchVouchers();
  }, [setCases, setVouchers, setLevels]);

  return (
    <div
      style={{
        backgroundImage: `url("/bg/bg11.jpg")`,
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
