import AdminNav from "@/components/Admin/AdminNav";
import NavGoto from "@/components/Admin/NavGoto";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="">
      <NavGoto />
      {/* <AdminNav /> */}
      {children}
    </main>
  );
}
