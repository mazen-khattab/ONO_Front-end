import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>ONO</h3>
            <p>Challenging minds with innovative puzzles and intelligent toys.</p>
            <div className="social-links">
              <a href="#" className="social-link"><Facebook /></a>
              <a href="#" className="social-link"><Twitter /></a>
              <a href="#" className="social-link"><Instagram /></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>
                <Mail />
                info@onopuzzles.com
              </li>
              <li>
                <Phone />
                +1 (555) 123-4567
              </li>
              <li>
                <MapPin />
                123 Puzzle Street, NY 10001
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ONO Puzzles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;