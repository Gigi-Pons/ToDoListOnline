import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    // Real-time validation for username
    if (!e.target.value) {
      setUsernameError('Username is required');
    } else {
      setUsernameError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Real-time validation for password
    if (!e.target.value) {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setUsernameError(!username ? 'Username is required' : '');
      setPasswordError(!password ? 'Password is required' : '');
      return;
    }
    // Handle login logic here
    console.log('Login with:', username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
        {usernameError && <div style={{ color: 'red' }}>{usernameError}</div>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
      </div>
      <div>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label>Remember Me</label>
      </div>
      <button type="submit">Login</button>
      <div>
        <a href="/forgot-password">Forgot Password?</a>
      </div>
    </form>
  );
}

export default LoginForm;
