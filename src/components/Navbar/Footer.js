import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Youth Red Cross - Velammal Engineering College</p>
                <div className="footer-links">
                    <a href="/AboutUs" className="footer-link">About Us</a>
                    <a href="/service" className="footer-link">Services</a>
                    <a href="/contactus" className="footer-link">Contact Us</a>
                </div>
                <div className="footer-social">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">Facebook</a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">YouTube</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
