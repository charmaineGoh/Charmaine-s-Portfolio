const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes for each page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'portfolio.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/portfolio/vr', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'vr.html'));
});

app.get('/portfolio/pizzaweb', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pizzaweb.html'));
});
app.get('/portfolio/ar', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ar.html'));
});
app.get('/portfolio/sticker', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sticker.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
