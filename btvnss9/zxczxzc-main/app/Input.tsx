import React from "react";
import { Input as ShadcnInput } from "shadcn-ui";

type InputProps = {
  type: "text" | "number" | "file";
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ type, value, onChange }) => {
  return (
    <ShadcnInput
      type={type}
      value={value}
      onChange={onChange}
      className="border rounded px-3 py-2 w-full"
    />
  );
};

export default Input;
