import { useState } from "react";

interface OTPInputProps {
  length: number;
  onChangeOTP: (otp: string) => void;
}

export default function OTPInput({ length, onChangeOTP }: OTPInputProps) {
  const [otp, setOtp] = useState(Array(length).fill(""));

  const handleChange = (element: HTMLInputElement, index: number) => {
    const value = element.value.replace(/[^0-9]/g, "");
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      const nextElement = element.nextElementSibling as HTMLInputElement;
      if (nextElement) nextElement.focus();
    }

    onChangeOTP(newOtp.join(""));
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const previousElement = (e.target as HTMLInputElement)
        .previousElementSibling as HTMLInputElement;
      if (previousElement) previousElement.focus();
    }
  };

  return (
    <div className="flex gap-2 justify-center">
      {otp.map((data, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={data}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-12 h-12 text-center border-2 border-gray-300 rounded-md text-lg focus:border-blue-500 focus:outline-none"
        />
      ))}
    </div>
  );
}
