const express = require('express')
const path = require('path')
const app = express()
const port = 5000

app.use(express.json())

const templateList = [];
const documentGenerationHistory = [];
const userData = {
  defaultSettings: {
    fname: '',
    lname: '',
    email: '',
    phoneNumber: '',
    website: '',
  },
}

// Route to return a user's cover letter history
app.post('/api/user/history/cover-letters', (req, res) => {
  res.json(documentGenerationHistory);
});

// Route to submit a new cover letter to a user's history
app.post('/api/user/history/cover-letters/submit', (req, res) => {
  documentGenerationHistory.push(req.body)
  res.sendStatus(200)
});

// Route to delete a cover letter from a user's history
app.post('/api/user/history/cover-letters/delete', (req, res) => {
  const id = req.body.id

  documentGenerationHistory.forEach((element, i) => {
    if (element.id === id) {
      documentGenerationHistory.splice(i, 1)
    }
  });

  res.sendStatus(200);
});

// Route to return a user's account data
app.post('/api/user/profile', (req, res) => {
  res.json(userData)
})

// Route to submit changes to a user's account
app.post('/api/user/profile/update', (req, res) => {
  userData.defaultSettings = req.body
  res.json(userData)
})

// Route to return a user's template list
app.post('/api/user/templates', (req, res) => {
  res.json(templateList);
});

// Route to submit a user's new or edited template
app.post('/api/user/templates/submit', (req, res) => {
  const submittedTemplate = req.body.template

  if (req.body.new) {
    templateList.push(submittedTemplate)
  } else {
    templateList.forEach((element, i) => {
      if (element.id === submittedTemplate.id) {
        templateList[i] = submittedTemplate
      }
    });
  }

  res.sendStatus(200)
})

// Route to delete a user's template
app.post('/api/user/templates/delete', (req, res) => {
  const id = req.body.id

  templateList.forEach((element, i) => {
    if (element.id === id) {
      templateList.splice(i, 1)
    }
  });
  
  res.sendStatus(200)
})

// Handle React routing, return all requests to React app
// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})