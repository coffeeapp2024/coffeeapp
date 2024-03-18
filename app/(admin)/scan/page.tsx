import GenerateQrCodeButton from "@/components/Scan/GenerateQrCodeButton";
import QRCodeScanner from "@/components/Scan/QRCodeScanner";

function Page() {
  return (
    <div className="bg-white h-screen max-w-screen-sm flex items-center justify-center flex-col gap-y-3">
      <GenerateQrCodeButton />
      <QRCodeScanner />
    </div>
  );
}

export default Page;
