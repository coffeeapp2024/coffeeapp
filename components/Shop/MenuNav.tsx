import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useProductTagStore } from "@/store/zustand";

function MenuNav() {
  const { productTags, currentTag, setCurrentTag } = useProductTagStore();

  const handleTagChange = (tag: string) => {
    setCurrentTag(tag);
  };
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-2">
        {productTags?.map((tag) => (
          <CarouselItem className="basis-1/2  pl-2" key={tag.tag}>
            <button onClick={() => handleTagChange(tag.tag)}>{tag.name}</button>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default MenuNav;
