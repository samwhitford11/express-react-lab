// Import Dependencies
const express = require("express");
const cors = require("cors");
const project = require("./project.json");
const about = require("./about.json");

const app = express();
const PORT = process.env.PORT || 4111;

// MIDDLEWARE
app.use(cors());

//HOME ROUTE
app.get("/", (req, res) => {
  res.send("Hello World");
});

// PROJECT ROUTE
app.get("/project", (req, res) => {
  res.json(project);
});

// ABOUT ROUTE
app.get("/about", (req, res) => {
  res.json(about);
});






// LISTENER
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));