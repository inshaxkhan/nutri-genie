import React from "react";
import Navbar from "./components/ui/Navbar";
import Hero from "./components/ui/Hero";
import AboutSection from "./components/ui/AboutSection";
import Footer from "./components/ui/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";  

import Login from "./components/ui/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import OnboardingForm from "./pages/Onboarding";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-20"> 
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/about" element={<AboutSection />} />
          <Route path="/shop" element={<h1>Shop Page</h1>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/onboarding" element={<OnboardingForm />} />
        </Routes>
      </div>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
