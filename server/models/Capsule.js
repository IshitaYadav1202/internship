const mongoose = require('mongoose');

// Time Capsule Schema
const capsuleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
    trim: true,
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  unlockDate: {
    type: Date,
    required: [true, 'Please provide an unlock date'],
    validate: {
      validator: function(date) {
        return date > new Date();
      },
      message: 'Unlock date must be in the future'
    }
  },
  isLocked: {
    type: Boolean,
    default: true
  },
  media: [{
    type: String, // URLs to media files
    default: []
  }],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

// Index for efficient queries
capsuleSchema.index({ userId: 1, createdAt: -1 });
capsuleSchema.index({ unlockDate: 1 });

module.exports = mongoose.model('Capsule', capsuleSchema);

