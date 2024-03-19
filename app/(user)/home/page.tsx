"use client";

import AboutImageList from "@/components/Home/AboutImageList";
import Event from "@/components/Home/Event";
import Gallery from "@/components/Home/Gallery";
import Info from "@/components/Home/Info";
import Video from "@/components/Video";
import { fetchHomePageContent, fetchUserData } from "@/lib/firebaseFunctions";
import { useHomePageContentStore, useUserDataStore } from "@/store/zustand";
import React, { useEffect } from "react";
import { auth } from "@/lib/firebase";

function Page() {
  const { userData, setUserData, setUserId } = useUserDataStore();
  const { setHomePageContent } = useHomePageContentStore();

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
    const fetchData = async () => {
      try {
        const homePageContent = await fetchHomePageContent();
        setHomePageContent(homePageContent);
      } catch (error) {
        console.error("Error fetching home page content:", error);
      }
    };

    fetchData();
  }, [setHomePageContent]);

  return (
    <div className="bg-neutral-950 min-h-screen text-white px-2">
      <div className="-mx-2 mb-2">
        <Video />
      </div>
      <Info />
      <div className="custom-divide"></div>
      <Event />
      <div className="custom-divide"></div>
      <Gallery />
      <div className="custom-divide"></div>
      <AboutImageList />
    </div>
  );
}

export default Page;
