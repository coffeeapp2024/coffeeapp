"use client";

import Nav from "@/components/Nav";
import { auth, db } from "@/lib/firebase";
import { useEffect } from "react";
import {
  fetchCasesFromFirestore,
  fetchLevelsFromFirestore,
  fetchUserData,
  fetchVouchersFromFirestore,
  getAllPostImages,
  fetchProductsFromFirestore,
  fetchProductTagsFromFirestore,
  fetchShopContent,
} from "@/lib/firebaseFunctions";
import {
  useCaseStore,
  useCheckinPostStore,
  useCoinStore,
  useEventPostStore,
  useHomePageContentStore,
  useLevelStore,
  useMinePageContentStore,
  useProductStore,
  useProductTagStore,
  useShopStore,
  useUserDataStore,
  useVoucherStore,
} from "@/store/zustand";
import {
  Account,
  HomePageContent,
  MinePageContent,
  PostStore,
  UserData,
} from "@/store/storeTypes";
import { calculateInitialCurrentCoin } from "@/lib/coinActions";
import { collection, doc, getDoc } from "firebase/firestore";
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

// function useHomePageContentEffect() {
//   const { homePageContent, setHomePageContent } = useHomePageContentStore();

//   useEffect(() => {
//     if (!homePageContent) {
//       const fetchData = async () => {
//         try {
//           const homePageContent = await fetchHomePageContent();
//           setHomePageContent(homePageContent);
//           console.log("Homepage content fetched");
//         } catch (error) {
//           console.error("Error fetching home page content:", error);
//         }
//       };

//       fetchData();
//     }
//   }, [setHomePageContent, homePageContent]);
// }

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userData, userId, setRole, setUserData, setUserId } =
    useUserDataStore();
  const { setCurrentCoin } = useCoinStore();
  const { banner, setBanner } = useShopStore();

  // Login
  useEffect(() => {
    if (!userData || !userId) {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user && user.email) {
          try {
            const fetchedUserData = await fetchUserData(user.uid);
            console.log("fetchedUserData:", fetchUserData);
            const fetchedAccounts = (
              await getDoc(doc(collection(db, "admin"), "accounts"))
            ).data() as Account;
            console.log("Fetched Account:", fetchedAccounts);

            const {
              staff = [],
              manager = [],
              testing = false,
            } = fetchedAccounts;

            const role = testing
              ? "manager"
              : staff?.includes(user.email)
              ? "staff"
              : manager?.includes(user.email)
              ? "manager"
              : null;
            console.log("user role:", role);

            setRole(role);
            setUserId(user.uid);
            if (
              testing &&
              fetchedUserData &&
              fetchedUserData.coin &&
              fetchedUserData.coin >= 0 &&
              fetchedUserData.coin < 500
            ) {
              fetchedUserData.coin += 100;
              toast.info("Tesing Mode! +100 coin"); // Add 1000 to coin if role is testing
              console.log("+100");
            }

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
  }, [userData, userId, setUserData, setUserId, setRole]);

  useEffect(() => {
    const { balance, coin, startTimeMine } = userData ?? {};

    if (balance && coin) {
      const initialCoin = calculateInitialCurrentCoin(
        balance,
        coin,
        startTimeMine
      );
      setCurrentCoin(initialCoin);
      console.log("initialCurrentCoin:", initialCoin);
    }
  }, [setCurrentCoin, userData]);

  useEffect(() => {
    const fetchShopData = async () => {
      try {
        if (!banner) {
          const fetchedBanner = await fetchShopContent();
          setBanner(fetchedBanner);
        }
      } catch (error) {
        console.error("Error fetching shop content:", error);
      }
    };

    fetchShopData();
  });

  useFetchPostImagesEffect(useEventPostStore());
  useFetchPostImagesEffect(useCheckinPostStore());

  useFetchVouchersEffect();
  useFetchCasesEffect();
  useFetchLevelsEffect();

  useFetchProductTagsEffect();
  useFetchProductsEffect();

  // Shortest fetching way -------------------------------------------------------------------------

  // Fetch MinePageContent
  const { minePageContent, setMinePageContent } = useMinePageContentStore();
  useEffect(() => {
    !minePageContent &&
      getDoc(doc(collection(db, "contents"), "minePage")).then((snapshot) => {
        const data = snapshot.data() as MinePageContent;
        console.log("Fetched minePageContent:", data);
        setMinePageContent(data);
      });
  }, [minePageContent, setMinePageContent]);

  // Fetch HomePageContent
  const { homePageContent, setHomePageContent } = useHomePageContentStore();
  useEffect(() => {
    !homePageContent &&
      getDoc(doc(collection(db, "contents"), "homepage")).then((snapshot) => {
        const data = snapshot.data() as HomePageContent;
        console.log("Fetched HomePageContent:", data);
        setHomePageContent(data);
      });
  }, [homePageContent, setHomePageContent]);

  return (
    <main className="relative mx-auto w-full">
      <Nav />
      {children}
    </main>
  );
}
