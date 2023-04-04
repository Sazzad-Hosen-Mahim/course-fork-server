const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");
const courses = require("./data/course.json");

app.get("/", (req, res) => {
  res.send("Course API running");
});

app.get("/course-categories", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const categoryCourse = courses.filter((c) => c.category_id === id);
  res.send(categoryCourse);
});

app.get("/course", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((course) => course._id === id);
  res.send(selectedCourse);
  console.log(req.params.id);
});

app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
