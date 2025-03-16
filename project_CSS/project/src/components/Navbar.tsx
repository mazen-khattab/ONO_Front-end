import React, { useState } from "react";
import { ShoppingCart, Menu, Globe, Heart } from "lucide-react";
import "./Navbar.css";
import logo from "../images/Logo.jpg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [language, setLanguage] = useState("EN");
  const languages = [
    { code: "EN", name: "English" },
    { code: "AR", name: "Arabic" },
  ];

  const dropdownLang = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <a href="/" className="logo">
            <img src={logo} alt="Logo" />
          </a>

          <div className="nav-links">
            <a href="/" className="link">Home</a>
            <a href="AllProducts" className="link" >Products</a>
            <a href="about" className="link" >About</a>
            <a href="./WhyUs" className="link">Why Us</a>
            <a href="contact" className="link" >Contact</a>
          </div>

          <div className="nav-actions">
            <div className="icons">
              <div className="language-selector" onClick={dropdownLang}>
                <button className="language-button">
                  <Globe className="h-5 w-5" />
                  <span>{language}</span>
                </button>
                <div
                  className={
                    isActive
                      ? "language-dropdown"
                      : "language-dropdown disappear"
                  }
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className="language-option"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              <button className="icon-button">
                <ShoppingCart className="h-6 w-6" />
              </button>

              <button className="icon-button menu-button">
                <Menu className="h-6 w-6" />
              </button>
            </div>

            <div className="registration">
              <a href="register" className="btn btn-primary">
                Register
              </a>
              <a href="login" className="btn login-btn">
                LogIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
