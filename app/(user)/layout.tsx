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
  fetchProductsFromFirestore,
  fetchProductTagsFromFirestore,
  fetchShopContent,
} from "@/lib/firebaseFunctions";
import { Unsubscribe } from "firebase/firestore";
import {
  useCaseStore,
  useCheckinPostStore,
  useCoinStore,
  useEventPostStore,
  useHomePageContentStore,
  useLevelStore,
  useOpenQrVoucherStore,
  useProductStore,
  useProductTagStore,
  useShopStore,
  useUserDataStore,
  useVoucherStore,
} from "@/store/zustand";
import { PostStore, UserData } from "@/store/storeTypes";
import { isEqual } from "lodash";
import { calculateInitialCurrentCoin } from "@/lib/coinActions";
import { toast } from "sonner";

function useFetchVouchersEffect() {
  const { setVouchers, vouchers } = useVoucherStore();

  useEffect(() => {
    if (!vouchers) {
      const fetchVouchers = async () => {
        try {
          const fetchedVouchers = await fetchVouchersFromFirestore();
          setVouchers(fetchedVouchers);
          console.log("Voucher fetched");
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
          console.log("Cases fetched");
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
          console.log("Levels fetched");
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
          console.log("Homepage content fetched");
        } catch (error) {
          console.error("Error fetching home page content:", error);
        }
      };

      fetchData();
    }
  }, [setHomePageContent, homePageContent]);
}

function useFetchPostImagesEffect(usePostStore: PostStore) {
  const { setPosts, posts, name } = usePostStore;
  useEffect(() => {
    const fetchPostImages = async () => {
      try {
        if (!name || posts.length > 0) return;
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
  }, []);
}

function useFetchProductsEffect() {
  const { products, setProducts } = useProductStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!products) {
          const products = await fetchProductsFromFirestore();
          setProducts(products);
          console.log("Fetched products from Firestore:", products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setProducts]); // Include productsFetched in the dependency array

  return products; // Return the state variable if needed externally
}

function useFetchProductTagsEffect() {
  const { productTags, setProductTags } = useProductTagStore();

  useEffect(() => {
    const fetchProductTags = async () => {
      try {
        if (!productTags) {
          const tags = await fetchProductTagsFromFirestore();
          setProductTags(tags);
          console.log("Fetched product tags from Firestore:", tags);
        }
      } catch (error) {
        console.error("Error fetching product tags:", error);
      }
    };

    fetchProductTags();
  }, [productTags, setProductTags]);

  return productTags; // Return the productTags if needed externally
}

function useFetchShopContentEffect() {
  const { banner, setBanner } = useShopStore();
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userData, userId, setUserData, setUserId } = useUserDataStore();
  const { setCurrentCoin } = useCoinStore();
  const { banner, setBanner } = useShopStore();

  useEffect(() => {
    if (!userData || !userId) {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          try {
            const fetchedUserData = await fetchUserData(user.uid);
            setUserData(fetchedUserData);
            setUserId(user.uid);
            console.log("Login successfully");
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

  useEffect(() => {
    const { balance, coin, startTimeMine } = userData ?? {};

    if (balance && startTimeMine && coin) {
      const initialCoin = calculateInitialCurrentCoin(
        balance,
        coin,
        startTimeMine
      );
      setCurrentCoin(initialCoin);
    }
  }, [setCurrentCoin, userData]);

  useEffect(() => {
    const fetchShopData = async () => {
      try {
        const fetchedBanner = await fetchShopContent();
        setBanner(fetchedBanner);
      } catch (error) {
        console.error("Error fetching shop content:", error);
      }
    };

    if (!banner) fetchShopData();
  });

  useFetchPostImagesEffect(useEventPostStore());
  useFetchPostImagesEffect(useCheckinPostStore());

  useFetchVouchersEffect();
  useFetchCasesEffect();
  useFetchLevelsEffect();
  useHomePageContentEffect();

  useFetchProductTagsEffect();
  useFetchProductsEffect();

  return (
    <main className="mx-auto w-full">
      <Nav />
      {children}
    </main>
  );
}
