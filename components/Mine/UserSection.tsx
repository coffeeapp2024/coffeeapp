import React from "react";
import UserInfo from "./UserInfo";
import UserVoucherList from "./UserVoucherList";

function UserSection() {
  return (
    <div className="pt-6">
      <UserInfo />
      <div className="border-t-[2px] text-neutral-100 -mx-2 mb-4"></div>
      <div className="flex items-center justify-center mb-4">
        <h4 className="text-xl font-bold text-neutral-900">Vouchers</h4>
      </div>
      <UserVoucherList />
    </div>
  );
}

export default UserSection;
