const express = require("express");
const app = express();
require("dotenv").config();
require("./src/db.config/db");
const Field = require("./src/models/field");

const port = 5000 || process.env.PORT;

app.use(express.json());

app.get("/", async (req, res) => {
  const field = new Field({
    name: "Subash",
  });
  try {
    await field.save();
    res.send(await Field.find());
  } catch (e) {
    res.send(e);
  }
  res.send();
});

app.listen(port, () => {
  console.log(`Server is listening to the port ${port}`);
});
