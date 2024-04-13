import {
  addDocumentsToCollection,
  getDocumentById,
  getKeyValue,
  updateKeyInDocument,
} from "@/lib/firebaseUtils";
import { generateUniqueId } from "@/lib/utils";
import { OrderItem } from "@/store/admin";
import { UserData } from "@/store/zustand";
import { toast } from "sonner";

export const removeProduct = async <T extends { id: string }>(
  productList: T[],
  productId: string
): Promise<T[]> => {
  // Lọc ra các sản phẩm khác với productId được chỉ định
  const updatedProductList = productList.filter(
    (product) => product.id !== productId
  );
  return updatedProductList;
};

export async function handleProductScan(userId: string, productId: string) {
  try {
    // Kiểm tra xem người dùng có tồn tại không
    const userData = (await getDocumentById("users", userId)) as UserData;
    if (!userData) {
      toast.error("User does not exist.");
      return;
    }

    // Lấy danh sách sản phẩm của người dùng
    const userCollection = userData.collection || [];

    // Tìm sản phẩm quét được trong danh sách
    const scannedProduct = userCollection.find(
      (product) => product.id === productId
    );
    if (!scannedProduct) {
      toast.error("Product does not exist.");
      return;
    }

    // Loại bỏ sản phẩm đã quét khỏi danh sách sản phẩm của người dùng
    const updatedUserCollection = await removeProduct(
      userCollection,
      productId
    );

    // Cập nhật danh sách sản phẩm mới của người dùng
    await updateKeyInDocument(
      "users",
      userId,
      "collection",
      updatedUserCollection
    );

    // Tạo một đơn hàng mới với sản phẩm quét được và thêm vào danh sách đơn hàng
    const orderItem: OrderItem = {
      id: generateUniqueId(),
      userId: userId,
      cartItems: [scannedProduct],
      createdAt: new Date().toISOString(),
    };
    await addDocumentsToCollection("orderList", [orderItem]);

    toast.success("Product scanned successfully.");
  } catch (error) {
    console.error("Error handling product scan:", error);
    toast.error("An error occurred while handling the product scan.");
  }
}
