"use client";

import React, { useEffect } from "react";
import { auth, db } from "@/lib/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { toast } from "sonner";
import {
  fetchCasesFromFirestore,
  fetchLevelsFromFirestore,
  fetchUserData,
  fetchVouchersFromFirestore,
  getAllPostImages,
  fetchProductsFromFirestore,
  fetchProductTagsFromFirestore,
  fetchShopContent,
  fetchAllStorageDocs,
} from "@/lib/firebaseFunctions";
import {
  useUserDataStore,
  useCoinStore,
  useShopStore,
  useEventPostStore,
  useCheckinPostStore,
  useVoucherStore,
  useCaseStore,
  useLevelStore,
  useHomePageContentStore,
  useMinePageContentStore,
  useProductStore,
  useProductTagStore,
  useStorageStore,
} from "@/store/zustand";
import {
  Account,
  HomePageContent,
  MinePageContent,
  PostStore,
} from "@/store/storeTypes";
import { calculateInitialCurrentCoin } from "@/lib/coinActions";
import {
  fetchCollectionData,
  findValueByKeyWithCondition,
  getDocumentById,
} from "@/lib/firebaseUtils";
import Testing from "@/components/Testing";
import Nav from "@/components/Nav";

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
  const { setLevels } = useLevelStore();
  const { setVouchers } = useVoucherStore();
  const { setHomePageContent } = useHomePageContentStore();
  const { setMinePageContent } = useMinePageContentStore();
  const { setProducts } = useProductStore();
  const { setProductTags } = useProductTagStore();
  const { setStorages } = useStorageStore();

  useEffect(() => {
    // Fetch user data and set role
    const fetchUserDataAndSetRole = async () => {
      if (!userData || !userId) {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
          if (user && user.email) {
            try {
              const fetchedUserData = await fetchUserData(user.uid);

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

              // Fetch accounts data
              const fetchedAccounts = (
                await getDoc(doc(collection(db, "admin"), "accounts"))
              ).data() as Account;
              console.log("Fetched Account:", fetchedAccounts);

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

    // Fetch shop data
    const fetchShopData = async () => {
      try {
        const fetchedBanner = await fetchShopContent();
        setBanner(fetchedBanner);
      } catch (error) {
        console.error("Error fetching shop content:", error);
      }
    };

    fetchShopData();

    // Fetch post images for event and check-in posts
    const fetchPostImages = async () => {
      try {
        const fetchedPostImagesEvent = await getAllPostImages("event");
        setEventPost(fetchedPostImagesEvent);
        const fetchedPostImagesCheckin = await getAllPostImages("checkin");
        setCheckinPost(fetchedPostImagesCheckin);
      } catch (error) {
        console.error("Error fetching post images:", error);
      }
    };

    fetchPostImages();

    // Fetch vouchers
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

    // Fetch cases
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

    // Fetch levels
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

    // Fetch homepage content and storage documents
    const fetchHomePageContent = async () => {
      const fetchedHomePageContent = (await getDocumentById(
        "contents",
        "homepage"
      )) as HomePageContent;
      setHomePageContent(fetchedHomePageContent);
    };
    fetchHomePageContent();

    // Fetch miningHourPerQrCodeLevels
    const fetchStorageData = async () => {
      const fetchedMiningHourPerQrCodeLevels = await fetchCollectionData(
        "miningHourPerQrCodeLevels"
      );
      setStorages(fetchedMiningHourPerQrCodeLevels);
    };
    fetchStorageData();

    // Fetch products
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await fetchProductsFromFirestore();
        setProducts(fetchedProducts);
        console.log("Fetched products from Firestore:", fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();

    // Fetch product tags
    const fetchProductTags = async () => {
      try {
        const tags = await fetchProductTagsFromFirestore();
        setProductTags(tags);
        console.log("Fetched product tags from Firestore:", tags);
      } catch (error) {
        console.error("Error fetching product tags:", error);
      }
    };

    fetchProductTags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Fetch initial coin
    const fetchInitialCoin = () => {
      const { balance, coin, startTimeMine } = userData ?? {};
      if (balance && coin) {
        const initialCoin = calculateInitialCurrentCoin(
          balance,
          coin,
          startTimeMine
        );
        setCurrentCoin(initialCoin);
        console.log("Reset CurrentCoin when userData changes:", initialCoin);
      }
    };

    fetchInitialCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  return (
    <main className="relative mx-auto w-full">
      <Testing />
      <Nav />
      {children}
    </main>
  );
}
