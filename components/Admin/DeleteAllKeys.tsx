import React from "react";
import MainButton from "../MainButton";
import { deleteAllKeysFromFirestore } from "@/lib/firebaseFunctions";
import { toast } from "sonner";
import { useUserDataStore } from "@/store/zustand";

function DeleteAllKeys() {
  const { role } = useUserDataStore();

  const handleDeleteAllKeys = async () => {
    try {
      await toast.promise(
        deleteAllKeysFromFirestore(), // Call the deletion function within toast.promise
        {
          loading: "Deleting...", // Display loading message
          success: "All keys deleted successfully", // Display success message
          error: (error) => error.message, // Display error message
        }
      );
    } catch (error) {
      console.error("Error deleting keys:", error);
      // Handle error if necessary (e.g., display an error message)
    }
  };

  return (
    <button
      className={`${role === "manager" ? "" : "pointer-events-none grayscale"}`}
      onClick={handleDeleteAllKeys}
    >
      <MainButton text="Delete All QrCode" />
    </button>
  );
}

export default DeleteAllKeys;
