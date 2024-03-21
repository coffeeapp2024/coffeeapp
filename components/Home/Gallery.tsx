import React from "react";
import { useHomePageContentStore } from "@/store/zustand";
import GalleryImage from "./GalleryImage";

function Gallery() {
  const { homePageContent } = useHomePageContentStore();

  return (
    <div className="flex flex-col gap-y-3 pt-4 -mx-2 px-3">
      {homePageContent?.gallery &&
        homePageContent.gallery.map((imageURL, index) => (
          <GalleryImage key={index} imageURL={imageURL} />
        ))}
    </div>
  );
}

export default Gallery;
