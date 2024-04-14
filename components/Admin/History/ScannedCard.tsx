"use client";

import { getKeyValue } from "@/lib/firebaseUtils";
import { formatISOStringToTimeAndDate } from "@/lib/timeActions";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function ScannedCard({
  imageURL,
  title,
  details,
  createdAt,
  userId,
}: {
  imageURL: string | null | undefined;
  title: string;
  details: string[];
  createdAt: string;
  userId: string;
}) {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    async function fetchUserName() {
      try {
        const fetchedUserName = await getKeyValue(
          "users",
          userId,
          "displayName"
        );
        setUserName(fetchedUserName);
      } catch (error) {
        console.error("Error fetching user name:", error);
      }
    }
    fetchUserName();
  }, [userId]);

  if (userName) details.push(`Name: ${userName}`);
  const formattedCreateAt = formatISOStringToTimeAndDate(createdAt);

  return (
    <div className="relative bg-white h-32 py-2 pl-2 pr-4 rounded-2xl shadow-sm flex">
      {/* Left */}
      <div className="bg-neutral-50 h-full aspect-square rounded-xl overflow-hidden">
        {imageURL && (
          <Image
            src={imageURL}
            width={300}
            height={300}
            alt="Image Voucher"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      {/* Right */}
      <div className="pl-3 basis-2/3">
        <div className="mb-2">
          <h3 className="font-bold">{title}</h3>
          {details.map((item, index) => (
            <p
              key={index}
              className="text-wrap text-xs text-neutral-800 font-medium"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <span className="absolute right-2  bottom-1 text-xs text-neutral-400">
        {formattedCreateAt}
      </span>
    </div>
  );
}

export default ScannedCard;
