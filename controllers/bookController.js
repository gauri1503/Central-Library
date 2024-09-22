const Book = require('../models/Book');

// Add a new book
exports.addBook = async (req, res) => {
  try {
    const { title, author, serialNumber } = req.body;
    if (!title || !author || !serialNumber) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const newBook = new Book({ title, author, serialNumber });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update existing book details
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, serialNumber } = req.body;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    book.title = title;
    book.author = author;
    book.serialNumber = serialNumber;
    await book.save();
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
