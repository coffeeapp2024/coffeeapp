import React from "react";
import UserInfo from "./UserInfo";
import UserVoucherList from "./UserVoucherList";

function UserSection() {
  return (
    <div className="pt-6">
      <UserInfo />
      {/* <div className="border-t-[2px] text-neutral-100 -mx-2 mb-3"></div> */}
      {/* <div className="flex items-center justify-center mb-3">
        <h4 className="text-xl font-bold text-neutral-900">Your Vouchers</h4>
      </div> */}
      <UserVoucherList />
    </div>
  );
}

export default UserSection;
