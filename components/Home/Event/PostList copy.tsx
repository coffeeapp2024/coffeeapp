import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Post from "../Checkin/Post";
import { useCheckinStore } from "@/store/zustand";

function PostList() {
  const { checkins } = useCheckinStore();

  return (
    <Carousel className="-mx-2 mb-4">
      <CarouselContent className="-ml-0">
        {checkins.map((checkin, index) => (
          <CarouselItem key={index} className="basis-[80%] pl-2">
            <Post checkin={checkin} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default PostList;
