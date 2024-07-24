// const express = require('express');
// const { getArticleSummary } = require('../controllers/articleController');
// const { getVideoTranscript } = require('../controllers/youtubetranscriptor');

// const router = express.Router();

// router.post('/summarize', getArticleSummary);
// router.post('/transcribe', getVideoTranscript);

// module.exports = router;

const express = require('express');
const { getArticleSummary } = require('../controllers/articleController');
const { getVideoTranscript } = require('../controllers/youtubetranscriptor');

const router = express.Router();

router.post('/summarize', getArticleSummary);
router.get('/transcribe', getVideoTranscript); 

module.exports = router;
