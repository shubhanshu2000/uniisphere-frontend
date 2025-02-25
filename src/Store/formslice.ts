// formSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface FormState {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  location: string;
  college: string;
  Degree: string;
  Specialization: string;
  username: string;
  headline: string;
  gender: string;
  about: string;
  skills: string[];
  interest: string[];
  projectDescription: string;
  profilePicture: string;
}
const initialState: FormState = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  location: "",
  college: "",
  Degree: "",
  Specialization: "",
  username: "",
  headline: "",
  gender: "",
  about: "",
  skills: [],
  interest: [],
  projectDescription: "",
  profilePicture: "",
};
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData(state, action: PayloadAction<Partial<FormState>>) {
      return { ...state, ...action.payload };
    },
    resetFormData() {
      return initialState;
    },
  },
});
export const { updateFormData, resetFormData } = formSlice.actions;
export default formSlice.reducer;