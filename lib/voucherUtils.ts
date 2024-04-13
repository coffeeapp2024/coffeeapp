import { UserData, UserVoucher } from "@/store/zustand";

export const addVoucher = async (
  voucherList: UserVoucher[] | null,
  voucherId: string
) => {
  // Nếu userData không tồn tại hoặc voucherList không tồn tại
  if (!voucherList) {
    return [{ id: voucherId, quantity: 1 }]; // Trả về một danh sách chứa một voucherId mới
  }

  const existingVoucherIndex = voucherList.findIndex(
    (voucher) => voucher.id === voucherId
  );

  // Nếu voucher đã tồn tại trong voucherList, tăng quantity lên 1
  if (existingVoucherIndex !== -1) {
    const updatedVoucherList = [...voucherList];
    updatedVoucherList[existingVoucherIndex].quantity++;
    return updatedVoucherList;
  }

  // Nếu voucher chưa tồn tại, thêm vào danh sách với quantity là 1
  return [...voucherList, { id: voucherId, quantity: 1 }];
};
