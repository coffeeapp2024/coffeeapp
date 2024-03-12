import React from "react";
import AboutImage from "./AboutImage";

function AboutImageList() {
  const imageUrlList = ["/img/cf1.jpg", "/img/cf2.jpg", "/img/cf3.jpg"];

  return (
    <div className="px-1 flex flex-col gap-y-3">
      {imageUrlList.map((img_url, index) => (
        <AboutImage key={index} img_url={img_url} />
      ))}
    </div>
  );
}

export default AboutImageList;
