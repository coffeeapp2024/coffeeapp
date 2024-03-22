import GenerateQrCodeButton from "@/components/Scan/GenerateQrCodeButton";
import VoucherScanner from "@/components/Scan/VoucherScanner";
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
        <Link
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-3xl bg-neutral-800 text-white text-sm font-semibold"
          href="/staff"
        >
          Go to Staff
        </Link>
      </div>
    </div>
  );
}

export default Page;
