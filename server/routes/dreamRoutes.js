const express = require('express');
const {
  getDreams,
  getDream,
  createDream,
  updateDream,
  deleteDream,
  createConnection
} = require('../controllers/dreamController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// All routes are protected
router.use(protect);

router.route('/')
  .get(getDreams)
  .post(createDream);

router.route('/:id')
  .get(getDream)
  .put(updateDream)
  .delete(deleteDream);

router.post('/:id/connect', createConnection);

module.exports = router;

