// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/onefile-crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected 🟢"))
.catch((err) => console.error("DB connection error:", err));

// Schema & Model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  about: { type: String, required: true }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// ✅ Routes

// Create user
app.post('/users', async (req, res) => {
  try {
    const { name, age, about } = req.body;
    if (!name || !age || !about) return res.status(400).json({ message: "All fields required" });
    const user = await User.create({ name, age, about });
    res.status(201).json({ message: "User created", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json({ message: "Users fetched", users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update user
app.put('/users/:id', async (req, res) => {
  try {
    const { name, age, about } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { name, age, about }, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User updated", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete user
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
