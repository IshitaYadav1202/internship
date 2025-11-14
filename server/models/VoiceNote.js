const mongoose = require('mongoose');

// Voice Journal Schema
const voiceNoteSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  audioUrl: {
    type: String,
    required: [true, 'Audio URL is required']
  },
  transcript: {
    type: String,
    default: '',
    maxlength: [5000, 'Transcript cannot exceed 5000 characters']
  },
  duration: {
    type: Number, // Duration in seconds
    default: 0
  },
  collaborators: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    role: {
      type: String,
      enum: ['owner', 'editor', 'viewer'],
      default: 'viewer'
    }
  }],
  comments: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    text: {
      type: String,
      required: true,
      maxlength: [500, 'Comment cannot exceed 500 characters']
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
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
voiceNoteSchema.index({ userId: 1, createdAt: -1 });
voiceNoteSchema.index({ 'collaborators.userId': 1 });

module.exports = mongoose.model('VoiceNote', voiceNoteSchema);

