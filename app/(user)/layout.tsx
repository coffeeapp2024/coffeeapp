"use client";

import Nav from "@/components/Nav";
import { auth } from "@/lib/firebase";
import { useEffect, useState } from "react";
import {
  fetchHomePageContent,
  fetchCasesFromFirestore,
  fetchLevelsFromFirestore,
  fetchUserData,
  fetchVouchersFromFirestore,
  updateUserInFirestore,
  listenForVoucherIdListChanges,
  getAllPostImages,
} from "@/lib/firebaseFunctions";
import { Unsubscribe } from "firebase/firestore";
import {
  useCaseStore,
  useEventPostStore,
  useHomePageContentStore,
  useLevelStore,
  useUserDataStore,
  useVoucherStore,
} from "@/store/zustand";
import { PostStore, UserData } from "@/store/storeTypes";
import { isEqual } from "lodash";

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
  const { setShouldUpdate } = useUpdateUserEffect();

  useEffect(() => {
    setShouldUpdate(false);
    if (!userData || !userId) {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          try {
            const fetchedUserData = await fetchUserData(user.uid);
            setUserData(fetchedUserData);
            setUserId(user.uid);
            console.log("login");
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        } else {
          setUserData(null);
        }
      });

      return () => unsubscribe();
    }
  }, [userData, userId, setUserData, setUserId, setShouldUpdate]);
}

function useUpdateUserEffect() {
  const { userData, userId } = useUserDataStore();
  const [shouldUpdate, setShouldUpdate] = useState(true); // Flag to control update

  useEffect(() => {
    if (shouldUpdate && userData && userId) {
      const updateUser = async () => {
        try {
          await updateUserInFirestore(userId, userData);
        } catch (error) {
          console.error("Error updating user data:", error);
        }
      };

      updateUser();
      console.log("update firebase");
    }
  }, [shouldUpdate, userData, userId]);

  return { setShouldUpdate };
}

export async function UserVoucherIdListListener() {
  const { userId, userData, setUserData } = useUserDataStore();
  const { setShouldUpdate } = useUpdateUserEffect();

  useEffect(() => {
    setShouldUpdate(false);

    let unsubscribe: Unsubscribe | undefined = undefined;
    if (userId && userData) {
      unsubscribe = listenForVoucherIdListChanges(userId, (voucherIdList) => {
        if (isEqual(voucherIdList, userData.voucherIdList)) {
          console.log("equal");
        } else {
          // Update the user data with the new voucherIdList
          const updatedUserData: UserData = {
            ...userData,
            voucherIdList: voucherIdList,
          };
          console.log("update");
          setUserData(updatedUserData);
        }
      });
    }
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [userId, userData, setUserData, setShouldUpdate]);
}

function useFetchPostImagesEffect(usePostStore: PostStore) {
  const { setPosts, posts, name } = usePostStore;
  useEffect(() => {
    const fetchPostImages = async () => {
      try {
        if (!name) return;
        const fetchedPostImages = await getAllPostImages(name);
        if (fetchedPostImages.length > 0 && posts.length === 0) {
          setPosts(fetchedPostImages);
          console.log(
            `Fetched and set post images from Firestore for collection ${name}.`
          );
        } else {
          console.log(`No post images found for collection ${name}.`);
        }
      } catch (error) {
        console.error(
          `Error fetching post images for collection ${name}:`,
          error
        );
      }
    };

    fetchPostImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // No dependencies as we only want this effect to run once
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useAuthEffect();
  useHomePageContentEffect();
  useFetchVouchersEffect();
  useFetchCasesEffect();
  useFetchLevelsEffect();

  UserVoucherIdListListener();

  useUpdateUserEffect();

  useFetchPostImagesEffect(useEventPostStore());

  return (
    <main>
      <Nav />
      {children}
    </main>
  );
}
