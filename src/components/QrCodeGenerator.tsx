"use client";

import { useQRCode } from "next-qrcode";
import { useState } from "react";

export default function QrCodeGenerator() {
  const [text, setText] = useState("");
  const { Canvas } = useQRCode();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="mt-20">
      <div className="flex flex-col items-center">
        {text && (
          <Canvas
            text={text}
            options={{
              errorCorrectionLevel: "M",
              margin: 3,
              scale: 4,
              width: 200,
            }}
          />
        )}
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter text or URL"
          className="border border-gray-300 rounded-lg p-2 mb-4 w-80"
        />
      </div>
    </div>
  );
}
