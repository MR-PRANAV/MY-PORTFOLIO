const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  skill: {
    type: String,
    required: true,
    trim: true
  },
  points: {
    type: [String],
    required: true,
    validate: {
      validator: function (val) {
        return val.length > 0;
      },
      message: "At least one point is required."
    }
  },
  tag: {
    type: String,
    enum: ['core', 'soft'],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);
