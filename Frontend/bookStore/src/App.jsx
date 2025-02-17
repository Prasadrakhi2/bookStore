import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/home";
import CoursesPage from "./components/courses/CoursesPage";
import SignUp from "./components/signUp/SignUp";
import ContectUs from "./components/contactUs/ContectUs";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contectus" element={<ContectUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
