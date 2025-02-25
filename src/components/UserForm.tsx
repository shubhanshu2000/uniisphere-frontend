import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "./schema";
import { useState, useContext } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { EmailContext } from "../context/EmailContext";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/Store";
import { updateFormData } from "../Store/formslice";

function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { setEmail } = useContext(EmailContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector((state: RootState) => state.form);

  const onSubmit = async (data: FieldValues) => {
    try {
      console.log(data);
  
    
      dispatch(updateFormData(data));
  
      
      setEmail(data.email);
  
    
      const payload = {
        email: data.email,
      };
  
    
      const response = await fetch("https://uniisphere-1.onrender.com/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      
      const responseText = await response.text();
    
  
      if (!response.ok) {
       
        throw new Error(responseText || "Failed to register");
      }
  
      
      const responseData = JSON.parse(responseText);

  
     
      alert(responseData.message || "OTP sent successfully! Check your email.");
      navigate("/api/verify-otp", { state: { email: data.email } });
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert(error || "An error occurred. Please try again.");
    } finally {
      reset(); 
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
          className="p-6 rounded-4xl shadow-md w-150"
          style={{
            background:
              "linear-gradient(rgba(68, 169, 177, 0.1) 0%, rgba(225, 200, 107, 0.1) 100%)",
          }}
        >
          <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mt-5">
                Email or Phone Number
              </label>
              <input
                {...register("email")}
                id="email"
                type="text"
                placeholder="Email"
                defaultValue={formData.email}
                className="w-full p-2 border border-black rounded mt-1"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

         
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password (6+ Characters)
              </label>
              <input
                {...register("password")}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-2 border border-black rounded mt-1 pr-10"
                defaultValue={formData.password}
                aria-invalid={errors.password ? "true" : "false"}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center justify-center h-full"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye className="text-black" /> : <FaEyeSlash className="text-gray-500" />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

          
            <div className="relative">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Re-enter your password
              </label>
              <input
                {...register("confirmPassword")}
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter your password"
                className="w-full p-2 border border-black rounded mt-0 pr-10"
                defaultValue={formData.confirmPassword}
                aria-invalid={errors.confirmPassword ? "true" : "false"}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center justify-center h-full"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEye className="text-black" /> : <FaEyeSlash className="text-gray-500" />}
              </button>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>

         
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-fit px-4 py-1 text-sm rounded text-white 
                  ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
              >
                {isSubmitting ? "Hang On..." : "Continue"}
              </button>
            </div>
            <div className="flex items-center my-2">
              <hr className="flex-grow border-t border-black" />
              <span className="mx-2 text-black text-sm">Or with</span>
              <hr className="flex-grow border-t border-black" />
            </div>

          
            <div className="flex justify-center items-center gap-3">
              <button
                type="button"
                className="w-fit flex items-center gap-2 px-4 py-1 text-sm border border-gray-300 rounded text-gray-700 bg-white hover:bg-gray-100"
              >
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  alt="Google Logo"
                  className="w-5 h-5"
                />
                Google
              </button>
            </div>

           
            <div className="text-center mt-2">
              <p className="text-sm text-black">
                Create account on <span className="font-semibold">Uniisphere</span>
                <a href="/signup" className="text-blue-500 hover:underline text-sm ml-2">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserForm;