const express = require("express");
var path = require("path");
var fs = require("fs");
var notes;
const app = express();
const PORT = 1234;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const dbjson = require("./db.json");

//inlude routes

// get to post notes that are in database
app.get("/api/notes", function (req, res) {
  console.log("returning notes object");
  return res.json(notes);
});

// post to add new notes
app.post("/api/notes", function (req, res) {
  var addNote = req.body;
  console.log(addNote);
  notes.push(newNote);
  res.json(newNote);
  for (i = 0; i < notes.length; i++) {
    notes[i].id = i;
  }
  $;
});

// delete route to delete
app.delete("/api/notes/:id", function (req, res) {
  console.log(req.params.id);
  var deleteNoteID = req.params.id;
  notes.splice(deleteNoteID, 1);
  for (i = 0, i < notes.length; i++; ) {
    notes[i].id = i;
    fs.writeFileSync("db.json", JSON.stringify(notes), function (err) {
      //if (err) throw err;
    });
    res.json({ status: "success" });
  }
});

app.use(express.static(__filename + "notes.html"));

// Serve the data to the web page
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
