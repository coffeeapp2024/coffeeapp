"use client";

import Event from "@/components/Home/Post/Event";
import Checkin from "@/components/Home/Post/Checkin";
import Info from "@/components/Home/Info";
import Video from "@/components/Video";
import React from "react";
import Gallery from "@/components/Home/Gallery";

function Page() {
  return (
    <div className="bg-[#0d0d0d] text-white px-2 pb-32">
      <div className="-mx-2 mb-2">
        <Video />
      </div>
      <Info />
      <div className="custom-divide"></div>
      <Event />
      <div className="custom-divide"></div>
      <Checkin />
      <div className="custom-divide"></div>
      <Gallery />
    </div>
  );
}

export default Page;
