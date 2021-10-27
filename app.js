const express = require("express");
const app = express();
require("dotenv").config();
require("./src/db.config/db");
const fieldRouter = require("./src/routers/field");

const port = 5000 || process.env.PORT;

app.use(express.json());
app.use(fieldRouter);

app.listen(port, () => {
  console.log(`Server is listening to the port ${port}`);
});
