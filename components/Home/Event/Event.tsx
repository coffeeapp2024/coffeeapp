import React from "react";
import PostList from "../Checkin/PostList";
import AboutEventButton from "../AboutEventButton";
import { useCheckinStore, useUserDataStore } from "@/store/zustand";
import { toast } from "sonner";

import UploadImageButton from "../UploadImageButton";

function Event() {
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
        <h3 className="font-bold text-2xl text-white">Event this month</h3>
        <AboutEventButton />
      </div>
      <p className="text-white opacity-90 mb-2">
        Lorem ipsum dolor sit amet elit. Neque, veritatis?
      </p>
      <PostList />
      <div className="flex items-center justify-center">
        <UploadImageButton onFileSelect={handleFileSelect} />
      </div>
    </div>
  );
}

export default Event;
