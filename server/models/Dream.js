const mongoose = require('mongoose');

// Dream/Goal Schema
const dreamSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  status: {
    type: String,
    enum: ['Planning', 'In Progress', 'Completed', 'On Hold'],
    default: 'Planning'
  },
  dueDate: {
    type: Date,
    default: null
  },
  connections: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dream'
  }],
  position: {
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 }
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

// Index for efficient queries
dreamSchema.index({ userId: 1, createdAt: -1 });

module.exports = mongoose.model('Dream', dreamSchema);

