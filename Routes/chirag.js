const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../Model/user'); // Import the User model

const router = express.Router();

// Sign Up Route
router.post('/signup', async (req, res) => {
  const { name, mobile, email, password, address } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: 'Email already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    mobile,
    email,
    password: hashedPassword,
    address,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: 'Sign-up successful' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: 'Invalid email or password' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ error: 'Invalid email or password' });
  }

  res.status(200).json({ message: 'Login successful' });
});

module.exports = router;
