const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');


//  This starts the begining of the inquirer Questions
inquirer
  .prompt([

    {   
        type: 'list',
        name: 'licenses',
        message: 'What type of license should we include',
        choices: ['MIT','GPL','APACHE' ],

    },
    {
      type: 'input',
      name: 'Title',
      message: 'What is the Title of your README?: ',
    },
    {
        type: 'input',
        name: 'image',
        message: 'What is the name of your screenshot? just the name not the extention and must be a .jpg file: ',
      },
    {
      type: 'input',
      name: 'Description',
      message: 'Please type the description of this project. ',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Give a how to step by step usage summary. ',
    },
    {
      type: 'input',
      name: 'Questions',
      message: 'Give email address for questions in regards to project. ',
    },
    {
      type: 'input',
      name: 'Github',
      message: 'Enter your GitHub Username',
    },
    
  ])
  .then((answers) => {
   // gathers the data from user and generates the README.md file
     const readmeContent = generateMarkdown(answers);

     fs.writeFile('README.md', readmeContent, (err) =>
       err ? console.log(err) : console.log('Successfully created README.md!')
     );
  });