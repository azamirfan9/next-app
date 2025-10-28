// components/QRCodeGenerator.js
import { useQRCode } from 'next-qrcode';

export default function QRCodeGenerator({ data, width = 200 }) {
  const { Image } = useQRCode();

  return (
    <div className="px-4 py-6 text-white md:mx-6 md:p-12 text-center">
      <div className="text-center">
          <Image
          text={data}
          options={{
            type: 'image/jpeg', // or 'image/png'
            quality: 1,
            errorCorrectionLevel: 'M',
            margin: 3,
            scale: 4,
            width: width,
            color: {
              dark: '#000000', // Dark modules color
              light: '#FFFFFF', // Light modules color
            },
          }}
        />
          <small className="mb-4 mt-1 pb-1">
              Need to verify account to scan this QR
          </small>
      </div>
    </div>
  );
}