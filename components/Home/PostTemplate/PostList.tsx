import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PostType } from "@/store/storeTypes";
import PostTemplate, { onLikedClickedType } from "./PostTemplate";

function PostList({
  posts,
  userLikedPostList,
  onLikeClicked,
}: {
  posts: PostType[];
  userLikedPostList: string[];
  onLikeClicked: onLikedClickedType;
}) {
  return (
    <Carousel className="-mx-2 mb-4">
      <CarouselContent className="-ml-0">
        {posts.map((post) => (
          <CarouselItem key={post.id} className="basis-[80%] pl-2">
            <PostTemplate
              post={post}
              userLikedPostList={userLikedPostList}
              onLikeClicked={onLikeClicked}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default PostList;
