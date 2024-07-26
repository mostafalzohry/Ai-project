const axios = require('axios');
const rapidApiKey = '570d974e07msh31d64ec8d0e5e0dp19187djsn805ceb173e4d';

const generateVoiceFromText = async (req, res) => {
  const { text, voice = 'alloy' } = req.body;

  console.log('Received request for /generate-voice');
  console.log('Text:', text);
  console.log('Voice:', voice);

  if (!text) {
    console.log('Error: Text is missing');
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const response = await axios.post('https://open-ai-text-to-speech1.p.rapidapi.com', {
      model: 'tts-1',
      input: text,
      voice: voice
    }, {
      headers: {
        'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': 'open-ai-text-to-speech1.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      responseType: 'arraybuffer'
    });

    console.log('Voice generated successfully');
    res.set('Content-Type', 'audio/mpeg');
    res.send(response.data);
  } catch (error) {
    console.error('Error generating voice:', {
      message: error.message,
      status: error.response ? error.response.status : 'N/A',
      data: error.response ? error.response.data : 'N/A',
      headers: error.response ? error.response.headers : 'N/A'
    });
    res.status(error.response ? error.response.status : 500).json({
      error: 'Failed to generate voice from text',
      details: error.response ? {
        status: error.response.status,
        message: error.response.data,
        headers: error.response.headers
      } : { message: error.message }
    });
  }
};

module.exports = { generateVoiceFromText };
