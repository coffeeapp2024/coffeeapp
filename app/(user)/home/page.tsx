"use client";

import AboutImageList from "@/components/Home/AboutImageList";
import Event from "@/components/Home/Event";
import Gallery from "@/components/Home/Gallery";
import Info from "@/components/Home/Info";
import Video from "@/components/Video";
import React from "react";

function Page() {
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
