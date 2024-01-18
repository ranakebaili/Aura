import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 Aura Jewelry. All rights reserved. | <Link to="/terms-of-service">Privacy Policy</Link> | <Link to="/privacy-policy">Terms of Service</Link></p>

      <div className="social-icons">
        <a href="https://www.facebook.com/rana.kebaili.5" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://www.instagram.com/explore/tags/jewelry/?hl=fr" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.pinterest.com/newdarlings/jewelry/" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
      </div>
    </div>
  );
};

export default Footer;
