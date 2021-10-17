const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');


// building template here for README.MD file


const genReadme = ({ Title, Description, Usage, Questions, Github }) =>
  `
  # Title: ${Title}

  ## Description: ${Description}

  ## Usage:  ${Usage}

  ## Questions: ${Questions}

  ## Github username: ${Github}
  `;


// begining of the Inquirer menu system.

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the Title of your README?: ',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Please type the description of this project. ',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'How give a step by step usage summary. ',
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
    const readmeContent = genReadme(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });