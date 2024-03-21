"use client";

import React from "react";
import PostList from "../PostTemplate/PostList";
import AboutEventButton from "./AboutEventButton";
import {
  useEventPostStore,
  useHomePageContentStore,
  useUserDataStore,
} from "@/store/zustand";
import { toast } from "sonner";
import UploadImageButton from "../PostTemplate/UploadImageButton";
import {
  updateLikedNumberInFirestore,
  uploadImageToFirebaseAndAddToCollection,
} from "@/lib/firebaseFunctions";
import { onLikedClickedType } from "../PostTemplate/PostTemplate";

function Event() {
  const { homePageContent } = useHomePageContentStore();
  const { eventTitle, eventPosterURL, eventText } = homePageContent ?? {};
  const { addPost, posts, name, setLikedNumber } = useEventPostStore();
  const { setUserData, userData, userId } = useUserDataStore();
  const likedEventImageIdList = userData?.LikedEventImageIdList ?? [];

  const handleLikeClicked: onLikedClickedType = async (
    postId: string,
    liked: boolean
  ) => {
    if (!userData || !name) return;

    // Update the liked number for the post
    const newLikedNumber = await setLikedNumber(postId, liked);
    await updateLikedNumberInFirestore(postId, newLikedNumber, name);

    // Add or remove postId from the liked list in user data
    const updatedLikedEventImageIdList = liked
      ? [...likedEventImageIdList, postId]
      : likedEventImageIdList.filter((id) => id !== postId);

    // Update user data
    setUserData({
      ...userData,
      LikedEventImageIdList: updatedLikedEventImageIdList,
    });
  };

  const handleFileSelect = async (file: File) => {
    const promise = async () => {
      try {
        if (!userData || !userData.email || !userId || !name) {
          throw new Error("User data is incomplete");
        }

        // Upload the image and add it to the collection
        const newEventPost = await uploadImageToFirebaseAndAddToCollection(
          file,
          userId,
          userData.email,
          name
        );

        // Add the new post to the store
        addPost(newEventPost);

        // Return any data you want to be displayed in the success message
        return;
      } catch (error) {
        // Throw the error to be caught by toast.promise
        throw error;
      }
    };

    toast.promise(promise(), {
      loading: "Uploading...",
      success: (data) => {
        return `Image uploaded successfully!`;
      },
      error: "Error uploading image",
    });
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-x-2 pr-2 mb-2">
        <h3 className="font-bold text-2xl text-white">
          {eventTitle ?? "Event this month"}
        </h3>
        {eventPosterURL && <AboutEventButton eventPosterURL={eventPosterURL} />}
      </div>
      <p className="text-white opacity-90 mb-2">{eventText}</p>
      <PostList
        onLikeClicked={handleLikeClicked}
        userLikedPostList={likedEventImageIdList}
        posts={posts}
      />
      <div className="flex items-center justify-center">
        <UploadImageButton onFileSelect={handleFileSelect} />
      </div>
    </div>
  );
}

export default Event;
