import Link from "next/link";
import React from "react";

function AdminNav() {
  return (
    <div className="absolute bottom-2 right-2 text-neutral-400 text-sm font-semibold flex gap-x-2 text-nowrap">
      <Link
        href="/staff"
        className="px-2 py-1 border-2 border-neutral-300 rounded-2xl"
      >
        Only Admin
      </Link>
    </div>
  );
}

export default AdminNav;
