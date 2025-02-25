import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/Store";
import { updateFormData } from "../Store/formslice";

const skillsList: string[] = [
  "Web Development",
  "WordPress",
  "Python",
  "Java",
  "C++",
  "App Development",
  "Software Testing",
  "Data Analytics",
  "SQL",
  "Cloud Computing",
  "Cybersecurity",
  "Blockchain",
  "AI/ML",
  "AR/VR",
  "IoT",
  "Automation",
  "Game Development",
  "Web Scraping",
  "API Development",
  "Chatbot Development",
  "Graphic Design",
  "UI/UX",
  "Animation",
  "Video Editing",
  "3D Modeling",
  "Logo Design",
  "Infographics",
  "Typography",
  "NFT Art",
  "Interior Design",
  "Content Writing",
  "Copywriting",
  "Technical Writing",
  "Ghostwriting",
  "Resume Writing",
  "Scriptwriting",
  "Blogging",
  "Research Writing",
  "Translation",
  "Transcription",
  "Speech Writing",
  "Social Media",
  "SEO",
  "Email Marketing",
  "Ads Management",
  "Affiliate Marketing",
  "Influencer Marketing",
  "PR",
  "Market Research",
  "Lead Generation",
  "Growth Hacking",
  "Accounting",
  "Financial Analysis",
  "Stock Trading",
  "Cryptocurrency",
  "Tax Filing",
  "Budgeting",
  "Crowdfunding",
  "Business Valuation",
  "Investment Analysis",
  "Risk Management",
  "Public Speaking",
  "Negotiation",
  "Conflict Resolution",
  "Time Management",
  "Leadership",
  "Networking",
  "Emotional Intelligence",
  "Personal Branding",
  "Interviewing",
  "Problem-Solving",
  "Online Tutoring",
  "Language Teaching",
  "Music Lessons",
  "Fitness Training",
  "Life Coaching",
  "Career Counseling",
  "Exam Coaching",
  "Yoga",
  "Personal Development",
  "Skill Training",
  "Virtual Assistance",
  "Data Entry",
  "Email Management",
  "Customer Support",
  "Travel Planning",
  "Project Management",
  "Event Planning",
  "Document Formatting",
  "CRM Management",
  "E-commerce",
  "Dropshipping",
  "Product Listing",
  "Sales Funnels",
  "Print-on-Demand",
  "B2B Sales",
  "Customer Retention",
  "Online Courses",
  "Subscription Business",
  "Retail Management",
  "Podcasting",
  "Voiceover",
  "Photography",
  "Freelance Writing",
  "Handmade Crafts",
  "Car Maintenance",
  "Home Repair",
  "Cooking",
  "Nutrition",
  "First Aid",
  "Emergency Preparedness",
  "Gardening",
  "Public Transport Navigation",
  "Apartment Hunting",
  "Resume Optimization",
  "Personal Finance",
  "Stress Management",
  "Meditation",
  "Relationship Building",
  "Workplace Communication",
  "Professional Dressing",
  "Job Search",
  "Business Proposal",
  "Legal Knowledge",
  "Debt Management",
  "Stock Photography",
  "Virtual Reality Content",
  "3D Printing",
  "Ethical Hacking",
  "Cloud Security",
  "Copyediting",
  "Data Visualization",
  "Business Consulting",
  "HR Management",
  "Podcast Editing",
  "Mobile Repair",
  "Digital Illustration",
  "App Monetization",
  "Video Marketing",
  "Email Copywriting",
  "Digital Fundraising",
  "Dance Choreography",
  "DIY Home Decor",
  "Resume Designing",
  "Smart Home Setup",
  "Google Analytics",
  "Social Media Ads",
  "Public Relations Writing",
  "Proofreading",
  "Voice Modulation",
];

const SkillsSelection: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate(); // Hook for navigation
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

 
  const getSkillGradient = (skill: string) => {
    const hash = skill.split("").reduce((acc, char) => char.charCodeAt(0) + acc, 0);

  
    const color1 = lighterGradientColors[hash % lighterGradientColors.length];
    const color2 = lighterGradientColors[(hash + 1) % lighterGradientColors.length];

    return `linear-gradient(135deg, ${color1}, ${color2})`;
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev: string[]) => {
      if (prev.includes(skill)) {
       
        return prev.filter((s: string) => s !== skill);
      } else {
    
        return [...prev, skill];
      }
    });
  };

  const handleContinue = () => {
    if (selectedSkills.length >= 3) {
      dispatch(updateFormData({ skills: selectedSkills })); 
      navigate("/Interest");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="container-fluid flex justify-start items-center mt-4 ml-4">
        <img
          src="/assets/uniisphere_logo.png"
          alt="Uniisphere Logo"
          className="unilogo max-[552px]:h-20 max-[429px]:h-15 ml-0 max-[154px]:h-10 max-[143px]:h-5"
        />
      </nav>

      {/* Ellipse Background Images */}
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

      {/* Main Content */}
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

      {/* Skills Selection Container */}
      <div
        className="p-6 rounded-4xl shadow-md w-full max-w-md mx-auto mt-9"
        style={{
          background:
            "linear-gradient(rgba(68, 169, 177, 0.1) 0%, rgba(225, 200, 107, 0.1) 100%)",
        }}
      >
        <h2 className="text-lg font-normal ml-3 mt-5">Skills *</h2>
        <input
          type="text"
          className="border rounded-full px-4 py-2 mt-3 w-full"
          placeholder="Search..."
          defaultValue={formData.skills}
   
          onChange={(e) => setSearch(e.target.value)}
        />
        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full overflow-y-auto mt-8"
          style={{ maxHeight: "200px" }}
        >
          {skillsList
            .filter((skill) =>
              skill.toLowerCase().includes(search.toLowerCase())
            )
            .map((skill) => (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`px-4 py-2 text-sm rounded-full transition-colors shadow-md font-medium border w-full truncate 
                  ${
                    selectedSkills.includes(skill)
                      ? "border-2 border-blue-500" 
                      : ""
                  }
                `}
                style={{
                  background: getSkillGradient(skill), 
                  color: "gray-300", 
                }}
              >
                {skill}
              </button>
            ))}
        </div>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Select at least 3 skills so we can build your connection in better ways
        </p>
        <button
          className={`bg-blue-600 mt-5 mx-auto block text-white px-6 py-2 rounded-full shadow-lg ${
            selectedSkills.length < 3 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={selectedSkills.length < 3}
          onClick={handleContinue} // Navigate on click
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SkillsSelection;