import React from "react";
import Navbar from "./components/ui/Navbar";
import Hero from "./components/ui/Hero";
import AboutSection from "./components/ui/AboutSection";
import Footer from "./components/ui/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";  // ✅ use BrowserRouter

import Login from "./components/ui/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-20"> {/* padding to avoid navbar overlap */}
        <Routes>
          <Route path="/" element={<Hero />} />  {/* You can show Hero here */}
          <Route path="/about" element={<AboutSection />} />
          <Route path="/shop" element={<h1>Shop Page</h1>} />
          <Route path="/profile" element={<h1>Profile Page</h1>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer /> {/* ✅ Footer outside Routes so it shows on every page */}
    </BrowserRouter>
  );
}

export default App;
