import Link from "next/link";
import React from "react";

function AdminNav() {
  return (
    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-neutral-400 text-sm font-semibold flex gap-x-2">
      <Link
        href="/staff"
        className="p-2 border-2 border-neutral-300 rounded-3xl"
      >
        Staff
      </Link>
      <Link
        href="/manager"
        className="p-2 border-2 border-neutral-300 rounded-3xl"
      >
        Manager
      </Link>
    </div>
  );
}

export default AdminNav;
