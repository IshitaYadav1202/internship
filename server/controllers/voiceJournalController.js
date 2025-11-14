const VoiceNote = require('../models/VoiceNote');

// @desc    Get all voice journals for logged in user
// @route   GET /api/voice-journals
// @access  Private
exports.getVoiceJournals = async (req, res, next) => {
  try {
    const voiceNotes = await VoiceNote.find({
      $or: [
        { userId: req.user.id },
        { 'collaborators.userId': req.user.id }
      ]
    })
      .populate('userId', 'name email avatar')
      .populate('collaborators.userId', 'name email avatar')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: voiceNotes.length,
      data: voiceNotes
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single voice journal
// @route   GET /api/voice-journals/:id
// @access  Private
exports.getVoiceJournal = async (req, res, next) => {
  try {
    const voiceNote = await VoiceNote.findById(req.params.id)
      .populate('userId', 'name email avatar')
      .populate('collaborators.userId', 'name email avatar')
      .populate('comments.userId', 'name email avatar');

    if (!voiceNote) {
      return res.status(404).json({
        success: false,
        message: 'Voice journal not found'
      });
    }

    // Check if user has access
    const hasAccess = 
      voiceNote.userId._id.toString() === req.user.id ||
      voiceNote.collaborators.some(c => c.userId._id.toString() === req.user.id);

    if (!hasAccess) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to access this voice journal'
      });
    }

    res.status(200).json({
      success: true,
      data: voiceNote
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new voice journal
// @route   POST /api/voice-journals
// @access  Private
exports.createVoiceJournal = async (req, res, next) => {
  try {
    req.body.userId = req.user.id;
    const voiceNote = await VoiceNote.create(req.body);

    res.status(201).json({
      success: true,
      data: voiceNote
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update voice journal
// @route   PUT /api/voice-journals/:id
// @access  Private
exports.updateVoiceJournal = async (req, res, next) => {
  try {
    let voiceNote = await VoiceNote.findById(req.params.id);

    if (!voiceNote) {
      return res.status(404).json({
        success: false,
        message: 'Voice journal not found'
      });
    }

    // Check if user is owner or has editor role
    const isOwner = voiceNote.userId.toString() === req.user.id;
    const collaborator = voiceNote.collaborators.find(
      c => c.userId.toString() === req.user.id && c.role === 'editor'
    );

    if (!isOwner && !collaborator) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to update this voice journal'
      });
    }

    voiceNote = await VoiceNote.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: voiceNote
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete voice journal
// @route   DELETE /api/voice-journals/:id
// @access  Private
exports.deleteVoiceJournal = async (req, res, next) => {
  try {
    const voiceNote = await VoiceNote.findById(req.params.id);

    if (!voiceNote) {
      return res.status(404).json({
        success: false,
        message: 'Voice journal not found'
      });
    }

    // Only owner can delete
    if (voiceNote.userId.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to delete this voice journal'
      });
    }

    await voiceNote.deleteOne();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Add collaborator to voice journal
// @route   POST /api/voice-journals/:id/collaborators
// @access  Private
exports.addCollaborator = async (req, res, next) => {
  try {
    const { userId, role } = req.body;
    const voiceNote = await VoiceNote.findById(req.params.id);

    if (!voiceNote) {
      return res.status(404).json({
        success: false,
        message: 'Voice journal not found'
      });
    }

    // Only owner can add collaborators
    if (voiceNote.userId.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to add collaborators'
      });
    }

    // Check if collaborator already exists
    const existingCollaborator = voiceNote.collaborators.find(
      c => c.userId.toString() === userId
    );

    if (existingCollaborator) {
      return res.status(400).json({
        success: false,
        message: 'User is already a collaborator'
      });
    }

    voiceNote.collaborators.push({ userId, role: role || 'viewer' });
    await voiceNote.save();

    res.status(200).json({
      success: true,
      data: voiceNote
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Add comment to voice journal
// @route   POST /api/voice-journals/:id/comments
// @access  Private
exports.addComment = async (req, res, next) => {
  try {
    const { text } = req.body;
    const voiceNote = await VoiceNote.findById(req.params.id);

    if (!voiceNote) {
      return res.status(404).json({
        success: false,
        message: 'Voice journal not found'
      });
    }

    // Check if user has access
    const hasAccess = 
      voiceNote.userId.toString() === req.user.id ||
      voiceNote.collaborators.some(c => c.userId.toString() === req.user.id);

    if (!hasAccess) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to comment on this voice journal'
      });
    }

    voiceNote.comments.push({
      userId: req.user.id,
      text
    });

    await voiceNote.save();

    res.status(200).json({
      success: true,
      data: voiceNote
    });
  } catch (error) {
    next(error);
  }
};

