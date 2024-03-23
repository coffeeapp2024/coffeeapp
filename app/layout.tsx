// Import necessary modules and components

import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import InstallButton from "@/components/Template/InstallButton";
import Head from "next/head";
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/icon-notch.png"></link>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className={inter.className}>{children}</body>
      <Toaster position="top-center" />
    </html>
  );
}
