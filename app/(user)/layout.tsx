"use client";

import Nav from "@/components/Nav";
import { auth } from "@/lib/firebase";
import { useEffect } from "react";
import {
  fetchHomePageContent,
  fetchCasesFromFirestore,
  fetchLevelsFromFirestore,
  fetchUserData,
  fetchVouchersFromFirestore,
  updateUserInFirestore,
  listenForVoucherIdListChanges,
} from "@/lib/firebaseFunctions";
import {
  useCaseStore,
  useHomePageContentStore,
  useLevelStore,
  useUserDataStore,
  useVoucherStore,
} from "@/store/zustand";
import { UserData } from "@/store/storeTypes";

function useFetchVouchersEffect() {
  const { setVouchers, vouchers } = useVoucherStore();

  useEffect(() => {
    if (!vouchers) {
      const fetchVouchers = async () => {
        try {
          const fetchedVouchers = await fetchVouchersFromFirestore();
          setVouchers(fetchedVouchers);
        } catch (error) {
          console.error("Error fetching vouchers:", error);
        }
      };

      fetchVouchers();
    }
  }, [setVouchers, vouchers]);
}

function useFetchCasesEffect() {
  const { setCases, cases } = useCaseStore();

  useEffect(() => {
    if (!cases) {
      const fetchCases = async () => {
        try {
          const fetchedCases = await fetchCasesFromFirestore();
          setCases(fetchedCases);
        } catch (error) {
          console.error("Error fetching cases:", error);
        }
      };

      fetchCases();
      console.log("fetch cases");
    }
  }, [setCases, cases]);
}

function useFetchLevelsEffect() {
  const { setLevels, levels } = useLevelStore();

  useEffect(() => {
    if (!levels) {
      const fetchLevels = async () => {
        try {
          const fetchedLevels = await fetchLevelsFromFirestore();
          setLevels(fetchedLevels);
        } catch (error) {
          console.error("Error fetching levels:", error);
        }
      };

      fetchLevels();
    }
  }, [setLevels, levels]);
}

function useHomePageContentEffect() {
  const { homePageContent, setHomePageContent } = useHomePageContentStore();

  useEffect(() => {
    if (!homePageContent) {
      const fetchData = async () => {
        try {
          const homePageContent = await fetchHomePageContent();
          setHomePageContent(homePageContent);
        } catch (error) {
          console.error("Error fetching home page content:", error);
        }
      };

      fetchData();
    }
  }, [setHomePageContent, homePageContent]);
}

function useAuthEffect() {
  const { userData, userId, setUserData, setUserId } = useUserDataStore();

  useEffect(() => {
    if (!userData || !userId) {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          try {
            const fetchedUserData = await fetchUserData(user.uid);
            setUserData(fetchedUserData);
            setUserId(user.uid);
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        } else {
          setUserData(null);
        }
      });

      return () => unsubscribe();
    }
  }, [userData, userId, setUserData, setUserId]);
}

function useUpdateUserEffect(userData: UserData | null, userId: string | null) {
  useEffect(() => {
    if (userData && userId) {
      const updateUser = async () => {
        try {
          await updateUserInFirestore(userId, userData);
        } catch (error) {
          console.error("Error updating user data:", error);
        }
      };

      updateUser();
    }
  }, [userData, userId]);
}

function UserVoucherIdListListener() {
  const { userId, userData, setUserData } = useUserDataStore();

  useEffect(() => {
    let unsubscribe: any;
    if (userId && userData) {
      unsubscribe = listenForVoucherIdListChanges(userId, (voucherIdList) => {
        // Update the user data with the new voucherIdList
        const updatedUserData: UserData = {
          ...userData,
          voucherIdList: voucherIdList,
        };
        setUserData(updatedUserData);

        // updateUserInFirestore(userId, updatedUserData);
      });
    }
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [userId, userData, setUserData]);

  return <div>Component content here</div>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userData, userId, setUserData, setUserId } = useUserDataStore();
  const { homePageContent, setHomePageContent } = useHomePageContentStore();
  const { vouchers, setVouchers } = useVoucherStore();
  const { cases, setCases } = useCaseStore();
  const { levels, setLevels } = useLevelStore();

  useAuthEffect();
  useHomePageContentEffect();
  useFetchVouchersEffect();
  useFetchCasesEffect();
  useFetchLevelsEffect();

  useUpdateUserEffect(userData, userId);

  return (
    <main>
      <Nav />
      {children}
    </main>
  );
}
