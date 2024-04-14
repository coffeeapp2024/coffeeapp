import {
  addDocumentsToCollection,
  getDocumentById,
  updateKeyInDocument,
} from "@/lib/firebaseUtils";
import { generateUniqueId } from "@/lib/utils";
import { ScannedVoucher } from "@/store/admin";
import { UserData } from "@/store/zustand";
import { toast } from "sonner";

type UserVoucher = {
  id: string;
  quantity: number;
};

export const removeVoucher = (
  voucherList: UserVoucher[],
  voucherId: string
) => {
  // Tìm chỉ mục của voucher trong danh sách
  const existingVoucherIndex = voucherList.findIndex(
    (voucher) => voucher.id === voucherId
  );

  // Nếu voucher không tồn tại trong danh sách, không có gì thay đổi
  if (existingVoucherIndex === -1) {
    return voucherList;
  }

  // Nếu quantity của voucher là 1, loại bỏ voucher khỏi danh sách
  if (voucherList[existingVoucherIndex].quantity === 1) {
    const updatedVoucherList = voucherList.filter(
      (voucher) => voucher.id !== voucherId
    );
    return updatedVoucherList;
  }

  // Nếu quantity lớn hơn 1, giảm quantity đi 1
  const updatedVoucherList = [...voucherList];
  updatedVoucherList[existingVoucherIndex].quantity--;
  return updatedVoucherList;
};

export async function handleVoucherScan(
  scannedVouchers: ScannedVoucher[],
  setScannedVouchers: (vouchers: ScannedVoucher[]) => void,
  userId: string,
  voucherId: string
) {
  try {
    // Kiểm tra xem người dùng có tồn tại không
    const userData = (await getDocumentById("users", userId)) as UserData;
    if (!userData) {
      toast.error("User does not exist.");
      return;
    }

    // Lấy danh sách voucher của người dùng từ dữ liệu người dùng
    const userVoucherList = userData.voucherList || [];

    // Kiểm tra xem voucher có tồn tại trong danh sách không
    if (!userVoucherList.find((userVoucher) => userVoucher.id === voucherId)) {
      toast.error("Voucher does not exist.");
      return;
    }

    // Xóa voucher khỏi danh sách voucher của người dùng
    const updatedUserVoucherList = removeVoucher(userVoucherList, voucherId);

    // Cập nhật danh sách voucher mới của người dùng
    await updateKeyInDocument(
      "users",
      userId,
      "voucherList",
      updatedUserVoucherList
    );

    const newScannedVoucher = {
      id: generateUniqueId(),
      voucherId: voucherId,
      userId: userId,
      scannedAt: new Date().toISOString(),
    };

    // Thêm thông tin quét voucher vào danh sách quét
    await addDocumentsToCollection("scannedVoucherList", [
      newScannedVoucher,
    ] as ScannedVoucher[]);

    setScannedVouchers([...scannedVouchers, newScannedVoucher]);

    toast.success("Voucher scanned successfully.");
  } catch (error) {
    console.error("Error handling voucher scan:", error);
    toast.error("An error occurred while handling the voucher scan.");
  }
}
