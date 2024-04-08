"use client";

import React, { useEffect } from "react";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";
import {
  useUserDataStore,
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
  useFireplaceLevelStore,
  useToppingsStore,
} from "@/store/zustand";
import {
  Account,
  HomePageContent,
  MinePageContent,
  UserData,
} from "@/store/storeTypes";
import {
  fetchCollectionData,
  getDocumentById,
  getKeyValue,
  updateDocumentByKeyCondition,
} from "@/lib/firebaseUtils";
import Testing from "@/components/Testing";
import Nav from "@/components/Nav";
import { NextUIProvider } from "@nextui-org/system";
import { calcBalanceInStorage } from "@/lib/userActions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userData, userId, setRole, setUserData, setUserId } =
    useUserDataStore();
  const { endTimeMine, startTimeMine, balance, email } = userData ?? {};
  const { setBanner } = useShopStore();
  const { setPosts: setEventPost } = useEventPostStore();
  const { setPosts: setCheckinPost } = useCheckinPostStore();
  const { setCases } = useCaseStore();
  const { setVouchers } = useVoucherStore();
  const { setHomePageContent } = useHomePageContentStore();
  const { setMinePageContent } = useMinePageContentStore();
  const { setProducts } = useProductStore();
  const { setProductTags } = useProductTagStore();
  const { setToppings } = useToppingsStore();
  const { setStorages } = useStorageStore();
  const { setFireplaceLevels } = useFireplaceLevelStore();

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

              // Add 100 min to balance if in testing mode
              if (testing && fetchedUserData) {
                fetchedUserData.balance += 100;
                toast.info("Testing Mode! +100 min");
                console.log("Testing Mode! +100 min");
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

    // Fetch voucher page content
    const fetchHomePageContent = async () => {
      const fetchedHomePageContent = (await getDocumentById(
        "contents",
        "homepage"
      )) as HomePageContent;
      setHomePageContent(fetchedHomePageContent);
    };
    fetchHomePageContent();

    // Fetch storageLevels
    const fetchStorageData = async () => {
      const fetchedStorageLevels = await fetchCollectionData("storages");
      setStorages(fetchedStorageLevels);
    };
    fetchStorageData();

    // Fetch FireplaceLevels
    const fetchFireplaceLevels = async () => {
      const fetchedBalanceLevels = await fetchCollectionData("fireplaces");
      setFireplaceLevels(fetchedBalanceLevels);
    };
    fetchFireplaceLevels();

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (userData && startTimeMine && endTimeMine && balance) {
        const now = new Date();
        const endTime = new Date(endTimeMine);
        if (now >= endTime) {
          const balanceInStorage = calcBalanceInStorage(userData);
          const newUserData = {
            ...userData,
            balance: balance + balanceInStorage,
            startTimeMine: null,
            endTimeMine: null,
          };
          setUserData(newUserData);
          updateDocumentByKeyCondition("users", "email", email, newUserData);
          console.log("End time mine reached. User data updated:", newUserData);
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endTimeMine]);

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
