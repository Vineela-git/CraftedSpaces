import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';

// Initialize EmailJS

const Result = () => {
  return (
    <Alert variant="success" className="success-msg">
      Your Message has been successfully sent.
    </Alert>
  );
};

const FormTwo = () => {
  const form = useRef();
  const [result, showresult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form.current);

    // Send email to vmadduri@islander.tamucc.edu
    emailjs
      .send('service_r2lfsys', 'template_o6keraq', {
        name: formData.get('contact-name'),
        email: formData.get('contact-email'),
        phone: formData.get('contact-phone'),
        message: formData.get('contact-message'),
        to_email: 'vmadduri@islander.tamucc.edu',
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset();
    showresult(true);
  };

  setTimeout(() => {
    showresult(false);
  }, 5000);

  return (
    <form ref={form} onSubmit={sendEmail} className="axil-contact-form">
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" name="contact-name" required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" name="contact-email" required />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input type="tel" className="form-control" name="contact-phone" required />
      </div>
      <div className="form-group mb--40">
        <label>How can we help you?</label>
        <textarea className="form-control" name="contact-message" rows="4"></textarea>
      </div>
      <div className="form-group">
        <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn">
          Submit
        </button>
      </div>
      <div className="form-group">{result ? <Result /> : null}</div>
    </form>
  );
};

export default FormTwo;