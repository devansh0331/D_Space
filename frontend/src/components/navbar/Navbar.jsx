import React, { useState } from "react";
import { AiOutlineAlignLeft, AiOutlineAlignRight } from "react-icons/ai";

import "./Navbar.css";

import Logo from "../../img/MyLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home"); // Keep track of the active link
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Function to update the active link when a link is clicked
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="nav">
      <span>
        <img src={Logo} alt="" />
      </span>
      <div className="navbar-title" onClick={handleToggle}>
        {!isOpen && (
          <span>
            <AiOutlineAlignLeft />
          </span>
        )}
        {isOpen && (
          <span>
            <AiOutlineAlignRight />
          </span>
        )}
      </div>

      <ul>
        <Link
          to="/about"
          className={`navbar-item ${activeLink === "about" ? "active" : ""}`}
          onClick={() => handleLinkClick("about")}
        >
          <li>About</li>
        </Link>
        <Link
          to="/learnings"
          className={`navbar-item ${
            activeLink === "learnings" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("learnings")}
        >
          <li>Learnings</li>
        </Link>
        <Link
          to="/projects"
          className={`navbar-item ${activeLink === "projects" ? "active" : ""}`}
          onClick={() => handleLinkClick("projects")}
        >
          <li>Projects</li>
        </Link>
        <Link
          to="/blogs"
          className={`navbar-item ${activeLink === "blogs" ? "active" : ""}`}
          onClick={() => handleLinkClick("blogs")}
        >
          <li>Blogs</li>
        </Link>
        {/* <Link
          to="#contact"
          className={`navbar-item ${activeLink === "contact" ? "active" : ""}`}
          onClick={() => handleLinkClick("contact")}
        >
          <li>Contact</li>
        </Link> */}
      </ul>
    </div>
  );
}

export default Navbar;
