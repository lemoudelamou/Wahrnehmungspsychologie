import React, { useState } from 'react';
import '../style/SignUp.css'

function SignUp() {
    const [name,setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform registration logic here
        // You can send the registration data to an API or perform any other necessary actions

        // Reset the form fields
        setName('');
        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className='bg'>
            <form className='container' onSubmit={handleSubmit}>
             <div className='home-container'> 
            <h2 className='h2'>SignUp</h2>

                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <br />
                <label>
                    Username:
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <button type="submit">Register</button>
                </div>  
            </form>
        </div>
    );
}

export default SignUp;
