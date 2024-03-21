import React, { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { PostType } from "@/store/storeTypes";

export type onLikedClickedType = (postId: string, liked: boolean) => void;

type PostTemplateProps = {
  post: PostType;
  userLikedPostList: string[];
  onLikeClicked: onLikedClickedType;
};
function PostTemplate({
  post,
  onLikeClicked,
  userLikedPostList,
}: PostTemplateProps) {
  const [isLiked, setIsLiked] = useState(false);
  const { id, imageURL, likedNumber } = post;

  useEffect(() => {
    // Set initial liked state based on whether the post ID exists in the user's liked list
    setIsLiked(userLikedPostList?.includes(id || ""));
  }, [userLikedPostList, id]);

  const handleLikeClicked = () => {
    if (!id) return;
    setIsLiked(!isLiked);
    onLikeClicked(id, !isLiked); // Toggle liked state and call parent callback
  };

  return (
    <div className="relative aspect-square overflow-hidden bg-black w-full rounded-2xl">
      {imageURL && (
        <Image
          src={imageURL}
          fill={true}
          sizes="(max-width: 640px) 100vw, 640px"
          alt="PostTemplate Image"
          className="object-center object-cover"
        />
      )}

      <button
        onClick={handleLikeClicked}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center bg-neutral-800 rounded-3xl px-3 py-1 gap-x-1 opacity-90"
      >
        {isLiked ? (
          <HeartSolidIcon className="w-8 h-8 text-red-600" />
        ) : (
          <HeartIcon className="w-8 h-8" />
        )}

        <span>{likedNumber}</span>
      </button>
    </div>
  );
}

export default PostTemplate;
