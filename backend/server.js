const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());


// Middleware to parse request body
app.use(bodyParser.json());

// Mock database for demonstration purposes
let users = [];

app.use(express.static(path.join(__dirname, '..', 'build')));


app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Simple validation
  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  // Check if the user already exists
  const userExists = users.some(user => user.username === username);
  if (userExists) {
    return res.status(400).send('User already exists');
  }

  // Create and store the new user
  const newUser = { username, password };
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully!'});
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple validation
  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  // Find the user in the database
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    // User found and password matches
    // In a real application, you might want to generate a token or a session here
    res.status(201).json({ message: 'Login successful' });
  } else {
    // User not found or password does not match
    res.status(401).send('Invalid credentials');
  }
});


app.get('/users', (req, res) => {
  res.json(users);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
  
  

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
