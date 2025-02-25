import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/Store";
import { updateFormData } from "../Store/formslice";
const interestsList: string[] = [
  "Photography",
  "Cooking",
  "Traveling",
  "Reading",
  "Gaming",
  "Fitness",
  "Music",
  "Art",
  "Gardening",
  "Dancing",
  "Yoga",
  "Meditation",
  "Writing",
  "Blogging",
  "Podcasting",
  "Painting",
  "Drawing",
  "Sculpting",
  "Knitting",
  "Sewing",
  "Woodworking",
  "DIY Projects",
  "Home Decor",
  "Fashion",
  "Makeup",
  "Skincare",
  "Fitness Training",
  "Running",
  "Cycling",
  "Hiking",
  "Camping",
  "Surfing",
  "Swimming",
  "Martial Arts",
  "Chess",
  "Board Games",
  "Puzzles",
  "Astronomy",
  "Stargazing",
  "Birdwatching",
  "Anime",
];
const InterestSelection: React.FC = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);
  const lighterGradientColors = [
    "#F9C9C7", 
    "#B3E5EE", 
    "#F9EDD1", 
    "#D8DDE0", 
    "#FAD7D1", 
    "#E2D2E0", 
  ];
  const getInterestGradient = (interest: string) => {
    const hash = interest.split("").reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    const color1 = lighterGradientColors[hash % lighterGradientColors.length];
    const color2 = lighterGradientColors[(hash + 1) % lighterGradientColors.length];
    return `linear-gradient(135deg, ${color1}, ${color2})`;
  };
  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev: string[]) => {
      if (prev.includes(interest)) { 
        return prev.filter((s: string) => s !== interest);
      } else {
        return [...prev, interest];
      }
    });
  };
  const handleContinue = () => {
    if (selectedInterests.length >= 3) {
    dispatch(updateFormData({ interest: selectedInterests })); 
    navigate("/project");
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <nav className="container-fluid flex justify-start items-center mt-4 ml-4">
        <img
          src="/assets/uniisphere_logo.png"
          alt="Uniisphere Logo"
          className="unilogo max-[552px]:h-20 max-[429px]:h-15 ml-0 max-[154px]:h-10 max-[143px]:h-5"
        />
      </nav>
      <div className="relative w-full h-[8px]">
        <img
          src="/assets/ellipse_userform01.png"
          alt="ellipse__01"
          className="absolute left-0 bottom-0 w-16 h-16 scale-120 top-20 max-[777px]:w-12 max-[777px]:h-12 max-[663px]:w-9 max-[663px]:h-9 max-[663px]:mt-6"
        />
        <img
          src="/assets/ellipse_userform2.png"
          alt="ellipse__02"
          className="absolute top-40 right-0 w-16 h-16 scale-125 max-[777px]:w-12 max-[777px]:h-12 max-[663px]:w-9 max-[663px]:h-9 max-w-[143px]:hidden"
        />
        <img
          src="/assets/ellipse_userform3.png"
          alt="ellipse__03"
          className="absolute top-100 left-0 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 scale-200 max-[777px]:w-12 max-[777px]:h-12 max-[663px]:w-9 max-[663px]:h-9"
        />
        <img
          src="/assets/ellipse_userform4.png"
          alt="ellipse__04"
          className="absolute right-0 top-[520px] w-16 h-16 scale-130 max-[777px]:w-12 max-[777px]:h-12 max-[663px]:w-9 max-[663px]:h-9"
        />
        <img
          src="/assets/ellipse_userform5.png"
          alt="ellipse__05"
          className="absolute top-160 left-0 w-16 h-16 scale-130 max-[777px]:w-12 max-[777px]:h-12 max-[663px]:w-9 max-[663px]:h-9"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-8xl font-extrabold text-center mt-0 tracking-normal max-[559px]:text-6xl max-[354px]:text-3xl max-[173px]:text-sm">
          <span className="text-[#DA3E39]">U</span>
          <span className="text-[#38A3AC]">N</span>
          <span className="text-[#DFC462]">I</span>
          <span className="text-[#DFC462]">I</span>
          <span className="text-[#889095]">S</span>
          <span className="text-[#E9877A]">P</span>
          <span className="text-[#A7829D]">H</span>
          <span className="text-[#E9877A]">E</span>
          <span className="text-[#38A3AC]">R</span>
          <span className="text-[#DA3E39]">E</span>
        </h1>
        <h3 className="text-1.5xl font-light tracking-wide text-center mt-2 text-gray-900 max-[172px]:text-sm max-[139px]:text-xs">
          "Connect" "Collaborate" "Success"
        </h3>
      </div>
      <div
        className="p-6 rounded-4xl shadow-md w-full max-w-md mx-auto mt-9"
        style={{
          background:
            "linear-gradient(rgba(68, 169, 177, 0.1) 0%, rgba(225, 200, 107, 0.1) 100%)",
        }}
      >
        <h2 className="text-lg font-normal ml-3 mt-5">Interests *</h2>
        <input
          type="text"
          className="border rounded-full px-4 py-2 mt-3 w-full"
          placeholder="Search..."
          defaultValue={formData.interest}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full overflow-y-auto mt-8"
          style={{ maxHeight: "200px" }} 
        >
          {interestsList
            .filter((interest) =>
              interest.toLowerCase().includes(search.toLowerCase())
            )
            .map((interest) => (
              <button
                key={interest}
                onClick={() => toggleInterest(interest)}
                className={`px-4 py-2 text-sm rounded-full transition-colors shadow-md font-medium border w-full truncate 
                  ${
                    selectedInterests.includes(interest)
                      ? "border-2 border-blue-500" 
                      : ""
                  }
                `}
                style={{
                  background: getInterestGradient(interest),
                  color: "gray-300", 
                }}
              >
                {interest}
              </button>
            ))}
        </div>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Select at least 3 interests so we can build your connection in better ways
        </p>
        <button
          className={`bg-blue-600 mt-5 mx-auto block text-white px-6 py-2 rounded-full shadow-lg ${
            selectedInterests.length < 3 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={selectedInterests.length < 3}
          onClick={handleContinue} 
        >
          Continue
        </button>
      </div>
    </div>
  );
};
export default InterestSelection;