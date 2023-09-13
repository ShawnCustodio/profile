import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const messageWithSenderInfo = 'Name: ${formValues.name} Email: ${formValues.email} Message: ${formvValues.message}    ';

    
    emailjs
      .send(
        'service_r6z3xzu',
        'template_1tismpe',
        {
            message: formValues.message,
            from_name: formValues.name,
            to_name: "Shawn Custodio",
        },
        
        'iql6ouizkK6f1X1Ls'
      )
      .then(
        (result) => {
          alert('Message sent, thank you for contacting me.');
        },
        (error) => {
          console.error('EmailJS Error:', error);
          alert('An error occurred, please try again later.');
        }
      );
  
    setFormValues({
      name: '',
      email: '',
      message: '',
    });
  };
  

  return (
    <section id="contact" className="container my-5">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={formValues.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
