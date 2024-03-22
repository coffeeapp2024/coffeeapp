import React from "react";
import UploadImageButton from "../PostTemplate/UploadImageButton";
import { toast } from "sonner";
import {
  useCheckinPostStore,
  useHomePageContentStore,
  useUserDataStore,
} from "@/store/zustand";
import { onLikedClickedType } from "../PostTemplate/PostTemplate";
import {
  updateLikedNumberInFirestore,
  updateUserInFirestore,
  uploadImageToFirebaseAndAddToCollection,
} from "@/lib/firebaseFunctions";
import PostList from "../PostTemplate/PostList";

function Checkin() {
  const { homePageContent } = useHomePageContentStore();
  const { addPost, posts, name, setLikedNumber } = useCheckinPostStore();
  const { setUserData, userData, userId } = useUserDataStore();
  const LikedCheckinImageIdList = userData?.LikedCheckinImageIdList ?? [];

  const handleLikeClicked: onLikedClickedType = async (
    postId: string,
    liked: boolean
  ) => {
    if (!userData || !userId || !name) return;

    // Update the liked number for the post
    const newLikedNumber = await setLikedNumber(postId, liked);
    await updateLikedNumberInFirestore(postId, newLikedNumber, name);

    // Add or remove postId from the liked list in user data
    const updatedLikedCheckinImageIdList = liked
      ? [...LikedCheckinImageIdList, postId]
      : LikedCheckinImageIdList.filter((id) => id !== postId);

    const newUserData = {
      ...userData,
      LikedCheckinImageIdList: updatedLikedCheckinImageIdList,
    };

    // Update user data
    setUserData(newUserData);
    await updateUserInFirestore(userId, newUserData);
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
          {homePageContent?.checkinTitle ?? "Check in Gallery"}
        </h3>
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

export default Checkin;
