import { useState } from "react";
import { Slider } from "@shadcn/ui";

export default function SliderComponent() {
  const [value, setValue] = useState<number>(50);

  const handleChange = (newValue: number[]) => {
    setValue(newValue[0]);
  };

  return (
    <div className="w-64 mx-auto">
      <Slider
        min={0}
        max={100}
        value={[value]}
        onValueChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
      <p className="mt-2 text-lg font-medium text-center">Value: {value}</p>
    </div>
  );
}
