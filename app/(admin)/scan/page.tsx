import GenerateQrCodeButton from "@/components/Scan/GenerateQrCodeButton";
import QRCodeScanner from "@/components/Scan/QRCodeScanner";

function Page() {
  return (
    <div className="bg-white h-screen">
      <GenerateQrCodeButton />
      <QRCodeScanner />
    </div>
  );
}

export default Page;
