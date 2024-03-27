import React from "react";
import BoostDialog from "./BoostDialog";
import { useStorageStore } from "@/store/zustand";

function Storage() {
  const { storages } = useStorageStore();

  console.log("use storage:", storages);

  return <BoostDialog />;
}

export default Storage;
