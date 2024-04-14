"use client";
import NavGoto from "@/components/Admin/NavGoto";
import { fetchCollectionData } from "@/lib/firebaseUtils";
import { useOrderItemsStore, useScannedVouchersStore } from "@/store/admin";
import {
  useProductStore,
  useToppingsStore,
  useVoucherStore,
} from "@/store/zustand";
import React, { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { setProducts } = useProductStore();
  const { setToppings } = useToppingsStore();
  const { setVouchers } = useVoucherStore();
  const { setOrderItems } = useOrderItemsStore();
  const { setScannedVouchers } = useScannedVouchersStore();

  useEffect(() => {
    // Fetch scanned vouchers
    const fetchScannedVouchers = async () => {
      const fetchedScannedVouchers = await fetchCollectionData(
        "scannedVoucherList"
      );
      setScannedVouchers(fetchedScannedVouchers);
    };
    fetchScannedVouchers();

    // Fetch order items
    const fetchOrderItems = async () => {
      const fetchedOrderItems = await fetchCollectionData("orderList");
      setOrderItems(fetchedOrderItems);
    };
    fetchOrderItems();

    // Fetch Products
    const fetchProducts = async () => {
      const fetchedProducts = await fetchCollectionData("products");
      setProducts(fetchedProducts);
    };
    fetchProducts();

    // Fetch toppings
    const fetchToppings = async () => {
      const fetchedToppings = await fetchCollectionData("toppings");
      setToppings(fetchedToppings);
    };
    fetchToppings();

    // Fetch vouchers
    const fetchVouchers = async () => {
      const fetchedVouchers = await fetchCollectionData("vouchers");
      setVouchers(fetchedVouchers);
    };
    fetchVouchers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="">
      <NavGoto />
      {/* <AdminNav /> */}
      {children}
    </main>
  );
}
