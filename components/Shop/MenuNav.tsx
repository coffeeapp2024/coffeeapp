import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useProductTagStore } from "@/store/zustand";

function MenuNav() {
  const { productTags, currentTag, setCurrentTag } = useProductTagStore();

  const filteredTags = productTags?.filter((tag) => tag.tag !== "popular");

  const handleTagChange = (tag: string) => {
    setCurrentTag(tag);
  };
  return (
    <Carousel className="w-full -ml-2 mt-4 mb-6">
      <CarouselContent className="-ml-0">
        {filteredTags?.map((tag) => (
          <CarouselItem className="basis-auto pl-2" key={tag.tag}>
            <button
              className={`py-2 px-5 rounded-3xl border-2 text-sm text-neutral-400 font-medium transition-all duration-75 ${
                tag.tag === currentTag
                  ? "bg-neutral-600 border-neutral-600 text-white"
                  : "border-neutral-200"
              }`}
              onClick={() => handleTagChange(tag.tag)}
            >
              {tag.name}
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default MenuNav;
