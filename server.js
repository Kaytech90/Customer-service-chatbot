const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Optional: Enable CORS if your API calls need it.
// Adjust origin as necessary. Here we allow all origins for development.
app.use(cors());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// If you have a dedicated HTML file for your chatbot, e.g., index.html,
// place it in a folder called "public" within your project folder.
// Then, for the root route, serve that file:
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server on port 8000
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
