const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  userId:   { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  username: { type: String, required: true },
  rating:   { type: Number, required: true, min: 1, max: 5 },
  title:    { type: String, required: true, trim: true },
  body:     { type: String, required: true, trim: true }
}, { timestamps: true });

module.exports = mongoose.model('Review', ReviewSchema);