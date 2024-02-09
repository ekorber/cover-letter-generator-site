const express = require('express')
const path = require('path')
const app = express()
const port = 5000

app.use(express.json())

// Dummy user data
const templateList = [
  {
    id: '5a6f4a0f-e6c2-4cc1-a9ac-7a8323afcd48',
    tname: 'Teaching Jobs',
    variables: [
      {
        id: '228d5e1d-d0fb-402e-aa2d-6bba83d67f62',
        varName: 'First Name',
        varValue: 'Anita'
      },
      {
        id: 'c28ab8c4-cec0-47d4-a38c-341fbfad91ff',
        varName: 'Last Name',
        varValue: 'Gill'
      },
      {
        id: '9bad7887-968c-4c7d-aa9b-aaf7e48ddeca',
        varName: 'Email',
        varValue: ''
      },
      {
        id: 'a25791a4-65c2-4478-a4e4-0510f4f6c300',
        varName: 'Phone Number',
        varValue: ''
      },
      {
        id: '32e179d2-1f00-4256-a190-6c40524e641f',
        varName: 'Website',
        varValue: ''
      }
    ],
    body: '[First Name] [Last Name]\n' +
      '[Phone Number]\n' +
      '[Email]\n' +
      '[Website]\n' +
      '\n' +
      '[Current Date]\n' +
      '  \n' +
      'To whom it may concern,\n' +
      '  \n' +
      'I am pleased to be applying for the [Position] position at [Company]. My experience with ... seems to nicely match what you’re looking for from an applicant. Additionally, I have experience using ... and am very well familiar with ...\n' +
      '  \n' +
      'Thank you for taking the time to review my application. I’d love to have an opportunity to chat about the work being done at [Company] and about the people taking part in it. Feel free to reach out to me if you have any questions or would like to get in touch.\n' +
      '    \n' +
      'Best Regards,\n' +
      '[First Name] [Last Name]'
  },
  {
    id: '7a6f4a0f-e6c2-4cc1-a9ac-7a8323afcd48',
    tname: 'Web Development',
    variables: [
      {
        id: '228d5e1d-d0fb-402e-aa2d-6bba83d67f62',
        varName: 'First Name',
        varValue: 'Eric'
      },
      {
        id: 'c28ab8c4-cec0-47d4-a38c-341fbfad91ff',
        varName: 'Last Name',
        varValue: 'Korber'
      },
      {
        id: '9bad7887-968c-4c7d-aa9b-aaf7e48ddeca',
        varName: 'Email',
        varValue: 'erickorber1994@gmail.com'
      },
      {
        id: 'a25791a4-65c2-4478-a4e4-0510f4f6c300',
        varName: 'Phone Number',
        varValue: ''
      },
      {
        id: '32e179d2-1f00-4256-a190-6c40524e641f',
        varName: 'Website',
        varValue: ''
      }
    ],
    body: '[First Name] [Last Name]\n' +
      '[Phone Number]\n' +
      '[Email]\n' +
      '[Website]\n' +
      '\n' +
      '[Current Date]\n' +
      '  \n' +
      'To whom it may concern,\n' +
      '  \n' +
      'I am pleased to be applying for the [Position] position at [Company]. My experience with ... seems to nicely match what you’re looking for from an applicant. Additionally, I have experience using ... and am very well familiar with ...\n' +
      '  \n' +
      'Thank you for taking the time to review my application. I’d love to have an opportunity to chat about the work being done at [Company] and about the people taking part in it. Feel free to reach out to me if you have any questions or would like to get in touch.\n' +
      '    \n' +
      'Best Regards,\n' +
      '[First Name] [Last Name]'
  },
  {
    id: '9g6f4a0f-e6c2-4cc1-a9ac-7a8323afcd48',
    tname: 'Game Dev',
    variables: [
      {
        id: '228d5e1d-d0fb-402e-aa2d-6bba83d67f62',
        varName: 'First Name',
        varValue: 'Eric'
      },
      {
        id: 'c28ab8c4-cec0-47d4-a38c-341fbfad91ff',
        varName: 'Last Name',
        varValue: 'Korber'
      },
      {
        id: '9bad7887-968c-4c7d-aa9b-aaf7e48ddeca',
        varName: 'Email',
        varValue: ''
      },
      {
        id: 'a25791a4-65c2-4478-a4e4-0510f4f6c300',
        varName: 'Phone Number',
        varValue: ''
      },
      {
        id: '32e179d2-1f00-4256-a190-6c40524e641f',
        varName: 'Website',
        varValue: ''
      }
    ],
    body: '[First Name] [Last Name]\n' +
      '[Phone Number]\n' +
      '[Email]\n' +
      '[Website]\n' +
      '\n' +
      '[Current Date]\n' +
      '  \n' +
      'To whom it may concern,\n' +
      '  \n' +
      'I am pleased to be applying for the [Position] position at [Company]. My experience with ... seems to nicely match what you’re looking for from an applicant. Additionally, I have experience using ... and am very well familiar with ...\n' +
      '  \n' +
      'Thank you for taking the time to review my application. I’d love to have an opportunity to chat about the work being done at [Company] and about the people taking part in it. Feel free to reach out to me if you have any questions or would like to get in touch.\n' +
      '    \n' +
      'Best Regards,\n' +
      '[First Name] [Last Name]'
  },
  {
    id: '2k6f4a0f-e6c2-4cc1-a9ac-7a8323afcd48',
    tname: 'Teaching Jobs',
    variables: [
      {
        id: '228d5e1d-d0fb-402e-aa2d-6bba83d67f62',
        varName: 'First Name',
        varValue: 'Alex'
      },
      {
        id: 'c28ab8c4-cec0-47d4-a38c-341fbfad91ff',
        varName: 'Last Name',
        varValue: 'Kuzmin'
      },
      {
        id: '9bad7887-968c-4c7d-aa9b-aaf7e48ddeca',
        varName: 'Email',
        varValue: ''
      },
      {
        id: 'a25791a4-65c2-4478-a4e4-0510f4f6c300',
        varName: 'Phone Number',
        varValue: ''
      },
      {
        id: '32e179d2-1f00-4256-a190-6c40524e641f',
        varName: 'Website',
        varValue: ''
      }
    ],
    body: '[First Name] [Last Name]\n' +
      '[Phone Number]\n' +
      '[Email]\n' +
      '[Website]\n' +
      '\n' +
      '[Current Date]\n' +
      '  \n' +
      'To whom it may concern,\n' +
      '  \n' +
      'I am pleased to be applying for the [Position] position at [Company]. My experience with ... seems to nicely match what you’re looking for from an applicant. Additionally, I have experience using ... and am very well familiar with ...\n' +
      '  \n' +
      'Thank you for taking the time to review my application. I’d love to have an opportunity to chat about the work being done at [Company] and about the people taking part in it. Feel free to reach out to me if you have any questions or would like to get in touch.\n' +
      '    \n' +
      'Best Regards,\n' +
      '[First Name] [Last Name]'
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

app.post('/users/update-settings', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

app.post('/users/submit-template', (req, res) => {
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

app.post('/users/delete-template', (req, res) => {
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