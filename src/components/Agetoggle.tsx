import { useState } from "react";
function AgeToggle() {
  const [isAbove16, setIsAbove16] = useState(false);
  return (
    <div className="flex items-center gap-2 mt-4">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isAbove16}
          onChange={() => setIsAbove16(!isAbove16)}
          className="sr-only peer"
        />
        <div className={`w-8 h-4 rounded-full transition-colors duration-300 ${
          isAbove16 ? "bg-blue-500" : "bg-black"
        }`}>
          <div className={`absolute top-0.5 left-0.5 w-3 h-3 rounded-full transition-transform duration-300 ${
            isAbove16 ? "bg-white translate-x-4" : "bg-white"
          }`}>
          </div>
        </div>
      </label>
      <p className="text-sm font-small">{isAbove16 ? "I am above 16 years" : "I am under 16 years"}</p>
    </div>
  );
}
export default AgeToggle;
