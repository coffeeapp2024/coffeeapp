import BoostCard from "@/components/Boost/BoostCard";
import React from "react";

function page() {
  return (
    <div
      // style={{
      //   backgroundImage: `url("/bg/boost-bg.jpg")`,
      //   backgroundPosition: "left",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
      className="bg-gradient-to-t from-orange-200 to-orange-50 min-h-screen px-4 pt-40"
    >
      <BoostCard />
    </div>
  );
}

export default page;
