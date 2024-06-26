import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Homepage = ({ openMyComponent }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <div className="navbar-fixed">
                <div className="navBar">

                    <div className="hamburger" onClick={toggleMobileMenu}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    {/* <div className="osdclogo">
                        <Link  className="clubName"  to='/'>OSDHack</Link>
                    </div> */}
                    <div
                        className={`navbar-items ${isMobileMenuOpen ? "mobilemenu" : ""}`}
                    >
                        <Link to='/' onClick={closeMobileMenu}>&lt;home&gt;</Link>
                        <Link to='/brochure' onClick={closeMobileMenu}>&lt;brochure&gt;</Link>
                        {/* <Link to='/gallery' onClick={closeMobileMenu}>&lt;gallery&gt;</Link> */}
                        {/* <Link to='/cod' onClick={closeMobileMenu}>&lt;code-of-conduct&gt;</Link> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homepage;
