const express = require("express");
var path = require("path");
var fs = require("fs");
var notes;

const app = express();
const PORT = 1234;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const dbJson = require("db.json");

//inlude routes

// require("./apiRoutes");
// require("./htmlRoutes");

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
    notes[i].id = 1;
  }
});
