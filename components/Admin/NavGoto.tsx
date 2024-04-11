import Link from "next/link";
import React from "react";

function NavGoto() {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-semibold flex items-center justify-center gap-x-1">
      <Link className="px-4 py-2 rounded-3xl bg-neutral-800" href="/staff">
        Staff
      </Link>
      <Link className="px-4 py-2 rounded-3xl bg-neutral-800" href="/manager">
        Manager
      </Link>
      <Link className="px-4 py-2 rounded-3xl bg-neutral-800" href="/">
        User
      </Link>
    </div>
  );
}

export default NavGoto;
