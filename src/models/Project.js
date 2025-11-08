const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnailUrl: {
      type: String,
      required: true,
      trim: true,
    },
    links: {
      type: [String],
      default: [],
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    tools: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Project', projectSchema);

