"use client";

import type { Post } from "@/lib/types";
import { CheckinImage } from "@/store/storeTypes";
import { useCheckinStore } from "@/store/zustand";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useState } from "react";

function Post({ checkin }: { checkin: CheckinImage }) {
  const { decreaseLikedNumber, increaseLikedNumber } = useCheckinStore();
  const { imageURL, likedNumber, id } = checkin;
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClicked = () => {
    setIsLiked(!isLiked);

    isLiked ? decreaseLikedNumber(id) : increaseLikedNumber(id);
  };

  return (
    <div className="relative aspect-square overflow-hidden bg-black w-full rounded-2xl">
      {imageURL && (
        <Image
          src={imageURL}
          fill={true}
          sizes="(max-width: 640px) 100vw, 640px"
          alt="Post Image"
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

        <span>{likedNumber ?? 0}</span>
      </button>
    </div>
  );
}

export default Post;
