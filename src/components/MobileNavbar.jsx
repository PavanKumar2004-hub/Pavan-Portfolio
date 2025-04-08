import React from "react";

const MobileNavbar = ({ isOpen, setIsMenuOpen }) => {
  const handleScroll = (sectionId) => {
    setIsMenuOpen(false); // Close menu
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // slight delay to allow menu close animation (if any)
  };

  if (!isOpen) return null; // Only render when menu is open

  return (
    <>
      {/* Sidebar Menu */}
      <div className="w-1/2 h-screen flex flex-col p-8 bg-background fixed top-0 left-0 z-20">
        <div className="ui-circle -ml-20 -mt-10" />
        <ul>
          <li className="mb-5">
            <a className="menu-item cursor-pointer" onClick={() => handleScroll("hero")}>
              Home
            </a>
          </li>
          <li className="mb-5">
            <a className="menu-item cursor-pointer" onClick={() => handleScroll("skills")}>
              Skills
            </a>
          </li>
          <li className="mb-5">
            <a className="menu-item cursor-pointer" onClick={() => handleScroll("experience")}>
              Work experience
            </a>
          </li>
          <li className="mb-5">
            <a className="menu-item cursor-pointer" onClick={() => handleScroll("about")}>
              About
            </a>
          </li>
        </ul>
        <button className="h-10 bg-primary text-white text-xs md:text-sm px-6 rounded hover:bg-blue-200 hover:text-primary md:block">
          Contact Us
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className="w-screen h-screen bg-overlayBg fixed top-0 left-0 z-10"
      />
    </>
  );
};

export default MobileNavbar;
