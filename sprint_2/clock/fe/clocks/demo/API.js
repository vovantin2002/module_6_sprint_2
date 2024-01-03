// server.js

const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Sample data
const books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
];

// Routes
app.get('/api/books', (req, res) => {
    res.json(books);
});

app.get('/api/books/:id', (req, res) => {
    const book = books.find((b) => b.id === parseInt(req.params.id));
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});