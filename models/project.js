const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  languages: [
    {
      type: String,
      trim: true
    }
  ],
  tag: {
    type: String,
    enum: ["Grand", "Mini"],
    required: true
  },
  githubLink: {
    type: String,
    required: true,
    trim: true
  },
  runLink: {
    type: String,
    required: false, // Optional field
    default: "",
    trim: true
  }
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
