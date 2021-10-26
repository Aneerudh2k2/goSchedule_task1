const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const Field = mongoose.model("Field", schema);

module.exports = Field;
