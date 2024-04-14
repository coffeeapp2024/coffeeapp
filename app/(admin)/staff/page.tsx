import AdminScanner from "@/components/Admin/AdminScanner";
import OrderDialog from "@/components/Admin/OrderDialog";
import ScannedVoucherDialog from "@/components/Admin/ScannedVoucherDialog";

function Page() {
  return (
    <div
      style={{
        backgroundImage: `url("bg/main-bg.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="bg-white h-screen max-w-screen-sm flex items-center justify-center flex-col gap-y-3"
    >
      <div className="flex flex-col items-center justify-center pt-48 gap-y-4">
        <AdminScanner />
        <OrderDialog />
        <ScannedVoucherDialog />
      </div>
    </div>
  );
}

export default Page;
