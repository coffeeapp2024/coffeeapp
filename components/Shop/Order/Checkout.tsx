import CoinIcon from "@/components/Template/CoinIcon";
import { updateUserDataAfterPurchase } from "@/lib/userActions";
import {
  useCashCartStore,
  usePointCartStore,
  usePriceTypeStore,
  useUserDataStore,
} from "@/store/zustand";
import React, { useMemo } from "react";
import { toast } from "sonner";

function Checkout({ setOpenCart }: { setOpenCart: any }) {
  const { userData, setUserData } = useUserDataStore();
  const { isPriceInPoint } = usePriceTypeStore();
  const { cartItems: cashCartItems, clearCart: clearCashCart } =
    useCashCartStore();
  const { cartItems: PointCartItems, clearCart: clearPointCart } =
    usePointCartStore();

  const currentCart = isPriceInPoint ? PointCartItems : cashCartItems;

  // Calculate total price
  const totalPrice = useMemo(() => {
    return currentCart.reduce((acc, currentItem) => {
      return acc + currentItem.totalPrice;
    }, 0);
  }, [currentCart]);

  const handleCheckout = async () => {
    if (!userData) {
      toast.error("Please sign in to complete your purchase.");
      return;
    }

    if (!isPriceInPoint) {
      toast.error(
        "Cash checkout option is coming soon. Currently, only min checkout is available."
      );
      return;
    }

    if (totalPrice === 0) {
      toast.info("Your cart is empty. Add items to proceed to checkout.");
      return;
    }

    const updatedCollection = [...userData.collection, ...currentCart];
    const promise = async () => {
      // Add cart items to the user's collection
      await updateUserDataAfterPurchase(userData, setUserData, totalPrice, {
        collection: updatedCollection,
      });

      // Clear the cart after checkout
      isPriceInPoint ? clearPointCart() : clearCashCart();

      setOpenCart(false);
    };

    try {
      await toast.promise(promise(), {
        loading: "Loading...",
        success: "Checkout successful! Visit your collection, scan, and enjoy!",
        error: (error) => error.message,
      });
    } catch (error) {
      console.error("Error deleting keys:", error);
    }
  };
  return (
    <div className="bg-white bg-opacity-90 w-full absolute bottom-0 left-0 rounded-t-3xl flex flex-col justify-between overflow-hidden pt-4">
      <div className="px-6 text-xl font-semibold flex items-center justify-between">
        <span>Total:</span>
        <div className="flex items-center justify-center">
          {isPriceInPoint && <CoinIcon className="w-5 h-5" />}
          <span>{totalPrice}</span>
          {!isPriceInPoint && "k"}
        </div>
      </div>

      <div className="w-full px-3 py-3">
        <button
          onClick={handleCheckout}
          className="bg-primary-foreground w-full h-14 font-semibold text-white rounded-3xl"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Checkout;
