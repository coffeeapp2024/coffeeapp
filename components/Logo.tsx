import React from "react";

function Logo({ textColor }: { textColor: string }) {
  return (
    <div className="">
      <h1 className={`text-4xl font-extrabold text-${textColor} w-fit mx-auto`}>
        The Coffee House
      </h1>
    </div>
  );
}

export default Logo;
