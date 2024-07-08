const mongoose = require("mongoose");

const planeSchema = mongoose.Schema({
  name: {
    type: { String },
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
    type: { String },
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
    type: { String },
    required: true,
  },
}, { collection: 'tours' });

const Tours = mongoose.model("Tours", planeSchema);
module.exports.Tours = Tours;

const secondSchema = mongoose.Schema({
  name: {
    type: { String },
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },
  date: {
    type: String,
    required: true
  }
}, { collection: 'blog' });

const Blog = mongoose.model("Blog", secondSchema);
module.exports.Blog = Blog;
