const Dream = require('../models/Dream');

// @desc    Get all dreams for logged in user
// @route   GET /api/dreams
// @access  Private
exports.getDreams = async (req, res, next) => {
  try {
    const dreams = await Dream.find({ userId: req.user.id })
      .populate('connections', 'title status')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: dreams.length,
      data: dreams
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single dream
// @route   GET /api/dreams/:id
// @access  Private
exports.getDream = async (req, res, next) => {
  try {
    const dream = await Dream.findById(req.params.id)
      .populate('connections', 'title status');

    if (!dream) {
      return res.status(404).json({
        success: false,
        message: 'Dream not found'
      });
    }

    // Make sure user owns the dream
    if (dream.userId.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to access this dream'
      });
    }

    res.status(200).json({
      success: true,
      data: dream
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new dream
// @route   POST /api/dreams
// @access  Private
exports.createDream = async (req, res, next) => {
  try {
    req.body.userId = req.user.id;
    const dream = await Dream.create(req.body);

    res.status(201).json({
      success: true,
      data: dream
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update dream
// @route   PUT /api/dreams/:id
// @access  Private
exports.updateDream = async (req, res, next) => {
  try {
    let dream = await Dream.findById(req.params.id);

    if (!dream) {
      return res.status(404).json({
        success: false,
        message: 'Dream not found'
      });
    }

    // Make sure user owns the dream
    if (dream.userId.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to update this dream'
      });
    }

    dream = await Dream.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: dream
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete dream
// @route   DELETE /api/dreams/:id
// @access  Private
exports.deleteDream = async (req, res, next) => {
  try {
    const dream = await Dream.findById(req.params.id);

    if (!dream) {
      return res.status(404).json({
        success: false,
        message: 'Dream not found'
      });
    }

    // Make sure user owns the dream
    if (dream.userId.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to delete this dream'
      });
    }

    await dream.deleteOne();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create connection between dreams
// @route   POST /api/dreams/:id/connect
// @access  Private
exports.createConnection = async (req, res, next) => {
  try {
    const { targetDreamId } = req.body;
    const dream = await Dream.findById(req.params.id);

    if (!dream) {
      return res.status(404).json({
        success: false,
        message: 'Dream not found'
      });
    }

    // Make sure user owns the dream
    if (dream.userId.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to modify this dream'
      });
    }

    // Check if target dream exists and belongs to user
    const targetDream = await Dream.findById(targetDreamId);
    if (!targetDream || targetDream.userId.toString() !== req.user.id) {
      return res.status(404).json({
        success: false,
        message: 'Target dream not found'
      });
    }

    // Add connection if not already connected
    if (!dream.connections.includes(targetDreamId)) {
      dream.connections.push(targetDreamId);
      await dream.save();
    }

    res.status(200).json({
      success: true,
      data: dream
    });
  } catch (error) {
    next(error);
  }
};

