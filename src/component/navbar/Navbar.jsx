import React from "react";
import { Send } from "lucide-react";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="main-navbar">
      <nav className="navbar">
      
        <div className="logo">
          <div className="logo-icon">
            <Send size={22} color="white" />
          </div>
          <h1 className="brand">Thynk Unlimites</h1>
        </div>

        
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Pricing</a>
          <button className="contact-btn">Contact Us</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
