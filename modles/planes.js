const mongoose = require("mongoose");

// Создаем схему
const planeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  prices: {
    type: [Number],
    required: true,
  },
  groupMembers: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  typeExcursion: {
    type: [String],
    required: true,
  }
});

module.exports = mongoose.model("Tours", planeSchema);
