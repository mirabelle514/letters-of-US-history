import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div>Powered by the <a href="https://lumieredesignsystem.com/" target="_blank" rel="noopener noreferrer">Lumière Design System</a></div>
      <div>Part of <a href="https://www.thewednesdaycollective.com" target="_blank" rel="noopener noreferrer">The Wednesday Collective</a> family of initiatives</div>
      <div>© {currentYear} All rights reserved.</div>
    </footer>
  );
};

export default Footer; 