import React, { useRef, useEffect } from 'react';
import '../styles/Contact.css';
import ContactForm from './ContactForm';
import EditableInfo from './EditableInfo';

const Contact = ({ title, setTitle }) => {
  const titleRef = useRef(null);

  const handleInput = () => {
    const newTitle = titleRef.current.innerText;
    setTitle(newTitle);
  };

  // Set initial value once
  useEffect(() => {
    if (titleRef.current && title) {
      titleRef.current.innerText = title;
    }
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="contact-title-wrapper">
        <h1
          className="contact-title-editable"
          contentEditable
          suppressContentEditableWarning
          onInput={handleInput}
          ref={titleRef}
        />
      </div>
      <div className="contact-container">
        <EditableInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
