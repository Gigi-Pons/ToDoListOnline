import React, { useState, useContext } from 'react';
import './LoginForm.css';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [loginSuccess, setLoginSuccess] = useState(''); // Add this line

  const { login } = useContext(AuthContext);
  const history = useNavigate();

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      setUsernameError(!username ? 'Username is required' : '');
      setPasswordError(!password ? 'Password is required' : '');
      return;
    }
    
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Call the login function from AuthContext
        login();
        setLoginSuccess('SUCCESSFUL LOGIN'); 
        console.log("Response status:", response.status);
        console.log("Response OK:", response.ok);
        history('/tasks'); // Redirect to the tasks page

      } else {
        // Handle errors (e.g., incorrect credentials)
        console.error('Login failed');
        setLoginSuccess('NOT LOGGED IN');
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginSuccess('CREDENTIALS WERE INVALID');
    }
  };

  return (
    <>
  {loginSuccess && <h1>{loginSuccess}</h1>}
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
        {usernameError && <div className="error-message">{usernameError}</div>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
        {passwordError && <div className="error-message">{passwordError}</div>}
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
        <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
      </div>
    </form>
    </>
  );
}

export default LoginForm;
