const express = require('express');
const {
  register,
  login,
  getMe,
  updateUser,
  deleteUser
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/me', protect, getMe);
router.put('/me', protect, updateUser);
router.delete('/me', protect, deleteUser);

module.exports = router;

