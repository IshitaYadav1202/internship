const Capsule = require('../models/Capsule');

// @desc    Get all capsules for logged in user
// @route   GET /api/capsules
// @access  Private
exports.getCapsules = async (req, res, next) => {
  try {
    const capsules = await Capsule.find({ userId: req.user.id })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: capsules.length,
      data: capsules
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single capsule
// @route   GET /api/capsules/:id
// @access  Private
exports.getCapsule = async (req, res, next) => {
  try {
    const capsule = await Capsule.findById(req.params.id);

    if (!capsule) {
      return res.status(404).json({
        success: false,
        message: 'Capsule not found'
      });
    }

    // Make sure user owns the capsule
    if (capsule.userId.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to access this capsule'
      });
    }

    res.status(200).json({
      success: true,
      data: capsule
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new capsule
// @route   POST /api/capsules
// @access  Private
exports.createCapsule = async (req, res, next) => {
  try {
    req.body.userId = req.user.id;
    const capsule = await Capsule.create(req.body);

    res.status(201).json({
      success: true,
      data: capsule
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update capsule
// @route   PUT /api/capsules/:id
// @access  Private
exports.updateCapsule = async (req, res, next) => {
  try {
    let capsule = await Capsule.findById(req.params.id);

    if (!capsule) {
      return res.status(404).json({
        success: false,
        message: 'Capsule not found'
      });
    }

    // Make sure user owns the capsule
    if (capsule.userId.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to update this capsule'
      });
    }

    capsule = await Capsule.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: capsule
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete capsule
// @route   DELETE /api/capsules/:id
// @access  Private
exports.deleteCapsule = async (req, res, next) => {
  try {
    const capsule = await Capsule.findById(req.params.id);

    if (!capsule) {
      return res.status(404).json({
        success: false,
        message: 'Capsule not found'
      });
    }

    // Make sure user owns the capsule
    if (capsule.userId.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to delete this capsule'
      });
    }

    await capsule.deleteOne();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Unlock capsule (if unlock date has passed)
// @route   PUT /api/capsules/:id/unlock
// @access  Private
exports.unlockCapsule = async (req, res, next) => {
  try {
    const capsule = await Capsule.findById(req.params.id);

    if (!capsule) {
      return res.status(404).json({
        success: false,
        message: 'Capsule not found'
      });
    }

    // Make sure user owns the capsule
    if (capsule.userId.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to unlock this capsule'
      });
    }

    // Check if unlock date has passed
    if (new Date() < capsule.unlockDate) {
      return res.status(400).json({
        success: false,
        message: 'Capsule cannot be unlocked yet'
      });
    }

    capsule.isLocked = false;
    await capsule.save();

    res.status(200).json({
      success: true,
      data: capsule
    });
  } catch (error) {
    next(error);
  }
};

