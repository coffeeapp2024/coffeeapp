"use client";
import DeleteAllKeys from "@/components/Admin/DeleteAllKeys";
import GenerateQrCodeButton from "@/components/Admin/GenerateQrCodeButton";

function Page() {
  return (
    <div
      style={{
        backgroundImage: `url("bg/main-bg.jpg")`,
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="bg-white h-screen max-w-screen-sm flex items-center justify-center flex-col gap-y-3"
    >
      <div className="flex flex-col items-center  gap-y-6 justify-center pt-48">
        <GenerateQrCodeButton />
        <DeleteAllKeys />
      </div>
    </div>
  );
}

export default Page;
