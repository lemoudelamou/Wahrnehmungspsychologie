import React, { useState } from 'react';
import axios from '../api/axios';




function SignIn() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');




  const handleUsernameOrEmailChange = (event) => {
    setUsernameOrEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();



    // Reset the form fields
    setUsernameOrEmail('');
    setPassword('');
  };

  return (
    <div className='bg'>
      <form className='container' onSubmit={handleSubmit}>
      <div className='home-container'> 
            <h2 className='h2'>Sign In</h2>
        <label>
          Username or Email:
          <input type="text" value={usernameOrEmail} onChange={handleUsernameOrEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
