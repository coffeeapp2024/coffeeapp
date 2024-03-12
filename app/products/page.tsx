import BannerProductPage from "@/components/BannerProductPage";
import ProductCardList from "@/components/ProductCardList";
import RecommendProductCards from "@/components/RecommendProductCards";
import React from "react";

function page() {
  return (
    <div
      style={{
        backgroundImage: `url(/bg/bg7.jpg)`,
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
      className="min-h-screen w-full"
    >
      <BannerProductPage />
      <RecommendProductCards />
      <div className="bg-inherit min-h-screen px-2 mt-8">
        <h2 className="font-bold text-xl ml-1 mb-2">All</h2>
        <ProductCardList />
      </div>
    </div>
  );
}

export default page;
