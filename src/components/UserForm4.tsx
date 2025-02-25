import React, { useContext, useState, useRef } from "react";
import { EmailContext } from "../context/EmailContext";
import { useSelector } from "react-redux";
import { RootState } from "../Store/Store";
import { useNavigate } from "react-router-dom";

const UserForm4: React.FC = () => {
  const { email } = useContext(EmailContext);
  const password = useSelector((state: RootState) => state.form.password);
  const navigate = useNavigate();
  const focusColors = [
    "#F5A9A6",
    "#8FD6E1",
    "#F5E3B8",
    "#C4C9CC",
    "#F8C3BC",
    "#D3B8D1",
  ];

  const maskEmail = (email: string): string => {
    if (!email) return "";
    const [localPart, domain] = email.split("@");
    if (!localPart || !domain) return email;

    const maskedLocalPart =
      localPart.slice(0, 3) + "*".repeat(localPart.length - 5) + localPart.slice(-2);

    return `${maskedLocalPart}@${domain}`;
  };
  const maskedEmail = maskEmail(email);
  const [code, setCode] = useState(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(6).fill(null));

  const handleInputChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const otp = code.join("").trim();
  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();

      if (inputRefs.current[index]) {
        inputRefs.current[index].style.boxShadow = "0 0 0 2px white";
      }
    }
  };
  const handleContinue = async () => {
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (code.some((digit) => digit === "")) {
      alert("Please enter the full 6-digit verification code.");
      return;
    }

    const payload = {
      email: email,
      otp: otp,
      password: password,
    };



    try {
      const response = await fetch(`https://uniisphere-1.onrender.com/auth/verifyOtp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

    

      const responseText = await response.text();
  

      if (!response.ok) {
        throw new Error(`OTP validation failed: ${responseText}`);
      }

      const data = JSON.parse(responseText);
      console.log("Parsed response data:", data);

      if (!data.success) {
        alert("OTP validated successfully!");
        navigate("/userform/details");
       
      } else {
        alert(data.error || "Invalid OTP. Please try again.");
      }
    } catch (error) {

      alert("An error occurred. Please try again.");
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
          className="p-6 rounded-4xl shadow-md w-130 h-120"
          style={{
            background:
              "linear-gradient(rgba(68, 169, 177, 0.1) 0%, rgba(225, 200, 107, 0.1) 100%)",
          }}
        >
          <h2 className="text-lg font-light mb-2 mt-4">Confirm your email</h2>
          <p className="text-sm text-gray-600 mb-4 text-center mt-12">
            We have sent a 6-digit verification code to
            <br />
            <span className="font-medium">{maskedEmail}</span>
          </p>

          <div className="flex justify-center gap-2 mb-4 mt-10">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  if (el) {
                    inputRefs.current[index] = el;
                  }
                }}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onFocus={() => {
                  if (inputRefs.current[index]) {
                    inputRefs.current[index].style.boxShadow = `0 0 0 0px ${focusColors[index]}`;
                  }
                }}
                className="w-10 h-10 text-center border rounded-md focus:outline-none text-lg"
                style={{
                  outline: "none",
                  boxShadow: digit ? `0 0 0 2px ${focusColors[index]}` : "white",
                }}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-500 transition mt-8"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>

          <div className="flex justify-center">
            <div className="text-center text-xs text-gray-700 mt-6 max-w-xs">
              <h3 className="font-semibold">Your Privacy is Important</h3>
              <p className="mt-4 font-light">
                We may send you member updates, recruiter messages, job suggestions,
                invitations, reminders, and promotional messages. You can change your
                preferences anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm4;