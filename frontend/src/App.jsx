import React from "react";
import Navbar from "./components/ui/Navbar";
import Hero from "./components/ui/Hero";
import AboutSection from "./components/ui/AboutSection";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />

      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
