import VoucherScanner from "@/components/Admin/VoucherScanner";

function Page() {
  return (
    <div
      style={{
        backgroundImage: `url("https://i.pinimg.com/564x/f8/3f/16/f83f1657c087726da96e2c2c0f265859.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="bg-white h-screen max-w-screen-sm flex items-center justify-center flex-col gap-y-3"
    >
      <div className="flex flex-col items-center justify-center pt-48">
        <VoucherScanner />
      </div>
    </div>
  );
}

export default Page;
