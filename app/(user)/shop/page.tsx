import BannerProductPage from "@/components/Shop/BannerProductPage";
import Menu from "@/components/Shop/Menu";
import RecommendProductCards from "@/components/Shop/RecommendProductCards";
import React from "react";

function page() {
  return (
    <div className="min-h-[200vh] w-full bg-neutral-100">
      <BannerProductPage />
      <RecommendProductCards />
      <Menu />
    </div>
  );
}

export default page;
