const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

router.post('/question', questionController.addQuestion);
router.delete('/question/:id', questionController.deleteQuestion);

module.exports = router;
