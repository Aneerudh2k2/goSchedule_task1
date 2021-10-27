const mongoose = require("mongoose");

let schema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["TEXT", "PHONE_NUMBER", "EMAIL_ID", "RADIO_BUTTON", "CHECKBOX"],
  },
});

let fieldSchema = new mongoose.Schema({
  field: schema,
});

let Field = mongoose.model("Field", fieldSchema);

module.exports = { Field, schema, fieldSchema };
