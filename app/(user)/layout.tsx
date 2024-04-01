"use client";

import React, { useEffect } from "react";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";
import {
  useUserDataStore,
  useCoinStore,
  useShopStore,
  useEventPostStore,
  useCheckinPostStore,
  useVoucherStore,
  useCaseStore,
  useHomePageContentStore,
  useMinePageContentStore,
  useProductStore,
  useProductTagStore,
  useStorageStore,
  useBalanceLevelStore,
  useVoucherPageContentStore,
  VoucherPageContent,
  useToppingsStore,
} from "@/store/zustand";
import {
  Account,
  HomePageContent,
  MinePageContent,
  UserData,
} from "@/store/storeTypes";
import { calcInitialCoin } from "@/lib/coinActions";
import {
  fetchCollectionData,
  findValueByKeyWithCondition,
  getDocumentById,
  getKeyValue,
} from "@/lib/firebaseUtils";
import Testing from "@/components/Testing";
import Nav from "@/components/Nav";
import { NextUIProvider } from "@nextui-org/system";
import QrcodeDialogTemplate from "@/components/Template/QrcodeDialogTemplate";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userData, userId, setRole, setUserData, setUserId } =
    useUserDataStore();
  const { setCurrentCoin } = useCoinStore();
  const { setBanner } = useShopStore();
  const { setPosts: setEventPost } = useEventPostStore();
  const { setPosts: setCheckinPost } = useCheckinPostStore();
  const { setCases } = useCaseStore();
  const { setVouchers } = useVoucherStore();
  const { setHomePageContent } = useHomePageContentStore();
  const { setMinePageContent } = useMinePageContentStore();
  const { setVoucherPageContent } = useVoucherPageContentStore();
  const { setProducts } = useProductStore();
  const { setProductTags } = useProductTagStore();
  const { setToppings } = useToppingsStore();
  const { setStorages } = useStorageStore();
  const { setBalanceLevels } = useBalanceLevelStore();

  useEffect(() => {
    // Fetch user data and set role
    const fetchUserDataAndSetRole = async () => {
      if (!userData || !userId) {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
          if (user && user.email) {
            try {
              const fetchedUserData = (await getDocumentById(
                "users",
                user.uid
              )) as UserData;

              if (fetchedUserData) {
                // Update balance if available
                const miningHourPerQrCodeLevel =
                  fetchedUserData.miningHourPerQrCodeLevel;
                const balance = await findValueByKeyWithCondition(
                  "miningHourPerQrCodeLevels",
                  "level",
                  miningHourPerQrCodeLevel,
                  "miningHourPerQrCode"
                );
                fetchedUserData.balance = balance;
                console.log("Set new balance:", fetchedUserData.balance);
              }

              // Fetch admin accounts
              const fetchedAccounts = (await getDocumentById(
                "admin",
                "accounts"
              )) as Account;

              // Determine user role based on fetched accounts data
              const { staff, manager, testing } = fetchedAccounts;
              const role = testing
                ? "manager"
                : staff?.includes(user.email)
                ? "staff"
                : manager?.includes(user.email)
                ? "manager"
                : null;
              console.log("User role:", role);

              // Set user role and ID
              setRole(role);
              setUserId(user.uid);

              // Add 100 coins if in testing mode
              if (testing && fetchedUserData) {
                fetchedUserData.coin += 100;
                toast.info("Testing Mode! +100 coin");
                console.log("Testing Mode! +100 coin");
              }

              // Set user data
              console.log("Fetched user data:", fetchedUserData);
              setUserData(fetchedUserData);
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
    };

    fetchUserDataAndSetRole();

    const fetchMineContent = async () => {
      const fetchedMinePageContent = (await getDocumentById(
        "contents",
        "minePage"
      )) as MinePageContent;
      setMinePageContent(fetchedMinePageContent);
    };
    fetchMineContent();

    // Fetch shop data
    const fetchShopData = async () => {
      const fetchedBannerURL = await getKeyValue(
        "contents",
        "shopPage",
        "bannerURL"
      );
      setBanner(fetchedBannerURL);
    };
    fetchShopData();

    // Fetch post images for event and check-in posts
    const fetchPostImages = async () => {
      const fetchedPostImagesEvent = await fetchCollectionData("eventImages");
      setEventPost(fetchedPostImagesEvent);
      const fetchedPostImagesCheckin = await fetchCollectionData(
        "checkinImages"
      );
      setCheckinPost(fetchedPostImagesCheckin);
    };
    fetchPostImages();

    // Fetch vouchers
    const fetchVouchers = async () => {
      const fetchedVouchers = await fetchCollectionData("vouchers");
      setVouchers(fetchedVouchers);
    };
    fetchVouchers();

    // Fetch cases
    const fetchCases = async () => {
      const fetchedCases = await fetchCollectionData("cases");
      setCases(fetchedCases);
    };
    fetchCases();

    // Fetch homepage content
    const fetchHomePageContent = async () => {
      const fetchedHomePageContent = (await getDocumentById(
        "contents",
        "homepage"
      )) as HomePageContent;
      setHomePageContent(fetchedHomePageContent);
    };
    fetchHomePageContent();

    const fetchVoucherPageContent = async () => {
      const voucherPageContent = (await getDocumentById(
        "contents",
        "voucherPage"
      )) as VoucherPageContent;
      setVoucherPageContent(voucherPageContent);
    };
    fetchVoucherPageContent();

    // Fetch miningHourPerQrCodeLevels
    const fetchStorageData = async () => {
      const fetchedMiningHourPerQrCodeLevels = await fetchCollectionData(
        "miningHourPerQrCodeLevels"
      );
      setStorages(fetchedMiningHourPerQrCodeLevels);
    };
    fetchStorageData();

    // Fetch balanceLevels
    const fetchBalanceLevels = async () => {
      const fetchedBalanceLevels = await fetchCollectionData("balanceLevels");
      setBalanceLevels(fetchedBalanceLevels);
    };
    fetchBalanceLevels();

    // Fetch products
    const fetchProducts = async () => {
      const fetchedProducts = await fetchCollectionData("products");
      setProducts(fetchedProducts);
    };
    fetchProducts();

    // Fetch product tags
    const fetchProductTags = async () => {
      const tags = await fetchCollectionData("productTags");
      setProductTags(tags);
    };
    fetchProductTags();

    // Fetch toppings
    const fetchToppings = async () => {
      const fetchedToppings = await fetchCollectionData("toppings");
      setToppings(fetchedToppings);
    };
    fetchToppings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reset CurrentCoin when userData changes
  useEffect(() => {
    const fetchInitialCoin = () => {
      if (!userData) return console.log("User data not found");
      const initialCoin = calcInitialCoin(userData);
      setCurrentCoin(initialCoin);
      console.log("Reset CurrentCoin when user data changes:", initialCoin);
    };

    fetchInitialCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    userData?.balance,
    userData?.coin,
    userData?.endTimeMine,
    userData?.startTimeMine,
  ]);

  return (
    <NextUIProvider>
      <main className="relative mx-auto w-full">
        <Testing />
        <Nav />
        {children}
      </main>
    </NextUIProvider>
  );
}
