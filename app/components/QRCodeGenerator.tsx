// components/QRCodeGenerator.js
import { useQRCode } from 'next-qrcode';

export default function QRCodeGenerator({ data, width = 200 }) {
  const { Image } = useQRCode();

  return (
    <div className="px-4 py-6 text-white md:mx-6 md:p-12 text-center">
      <div className="flex justify-center mt-28">
          <Image
          text={data}
          options={{
            type: 'image/jpeg', // or 'image/png'
            quality: 1,
            errorCorrectionLevel: 'M',
            margin: 6,
            scale: 4,
            width: width,
            color: {
              dark: '#ffffffff', // Dark modules color
              light: '#ee7724', // Light modules color
            },
          }}
        />
      </div>
      <div className="px-3 space-y-2 text-center">
        <p className="font-normal text-[12px] text-light_slate_gray text-normal">Scan the QR code to activate account by your mobile device</p>
      </div>
    </div>
  );
}