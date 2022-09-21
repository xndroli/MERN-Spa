import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, 
          password: formState.password },
      });
      console.log(mutationResponse)
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
      <Link to="/signup">← Go to Signup</Link>

      <form onSubmit={handleFormSubmit}>
        <div>
          <h2 className='form-header'>Login</h2>
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
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}

          <button type="submit">Submit</button>
        
      </form>
    </div>
  );
}

export default Login;
