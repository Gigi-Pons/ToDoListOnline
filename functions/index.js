const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

admin.initializeApp();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Your existing Express routes
app.post("/register", async (req, res) => {
  const {username, password} = req.body;
  // Simple validation
  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }
  try {
    // Create a new user
    const userRecord = await admin.auth().createUser({
      email: username, // Assuming the username is an email
      password: password});
    return res.status(201).json({message: "User registered successfully!",
      uid: userRecord.uid});
  } catch (error) {
    console.error("Error creating new user", error);
    return res.status(500).send(error.message);
  }
});


app.post("/login", async (req, res) => {
  const {username, password} = req.body;

  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  try {
    // Authenticate the user with Firebase Auth
    const userRecord = await admin.auth().getUserByEmail(username);
    // Normally, you would not check passwords server-side like this
    // Instead, use Firebase Authentication client SDKs to handle login

    // Here you could generate a custom token or session if necessary
    const customToken = await admin.auth().createCustomToken(userRecord.uid);

    return res.status(200).json({
      message: "Login successful", token: customToken});
  } catch (error) {
    console.error("Login failed:", error);
    return res.status(401).send("Invalid credentials");
  }
});


app.get("/users", (req, res) => {
  // Adapted users retrieval logic here
});

// Export the Express app as a Cloud Function named 'api'
exports.api = functions.https.onRequest(app);
