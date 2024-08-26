import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@shadcn/ui";
import { useState } from "react";

const subjects = ["HTML", "CSS", "JavaScript", "ReactJS", "Next.js"];

export default function SubjectSelect() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  return (
    <div className="w-72">
      <Select onValueChange={(value) => setSelectedSubject(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Môn học" />
        </SelectTrigger>
        <SelectContent>
          {subjects.map((subject, index) => (
            <SelectItem key={index} value={subject}>
              {subject}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedSubject && (
        <div className="mt-2 text-gray-600">
          Bạn đã chọn: <strong>{selectedSubject}</strong>
        </div>
      )}
    </div>
  );
}
