const express = require('express');
const { getArticleSummary } = require('../controllers/articleController');
const { getVideoTranscript } = require('../controllers/youtubetranscriptor');
const { generateVoiceFromText } = require('../controllers/generateVoiceFromText');

const router = express.Router();

router.post('/summarize', getArticleSummary);
router.get('/transcribe', getVideoTranscript); 
router.post('/generatevoice', generateVoiceFromText); 

module.exports = router;
