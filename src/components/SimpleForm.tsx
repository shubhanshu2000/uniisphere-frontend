import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import StudentToggle from "./StudentToggle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/Store";
import { updateFormData } from "../Store/formslice";


const formSchema = z.object({
  college: z.string().min(1, "College/University is required"),
  degree: z.string().min(1, "Degree is required"),
  specialization: z.string().min(1, "Specialization is required"),
});

type FormData = z.infer<typeof formSchema>;

function SimpleForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);



  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    try {
      console.log(data); 
      dispatch(updateFormData(data)); 

    
      navigate("/username");
    } catch (error) {

      alert("An error occurred. Please try again.");
    }
  };
    
  return (
    <div className="flex justify-center items-center mt-9">
      <div
        className="p-6 rounded-3xl shadow-md w-150 h-110"
        style={{
          background:
            "linear-gradient(rgba(68, 169, 177, 0.1) 0%, rgba(225, 200, 107, 0.1) 100%)",
        }}
      >
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
       
          <div>
            <label htmlFor="college" className="block text-sm font-medium text-gray-900 mt-7">
              School or College/University
            </label>
            <input
              {...register("college")}
              id="college"
              type="text"
              placeholder="Enter Your College/University Name"
              className="w-full p-2 border border-black rounded mt-1"
              defaultValue={formData.college}
              aria-invalid={errors.college ? "true" : "false"}
            />
            {errors.college && (
              <p className="text-red-500 text-sm mt-1">{errors.college.message}</p>
            )}
          </div>

          {/* Degree Field */}
          <div>
            <label htmlFor="degree" className="block text-sm font-medium text-gray-700">
              Degree
            </label>
            <input
              {...register("degree")}
              id="degree"
              type="text"
              placeholder="Enter Your Degree Name"
              className="w-full p-2 border border-black rounded mt-1"
              defaultValue={formData.Degree}
              aria-invalid={errors.degree ? "true" : "false"}
            />
            {errors.degree && (
              <p className="text-red-500 text-sm mt-1">{errors.degree.message}</p>
            )}
          </div>

          {/* Specialization Field */}
          <div>
            <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">
              Specialization
            </label>
            <input
              {...register("specialization")}
              id="specialization"
              type="text"
              placeholder="Enter Your Specialization"
              defaultValue={formData.Specialization}
              className="w-full p-2 border border-black rounded mt-1"
              aria-invalid={errors.specialization ? "true" : "false"}
            />
            {errors.specialization && (
              <p className="text-red-500 text-sm mt-1">{errors.specialization.message}</p>
            )}
          </div>

     
          <div>
            <StudentToggle />
          </div>

 
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-20 px-3 py-1 text-sm rounded bg-blue-500 text-white hover:bg-blue-600 transition mt-8"
            >
              {isSubmitting ? "Submitting..." : "Continue"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SimpleForm;