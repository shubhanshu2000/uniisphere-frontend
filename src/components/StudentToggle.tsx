import { useState } from "react";
function StudentToggle() {
  const [isStudent, setIsStudent] = useState(false);
  return (
    <div className="flex items-center gap-2 mt-4">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isStudent}
          onChange={() => setIsStudent(!isStudent)}
          className="sr-only peer"
        />
        <div className={`w-8 h-4 rounded-full transition-colors duration-300 ${
          isStudent ? "bg-blue-500" : "bg-black"
        }`}>
          <div className={`absolute top-0.5 left-0.5 w-3 h-3 rounded-full transition-transform duration-300 ${
            isStudent ? "bg-white translate-x-4" : "bg-white"
          }`}>
          </div>
        </div>
      </label>
      <p className="text-sm font-small">{ "I am a student"}</p>
    </div>
  );
}
export default StudentToggle;
