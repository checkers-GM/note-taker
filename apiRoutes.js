const fs = require("fs");

// Read the JSON data and retrieve the saved notes
module.exports = (app) => {
  let rawData = fs.readFileSync("db.json");
  let noteList = JSON.parse(rawData);
  console.log(noteList);
  app.get("api/notes", (req, res) => {
    return res.json(noteList);
  });
};
