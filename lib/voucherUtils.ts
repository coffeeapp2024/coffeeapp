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

export const removeVoucher = async (
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
