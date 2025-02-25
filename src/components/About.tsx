import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/Store";
import { updateFormData } from "../Store/formslice";

function About() {
  const [about, setAbout] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);
  const wordLimit = 1000;
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const aboutSchema = z.string().max(wordLimit, {
    message: `About section should not exceed ${wordLimit} characters.`,
  });

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";

      if (about.length <= wordLimit) {
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      } else {
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        textareaRef.current.style.overflowY = "auto";
      }
    }
  }, [about]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationResult = aboutSchema.safeParse(about);
    if (!validationResult.success) {
      setError(validationResult.error.errors[0].message);
      return;
    }


    dispatch(updateFormData({ about })); 
    navigate("/Skills");
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setAbout(value);

    const validationResult = aboutSchema.safeParse(value);
    if (validationResult.success) {
      setError("");
    }
  };

  return (
    <div>
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

      <div className="flex justify-center items-center mt-9">
        <div
          className="p-6 rounded-4xl shadow-md w-130 h-110"
          style={{
            background:
              "linear-gradient(rgba(68, 169, 177, 0.1) 0%, rgba(225, 200, 107, 0.1) 100%)",
          }}
        >
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="about" className="block text-sm font-medium text-gray-900 mt-7">
                About*
              </label>
              <div className="relative">
                <textarea
                  id="about"
                  ref={textareaRef}
                  placeholder="Tell us about yourself"
              
                  defaultValue={formData.about}
                  onChange={handleChange}
                  className="w-full p-2 border border-black rounded-xl mt-5 resize-none overflow-hidden "
                  rows={1}
                  style={{ minHeight: "60px", maxHeight: "200px" }}
                />
              </div>

              <div className="text-right mt-1">
                <span
                  className={`text-sm ${
                    about.length > wordLimit ? "text-red-500" : "text-gray-500"
                  }`}
                >
                  {about.length}/{wordLimit}
                </span>
              </div>
              {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-20 px-3 py-1 text-sm rounded bg-blue-500 text-white hover:bg-blue-600 transition mt-10"
                disabled={about.length > wordLimit}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About;
