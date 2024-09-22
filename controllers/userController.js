const User = require('../models/User');

// Add new user
exports.addUser = async (req, res) => {
  try {
    const { name, role, password } = req.body;
    if (!name || !role || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const newUser = new User({ name, role, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
