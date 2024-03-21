import React from "react";
import UploadImageButton from "../PostTemplate/UploadImageButton";
import { toast } from "sonner";
import { useCheckinPostStore, useUserDataStore } from "@/store/zustand";
import { onLikedClickedType } from "../PostTemplate/PostTemplate";
import {
  updateLikedNumberInFirestore,
  uploadImageToFirebaseAndAddToCollection,
} from "@/lib/firebaseFunctions";
import PostList from "../PostTemplate/PostList";

function Gallery() {
  const { addPost, posts, name, setLikedNumber } = useCheckinPostStore();
  const { setUserData, userData, userId } = useUserDataStore();
  const LikedCheckinImageIdList = userData?.LikedCheckinImageIdList ?? [];

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
      ? [...LikedCheckinImageIdList, postId]
      : LikedCheckinImageIdList.filter((id) => id !== postId);

    // Update user data
    setUserData({
      ...userData,
      LikedCheckinImageIdList: updatedLikedEventImageIdList,
    });
  };

  const handleFileSelect = async (file: File) => {
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
    } catch (error) {
      console.error("Error uploading image and adding to collection:", error);
      toast.error("Error");
    }
  };
  return (
    <div className="w-full">
      <div className="flex items-center gap-x-2 pr-2 mb-2">
        <h3 className="font-bold text-2xl text-white">Check in Gallery</h3>
      </div>
      <PostList
        onLikeClicked={handleLikeClicked}
        userLikedPostList={LikedCheckinImageIdList}
        posts={posts}
      />
      <div className="flex items-center justify-center">
        <UploadImageButton onFileSelect={handleFileSelect} />
      </div>
    </div>
  );
}

export default Gallery;
