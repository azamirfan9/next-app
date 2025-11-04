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
      <div className="px-3 space-y-2r">
        <p className="font-normal text-[12px] text-light_slate_gray text-normal mt-2 text-justify">
          Dear user this is not normal QR scanner, This is like just OTP verification Instead of sending OTP QR scan is being displayed
          because user can feel well.
          No need to follow more steps, just take your phone and scan this QR and proceed to activate your account yourself to click Verify button.
        </p>
      </div>
    </div>
  );
}