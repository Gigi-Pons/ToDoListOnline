import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    setUsernameError('');
    setPasswordError('');

    // Validate inputs
    let isValid = true;
    if (!username) {
      setUsernameError('Username is required');
      isValid = false;
    }
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    // Proceed with login logic if valid
    if (isValid) {
      console.log('Login with:', username, password);
      // Handle login logic here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
 ''       <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          {usernameError && <div style={{ color: 'red' }}>{usernameError}</div>}
      </div>
      <div>
        <label>Password:</label>
        <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        />
        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
