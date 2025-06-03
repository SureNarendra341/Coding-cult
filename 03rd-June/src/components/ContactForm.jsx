import React from 'react';
import '../styles/Contact.css';

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="input-row">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone" />
      </div>
      <input type="email" placeholder="Email address" />
      <textarea placeholder="Message"></textarea>
      <button type="submit">CONTACT US</button>
    </form>
  );
};

export default ContactForm;