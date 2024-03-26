import React from "react";
import BuyVoucherCard from "@/components/Voucher/VoucherCard";
import Image from "next/image";
import VoucherCard from "@/components/Voucher/VoucherCard";

const VoucherDataList = [
  {
    imageURL:
      "https://www.aeon.com.vn/wp-content/uploads/2021/04/momo-thequa_pb_promotion.jpg",
  },
  {
    imageURL:
      "https://www.aeon.com.vn/wp-content/uploads/2021/04/momo-thequa_pb_promotion.jpg",
  },
  {
    imageURL:
      "https://www.aeon.com.vn/wp-content/uploads/2021/04/momo-thequa_pb_promotion.jpg",
  },
  {
    imageURL:
      "https://www.aeon.com.vn/wp-content/uploads/2021/04/momo-thequa_pb_promotion.jpg",
  },
  {
    imageURL:
      "https://www.aeon.com.vn/wp-content/uploads/2021/04/momo-thequa_pb_promotion.jpg",
  },
];

const voucherBanner =
  "https://homepage.momocdn.net/blogscontents/momo-upload-api-200720153801-637308562815325569.jpg";

function page() {
  return (
    <div className="w-full min-h-screen bg-background p-0 px-3 pt-2">
      {/* Banner */}
      <div className="bg-neutral-200 w-full aspect-[3/1] rounded-2xl overflow-hidden">
        <Image
          src={voucherBanner}
          width={600}
          height={200}
          className="w-full h-full object-cover"
          alt="Banner Voucher Page"
        />
      </div>

      {/* List Voucher Card */}
      <div className="pt-8 flex flex-col items-center gap-y-3">
        {VoucherDataList.map((voucherDataList, index) => (
          <VoucherCard key={index} voucherDataList={voucherDataList} />
        ))}
      </div>
    </div>
  );
}

export default page;
