const express = require('express')
const app = express()
const port = 5000

// Dummy user data
const templateList = [
  {
    id: 1,
    name: "Teaching Jobs",
  },
  {
    id: 2,
    name: "Web Dev",
  },
  {
    id: 3,
    name: "Game Development",
  },
  {
    id: 4,
    name: "Data Scientist Positions at Fortune 500 Companies",
  },
];

const documentGenerationHistory = [
  {
    id: 1,
    company: "Ubisoft",
    position: "Technical Artist",
    dateCreated: "February 2, 2024",
  },
  {
    id: 2,
    company: "Rockstar North",
    position: "Intermediate Gameplay Programmer",
    dateCreated: "January 28, 2024",
  },
  {
    id: 3,
    company: "MetalMana Games Ltd.",
    position: "Co-founder",
    dateCreated: "January 27, 2024",
  },
  {
    id: 4,
    company: "Lvl Up Studios",
    position: "Technical Artist",
    dateCreated: "January 27, 2024",
  },
];

// Route to return a user's template information
app.post('/users/templates', (req, res) => {
  res.json(templateList);
});

// Route to return a user's historical document generation information
app.post('/users/generated-docs-history', (req, res) => {
  res.json(documentGenerationHistory);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})