// Import necessary modules and components

import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import InstallButton from "@/components/Template/InstallButton";
const inter = Inter({ subsets: ["latin"] });

// Define metadata for the page
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  manifest: "/manifest.json",
};

// Define the RootLayout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <InstallButton />

        {children}
      </body>
      <Toaster position="top-center" />
    </html>
  );
}
