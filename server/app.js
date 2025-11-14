const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler');

// Load env vars
dotenv.config();

// Route files
const userRoutes = require('./routes/userRoutes');
const capsuleRoutes = require('./routes/capsuleRoutes');
const dreamRoutes = require('./routes/dreamRoutes');
const voiceJournalRoutes = require('./routes/voiceJournalRoutes');

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(cors());

// Mount routers
app.use('/api/users', userRoutes);
app.use('/api/capsules', capsuleRoutes);
app.use('/api/dreams', dreamRoutes);
app.use('/api/voice-journals', voiceJournalRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running'
  });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static(path.join(__dirname, '../client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
}

// Error handler (must be last)
app.use(errorHandler);

module.exports = app;

