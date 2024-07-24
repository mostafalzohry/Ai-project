const axios = require('axios');
const rapidApiKey = 'dfb75d1cffmshc7679171684f9a8p1f08cbjsna8cdc1039a2e';
const mediumApiKey = 'sk-proj-P5xJbmYvRRBlnHBGC0GZT3BlbkFJpJw1EvxdOcMDV6ncN0i5'; 

const getArticleSummary = async (req, res) => {
  const { articleUrl } = req.body;

  console.log('Received request for /summarize');
  console.log('Article URL:', articleUrl);

  if (!articleUrl) {
    console.log('Error: Article URL is missing');
    return res.status(400).json({ error: 'Article URL is required' });
  }

  try {
    const response = await axios.get('https://article-extractor-and-summarizer.p.rapidapi.com/summarize', {
      params: { url: articleUrl, length: '3' },
      headers: {
        'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com',
        'Authorization': `Bearer ${mediumApiKey}`
      }
    });

    const summary = response.data.summary;
    console.log('Summary fetched successfully:', summary);
    res.json({ summary });
  } catch (error) {
    console.error('Error fetching article summary:', {
      message: error.message,
      status: error.response ? error.response.status : 'N/A',
      data: error.response ? error.response.data : 'N/A',
      headers: error.response ? error.response.headers : 'N/A'
    });
    res.status(500).json({ error: 'Failed to fetch article summary' });
  }
};

module.exports = { getArticleSummary };
