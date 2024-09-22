const express = require('express');
const { addBook, updateBook } = require('../controllers/bookController');
const router = express.Router();

// Add a new book
router.post('/add', addBook);

// Update a book
router.put('/update/:id', updateBook);

module.exports = router;
