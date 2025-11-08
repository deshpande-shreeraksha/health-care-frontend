import React from 'react';
import '../styles/ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-container">
      <h2>Contact MedVerse</h2>
      <p>If you have questions, feedback, or need support, we’re here to help.</p>

      <div className="contact-info">
        <span><strong>Email:</strong> <a href="mailto:support@medverse.in">support@medverse.in</a></span>
        <span><strong>Phone:</strong> +91 98765 43210</span>
        <span><strong>Office Hours:</strong> Mon–Fri, 9:00 AM – 6:00 PM IST</span>
        <span><strong>Address:</strong> MedVerse HQ, 2nd Floor, HealthTech Tower, MG Road, Bengaluru, Karnataka – 560001</span>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email Address" required />
        <textarea placeholder="Your Message" rows="4" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;
