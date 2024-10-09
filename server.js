const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like HTML, CSS)
app.use(express.static('public'));

// Render HTML form on the homepage
app.get('/', (req, res) => {
    res.render('index');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.render('result', { name, email });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
