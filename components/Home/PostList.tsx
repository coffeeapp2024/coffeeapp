import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Post from "./Post";

const postInfoList = [
  {
    imgUrl: "/bg/bg1.jpg",
    liked: 10,
  },
  {
    imgUrl: "/bg/bg1.jpg",
    liked: 10,
  },
  {
    imgUrl: "/bg/bg1.jpg",
    liked: 10,
  },
];

function PostList() {
  return (
    <Carousel className="-mx-2 mb-4">
      <CarouselContent className="-ml-0">
        {postInfoList.map((postInfo, index) => (
          <CarouselItem key={index} className="basis-[80%] pl-2">
            <Post postInfo={postInfo} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default PostList;
