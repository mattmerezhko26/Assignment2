/********************************************************************************
*  WEB322 – Assignment 02
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Matvii Merezhko Student ID: 127759230 Date: 2024/10/05
*
********************************************************************************/

const express = require("express");
const projectData = require("./modules/projects");

const app = express();

projectData.initialize().then(() => {
  app.listen(8000, () => {
    console.log("Server is running on port 8000");
  });
}).catch(err => {
  console.error("Failed to initialize project data", err);
});

app.get("/", (req, res) => {
  res.send("Assignment 2: Student Name: Matvii Merezhko - Student ID: 127769230");
});

app.get("/solutions/projects", (req, res) => {
  projectData.getAllProjects()
    .then(projects => res.json(projects))
    .catch(err => res.status(500).send(err));
});

app.get("/solutions/projects/id-demo", (req, res) => {
  projectData.getProjectById(9)
    .then(project => res.json(project))
    .catch(err => res.status(404).send(err));
});

app.get("/solutions/projects/sector-demo", (req, res) => {
  projectData.getProjectsBySector("agriculture")
    .then(projects => res.json(projects))
    .catch(err => res.status(404).send(err));
});
