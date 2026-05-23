const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const chiragRoutes = require('./Routes/chirag'); // Import routes

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(bodyParser.json());  // Parse JSON request bodies

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Use routes defined in 'chirag.js'
app.use('/api', chiragRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
