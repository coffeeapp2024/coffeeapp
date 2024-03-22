import GenerateQrCodeButton from "@/components/Admin/GenerateQrCodeButton";
import VoucherScanner from "@/components/Admin/VoucherScanner";
import Link from "next/link";

function Page() {
  return (
    <div
      style={{
        backgroundImage: `url("https://i.pinimg.com/564x/50/95/3d/50953d484df645d2bb1061ee6af43c6c.jpg")`,
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="bg-white h-screen max-w-screen-sm flex items-center justify-center flex-col gap-y-3"
    >
      <div className="flex flex-col items-center justify-center pt-48">
        <GenerateQrCodeButton />
      </div>
    </div>
  );
}

export default Page;
