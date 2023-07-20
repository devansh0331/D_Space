import React, { useState } from 'react';

import "./Navbar.css"


import Logo from "../../img/MyLogo.png"
import { Link } from 'react-router-dom';

function Navbar() {
    const [activeLink, setActiveLink] = useState('home'); // Keep track of the active link

    // Function to update the active link when a link is clicked
    const handleLinkClick = (link) => {
      setActiveLink(link);
    };
    return (
        <div className='nav'>
            <span><img src={Logo} alt="" /></span>
            <ul>
                <Link to="/" className={`navbar-item ${activeLink === 'learnings' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('learnings')} ><li>Learnings</li></Link>
                <Link to="/projects" className={`navbar-item ${activeLink === 'projects' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('projects')}><li>Projects</li></Link>
                <Link to="/blogs" className={`navbar-item ${activeLink === 'blogs' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('blogs')}><li>Blogs</li></Link>
                <Link to="/contact" className={`navbar-item ${activeLink === 'contact' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('contact')}><li>Contact</li></Link>
            </ul>


        </div>
    )
}

export default Navbar
