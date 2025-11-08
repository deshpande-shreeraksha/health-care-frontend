import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer bg-light py-4 mt-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
        <div className="footer-links">
          <span><strong>🌐</strong> <a href="https://www.medverse.in" target="_blank" rel="noopener noreferrer">www.medverse.in</a></span>
        </div>
        <div className="footer-social mt-3 mt-md-0">
          <a href="https://www.linkedin.com/company/medverse" target="_blank" rel="noopener noreferrer" className="me-3">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://twitter.com/medverse" target="_blank" rel="noopener noreferrer" className="me-3">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://instagram.com/medverse" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
      <div className="text-center mt-3 text-muted small">© 2025 MedVerse Healthcare. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
