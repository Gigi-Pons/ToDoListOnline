import React, { useState } from 'react';
import './RegistrationForm.css';


function RegistrationForm() {
  // State for each form field
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
      // Send a POST request to the server
      try {
        const response = await fetch('https://us-central1-taskcreator-acc.cloudfunctions.net/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),

        });

        // Check if the request was successful
        if (response.ok) {
          const data = await response.json();
            setResponseMessage(data.message); // Assuming 'message' is part of the server response
        } else {
            // If the server responded with a non-OK status, use the message from the response
            setResponseMessage('User already exists.');
        }

    } catch (error) {
        console.error('Error:', error);
        // This will catch network errors and errors thrown from the above block
        setResponseMessage(error.message);
    }
  };

  return (
    <div className="register-form-container">
    <form onSubmit={handleSubmit}>
      <div>
        <label>Full Name:</label>
        <input 
          type="text" 
          value={fullName} 
          onChange={(e) => setFullName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Create Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Register</button>
    </form>
    {responseMessage && <div className="response-message">{responseMessage}</div>}
    </div>
  );
}

export default RegistrationForm;
