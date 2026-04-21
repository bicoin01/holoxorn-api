// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sample endpoint to read from database.json
app.get('/api/data', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync('database.json', 'utf8'));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read database' });
  }
});

app.post('/api/ai', (req, res) => {
  // Your Holoxnr AI logic here
  res.json({ message: "AI endpoint working", input: req.body });
});

app.listen(PORT, () => {
  console.log(`Holoxorn API running on port ${PORT}`);
});
