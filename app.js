const express = require("express");

const PORT = 1234;
const app = express();
const dbJson = require("db.json");

//inlude routes

require("./apiRoutes");
require("./htmlRoutes");

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
