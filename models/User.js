const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  name: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  emailid: { type: String, required: true, trim: true },
  role: { type: String, enum: ['Admin', 'Manager', 'User'], required: true }
});

module.exports = mongoose.model('User', userSchema);
