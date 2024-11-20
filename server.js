const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
const articleRoutes = require('./routes/articleRoutes');
app.use('/api/articles', articleRoutes);

// Server
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
    console.log(`Knowledge Base Service running on port ${PORT}`);
});
