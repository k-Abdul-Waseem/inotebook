const mongoose = require("mongoose");

const NoteSchema = new Schema({
  name: {
    type: string,
    required: true,
  },
  description: {
    type: string,
    required: true,
  },
  tag: {
    type: string,
    default: "General",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("notes", NoteSchema);
