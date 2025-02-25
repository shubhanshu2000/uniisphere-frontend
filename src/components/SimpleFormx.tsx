import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"; 
import { useNavigate } from "react-router-dom";
import AgeToggle from "./Agetoggle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/Store";
import { updateFormData } from "../Store/formslice";





const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  location: z.string().min(1, "Location is required"),
});

type FormData = z.infer<typeof formSchema>;

function SimpleFormx() {
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
    dispatch(updateFormData(data));
    navigate("/userform/college"); 
  };

  return (
    <div className="flex justify-center items-center mt-9">
      <div
        className="p-6 rounded-4xl shadow-md w-150 h-120"
        style={{
          background:
            "linear-gradient(rgba(68, 169, 177, 0.1) 0%, rgba(225, 200, 107, 0.1) 100%)",
        }}
      >
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
   
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mt-7">
              First Name
            </label>
            <input
              {...register("firstName")}
              id="firstName"
              type="text"
              placeholder="Enter Your First Name"
              className="w-full p-2 border border-black rounded mt-1"
              defaultValue={formData.firstName}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>

        
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              {...register("lastName")}
              id="lastName"
              type="text"
              placeholder="Enter Your Last Name"
              className="w-full p-2 border border-black rounded mt-1"
              defaultValue={formData.lastName}
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>

      
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              {...register("location")}
              id="location"
              type="text"
              placeholder="Enter Your Location"
              className="w-full p-2 border border-black rounded mt-1"
              defaultValue={formData.location}
              aria-invalid={errors.location ? "true" : "false"}
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
            )}
          </div>

     
          <div>
            <AgeToggle />
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

export default SimpleFormx;