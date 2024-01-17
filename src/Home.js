// Home.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import Navigation from './Navigation';
// Home.js
import './Home.css';


function Home() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="home-container">
      {!isAuthenticated && (
        <>
          <h1>Welcome to Our Application</h1>
          <p>Please pick one of these two options to get started:</p>
          <Navigation /> {/* Only include if Navigation is not already in App.js */}
        </>
      )}
      {isAuthenticated && (
        <p>You are logged in. Visit your dashboard or explore the site.</p>
      )}
    </div>
  );
}

export default Home;
