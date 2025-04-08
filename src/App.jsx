// import "./index.css";
import React from "react";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import WorkExp from "./components/WorkExp";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="bg-background">
      <div
        style={
          {
            // backgroundImage: `url(${BG_GRADIENT})`,
            // backgroundPosition: `50% 50%`,
          }
        }
      >
        <Navbar />
        <Hero />
      </div>

      <Skills />
      <WorkExp />
      <Aboutme />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
