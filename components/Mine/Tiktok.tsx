import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const videos = [
  "/video/1.mp4",
  "/video/2.mp4",
  "/video/3.mp4",
  "/video/1.mp4",
  "/video/2.mp4",
  "/video/1.mp4",
  "/video/3.mp4",
  "/video/1.mp4",
];

function Tiktok() {
  return (
    <Carousel
      orientation="vertical"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className="fixed top-0 w-full max-w-screen-sm h-screen -z-10 -mt-0">
        {videos.map((video, index) => (
          <CarouselItem
            key={index}
            className="-pt-4 !w-full !h-screen relative overflow-hidden"
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              loop={true}
              autoPlay={true}
              muted={true}
            >
              <source src={video} type="video/mp4" />
            </video>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default Tiktok;
