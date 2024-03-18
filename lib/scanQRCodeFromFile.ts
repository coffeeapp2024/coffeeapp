import jsQR from "jsqr";

export const scanQRCodeFromFile = async (
  file: File
): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      if (e.target) {
        const image = new Image();
        image.src = e.target.result?.toString() || "";
        image.onload = () => {
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          if (!context) {
            reject("Could not create canvas context.");
            return;
          }

          canvas.width = image.width;
          canvas.height = image.height;
          context.drawImage(image, 0, 0, image.width, image.height);

          const imageData = context.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
          );

          const qrCode = jsQR(
            imageData.data,
            imageData.width,
            imageData.height
          );
          if (qrCode) {
            resolve(qrCode.data);
          } else {
            resolve(null);
          }
        };
      }
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};
