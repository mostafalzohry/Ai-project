const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api'); 

const app = express();
const PORT = process.env.PORT || 5500;

// Middleware
app.use(bodyParser.json());

// CORS configuration
app.use(cors({ origin: '*' }));

// Routes
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
