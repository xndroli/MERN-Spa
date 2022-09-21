import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
      },
    });
    console.log(mutationResponse)
    const token = mutationResponse.data.addUser.token;
    
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="detailedView">
      <Link to="/login">← Go to Login</Link>

      <form onSubmit={handleFormSubmit}>
        <div>
        <h2 className='form-header'>Signup</h2>
        </div>
        <div className="text-input">
          <label className='text-label' htmlFor="username">Username:</label>
          <input
            className='text-input'
            placeholder="Username"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="text-input">
          <label className='text-label' htmlFor="firstName">Name:</label>
          <input
            className='text-input'
            placeholder="Your name"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="text-input">
          <label className='text-label' htmlFor="email">Email:</label>
          <input
            className='text-input'
            placeholder="email@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="text-input">
          <label className='text-label' htmlFor="pwd">Password:</label>
          <input
          className='text-input'
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>

          <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Signup;
