const express = require("express");
const router = new express.Router();
const { Field, schema, fieldSchema } = require("../models/field");

router.post("/createFormField/:type", async (req, res) => {
  const type = req.params.type;
  if (type === "TEXT") {
    try {
      schema.add({
        textField: {
          type: String,
        },
      });
      let tfield = new Field({
        field: { type, textField: req.body.textField },
      });
      await tfield.save();
      res.send(await Field.find());
    } catch (e) {
      res.send({ error: e._message });
    }
  } else if (type === "PHONE_NUMBER") {
    try {
      schema.add({
        phField: {
          type: String,
          validate(value) {
            if (
              !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)
            ) {
              throw new Error("Invalid Phone Number!!!");
            }
          },
          unique: true,
        },
      });
      let pfield = new Field({
        field: {
          type,
          phField: req.body.phField,
        },
      });
      await pfield.save();
      res.send(await Field.find());
    } catch (e) {
      res.send({ error: e._message });
    }
  } else if (type === "EMAIL_ID") {
    try {
      schema.add({
        emailField: {
          type: String,
          validate(value) {
            if (!/\S+@\S+\.\S+/.test(value)) {
              throw new Error("Invalid Email Id!!!");
            }
          },
          unique: true,
        },
      });
      let emailfield = new Field({
        field: {
          type,
          emailField: req.body.emailField,
        },
      });
      await emailfield.save();
      res.send(await Field.find());
    } catch (e) {
      res.send({ error: e._message });
    }
  } else if (type === "RADIO_BUTTON") {
    try {
      schema.add({
        rbField: {
          type: String,
        },
      });
      let rbfield = new Field({
        field: { type, rbField: req.body.rbField },
      });
      await rbfield.save();
      res.send(await Field.find());
    } catch (e) {
      res.send({ error: e._message });
    }
  } else if (type === "CHECKBOX") {
    try {
      schema.add({
        cbField: {
          type: [String],
        },
      });
      let cbfield = new Field({
        field: {
          type,
          cbField: req.body.cbField,
          unique: true,
        },
      });
      await cbfield.save();
      res.send(await Field.find());
    } catch (e) {
      res.send({ error: e._message });
    }
  } else {
    res.send({ error: "enter the valid parameter" });
  }
});

module.exports = router;
