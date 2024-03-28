import React from "react";
import MainButton from "../MainButton";
import { toast } from "sonner";
import { useUserDataStore } from "@/store/zustand";
import { deleteAllDocumentsInCollection } from "@/lib/firebaseUtils";

function DeleteAllKeys() {
  const { role } = useUserDataStore();

  const handleDeleteAllKeys = async () => {
    try {
      await toast.promise(deleteAllDocumentsInCollection("keys"), {
        loading: "Deleting...",
        success: "All keys deleted successfully",
        error: (error) => error.message,
      });
    } catch (error) {
      console.error("Error deleting keys:", error);
    }
  };

  return (
    <button
      className={`${role === "manager" ? "" : "pointer-events-none grayscale"}`}
      onClick={handleDeleteAllKeys}
    >
      <MainButton text="Delete All QR" />
    </button>
  );
}

export default DeleteAllKeys;
