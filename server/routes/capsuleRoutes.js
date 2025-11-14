const express = require('express');
const {
  getCapsules,
  getCapsule,
  createCapsule,
  updateCapsule,
  deleteCapsule,
  unlockCapsule
} = require('../controllers/capsuleController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// All routes are protected
router.use(protect);

router.route('/')
  .get(getCapsules)
  .post(createCapsule);

router.route('/:id')
  .get(getCapsule)
  .put(updateCapsule)
  .delete(deleteCapsule);

router.put('/:id/unlock', unlockCapsule);

module.exports = router;

