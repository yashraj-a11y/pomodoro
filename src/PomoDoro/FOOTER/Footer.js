import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-heading">Pomofocus</h4>
          <p className="footer-text">
            A simple Pomodoro Timer app that helps you focus on tasks.
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Resources</h4>
          <ul className="footer-links">
            <li><a href="http://localhost:3001/">About</a></li>
            <li><a href="http://localhost:3001/">Privacy Policy</a></li>
            <li><a href="http://localhost:3001/">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Made with ♥</h4>
          <div className="social-links">
            <a href="http://localhost:3001/" className="social-icon">
              <span>📱</span>
            </a>
            <a href="http://localhost:3001/" className="social-icon">
              <span>📧</span>
            </a>
            <a href="http://localhost:3001/" className="social-icon">
              <span>🌐</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Pomofocus. All rights reserved.</p>
      </div>
    </footer>
  );
}