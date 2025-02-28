import "./App.css";
import UserForm from "./components/UserForm";
import UserForm2 from "./components/UserForm2";
import UserForm3 from "./components/UserForm3";
import UserForm4 from "./components/UserForm4";
import { EmailContext } from "./context/EmailContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {  useState } from "react"; 
import Username from "./components/Username";
import Headline from "./components/Headline";
import Gender from "./components/Gender";
import About from "./components/About";
import Skills from "./components/Skills";
import InterestSelection from "./components/Interest";
import ProjectSection from "./components/Project";
import ProfilePictureUpload from "./components/Picture";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

function App() {
  const [email, setEmail] = useState("");
  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      <Router>
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/userform/details" element={<UserForm2 />} />
          <Route path="/userform/college" element={<UserForm3 />} />
          <Route path="/api/verify-otp" element={<UserForm4 />} />
          <Route path="/username" element={<Username />} />
          <Route path="/headline" element={<Headline />} />
          <Route path="/Gender" element={<Gender />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Interest" element={<InterestSelection />} />
          <Route path="/project" element={<ProjectSection />} />
          <Route path="/Profile_Picture" element={<ProfilePictureUpload />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </EmailContext.Provider>
  );
}

export default App;