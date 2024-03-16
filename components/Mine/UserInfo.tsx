import Image from "next/image";
import React from "react";

function UserInfo() {
  return (
    <div className="flex items-center justify-center flex-col mb-14">
      <div className="relative rounded-full overflow-hidden w-20 h-20 mb-2">
        <Image src="/img/img9.jpg" fill={true} alt="user avatar" />
      </div>
      <h3 className="font-bold text-2xl text-neutral-900">new jeans</h3>
      <span className="font-semibold text-neutral-700">
        xinchaotraidat@gmail.com
      </span>
    </div>
  );
}

export default UserInfo;
