import React from 'react';
import { Link } from 'react-router-dom'
import './ContactForm.css'; // Import the CSS file for styling

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <h2>Get in touch!</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
      <div className="social-media">
        <h3>Connect with me</h3>
        <ul>
          <li><i className="fab fa-facebook-square"></i> Facebook</li>
          <li><i className="fab fa-twitter-square"></i> Twitter</li>
          <li><i className="fab fa-instagram-square"></i> Instagram</li>
          <li><i className="fab fa-linkedin"></i> LinkedIn</li>
          <li>
            <Link to='/'>
            <button>Home</button>
            </Link>
            <Link to='/experience'>
            <button>Experience</button>
            </Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;
