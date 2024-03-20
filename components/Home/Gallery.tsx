import React from "react";
import PostList from "./PostList";
import UploadImageButton from "./UploadImageButton";
import { useCheckinStore, useUserDataStore } from "@/store/zustand";
import { toast } from "sonner";

function Gallery() {
  const { addCheckin } = useCheckinStore();
  const { userData, userId } = useUserDataStore();

  const handleFileSelect = (file: File) => {
    if (userData && userData.email && userId)
      addCheckin(file, userData?.email, userId);
    else {
      toast.error("Error");
      return;
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-x-2 pr-2 mb-2">
        <h3 className="font-bold text-2xl text-white">Check in Gallery</h3>
      </div>
      <PostList />
      <div className="flex items-center justify-center">
        <UploadImageButton onFileSelect={handleFileSelect} />
      </div>
    </div>
  );
}

export default Gallery;
