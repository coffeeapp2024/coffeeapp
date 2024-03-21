import React from "react";
import { useHomePageContentStore } from "@/store/zustand";
import GalleryImage from "./GalleryImage";

function Gallery() {
  const { homePageContent } = useHomePageContentStore();

  // Check if homePageContent exists and has a gallery array
  if (
    !homePageContent ||
    !homePageContent.gallery ||
    homePageContent.gallery.length === 0 ||
    homePageContent.gallery[0] === ""
  ) {
    return null; // Render nothing if gallery is empty or undefined
  }

  return (
    <div className="flex flex-col gap-y-3 pt-2 -mx-2 px-3">
      {homePageContent.gallery.map((imageURL, index) => (
        <GalleryImage key={index} imageURL={imageURL} />
      ))}
    </div>
  );
}

export default Gallery;
