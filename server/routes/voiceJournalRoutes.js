const express = require('express');
const {
  getVoiceJournals,
  getVoiceJournal,
  createVoiceJournal,
  updateVoiceJournal,
  deleteVoiceJournal,
  addCollaborator,
  addComment
} = require('../controllers/voiceJournalController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// All routes are protected
router.use(protect);

router.route('/')
  .get(getVoiceJournals)
  .post(createVoiceJournal);

router.route('/:id')
  .get(getVoiceJournal)
  .put(updateVoiceJournal)
  .delete(deleteVoiceJournal);

router.post('/:id/collaborators', addCollaborator);
router.post('/:id/comments', addComment);

module.exports = router;

