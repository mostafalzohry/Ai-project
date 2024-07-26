const axios = require('axios');
const rapidApiKey = '570d974e07msh31d64ec8d0e5e0dp19187djsn805ceb173e4d';

const getVideoTranscript = async (req, res) => {
  console.log('Received request for /transcribe');

  const { videoUrl } = req.query;
  console.log('Received video URL:', videoUrl);

  if (!videoUrl) {
    console.log('Error: Video URL is missing');
    return res.status(400).json({ error: 'Video URL is required' });
  }

  const videoIdMatch = videoUrl.match(/v=([^&]+)/);
  if (!videoIdMatch) {
    console.log('Error: Invalid YouTube URL');
    return res.status(400).json({ error: 'Invalid YouTube URL' });
  }
  const videoId = videoIdMatch[1];
  console.log('Extracted video ID:', videoId);

  try {
    const response = await axios.get('https://youtube-transcriptor.p.rapidapi.com/transcript', {
      params: { video_id: videoId, lang: 'en' },
      headers: {
        'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': 'youtube-transcriptor.p.rapidapi.com'
      }
    });

    if (response.data) {
      console.log('Transcript fetched successfully');
      return res.json(response.data);
    } else {
      console.log('Error: No transcript available');
      return res.status(500).json({ error: 'No transcript available' });
    }
  } catch (error) {
    console.error('Error fetching video transcript:', {
      message: error.message,
      status: error.response ? error.response.status : 'N/A',
      data: error.response ? error.response.data : 'N/A',
      headers: error.response ? error.response.headers : 'N/A'
    });
    return res.status(500).json({ error: 'Failed to fetch video transcript' });
  }
};

module.exports = { getVideoTranscript };
