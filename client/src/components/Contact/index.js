import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  //get formstate
  //initialize keys as empty strings for each user input
  //initialize set form state
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  //further destructure formState
  //pass these values into functions
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  //will sync formstate with user input from DOM
  //fires with every keystroke
  const handleChange = (e) => {
    //validate before syncing
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      //sets message for invalid email
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      //checks if the other two fields are blank
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    //if no error messages
    //sync form state
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  //create a form with three inputs
  //name, email, message text
  // replace label for=''
  //should be label htmlFor=''
  //use destructured form states to set values
  //only show error message if it has a message in it
  return (
    <section className='form'>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label className='text-label' htmlFor="name">Name:</label>
          <input className='text-input' type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label className='text-label' htmlFor="email">Email address:</label>
          <input className='text-input' type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label className='text-label' htmlFor="message">Message:</label>
          <textarea className='text-input'  name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;