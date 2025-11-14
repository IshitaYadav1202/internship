// Validation helper functions

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePassword = (password) => {
  // At least 6 characters
  return password && password.length >= 6;
};

const validateObjectId = (id) => {
  const ObjectId = require('mongoose').Types.ObjectId;
  return ObjectId.isValid(id);
};

const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return input.trim().replace(/[<>]/g, '');
};

module.exports = {
  validateEmail,
  validatePassword,
  validateObjectId,
  sanitizeInput
};

