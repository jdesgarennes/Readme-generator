

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
 ![License-${data.licenses}](https://img.shields.io/badge/license-${data.licenses}-green?style=for-the-badge)

  # Title: ${data.Title}

  ![README GENERATOR](./${data.image}.jpg)  
  
  ## Description: ${data.Description}

  ## Usage:  ${data.Usage}

  ## Questions: ${data.Questions}

  ## Github username: ${data.Github}

  ## License type: ${data.licenses}



 ## Table Of Contents
 [Title:](#Title)
 [Description:](#Description)
 [Usage:](#Usage)
 [Questions:](#Questions)

  `;

}

module.exports = generateMarkdown;
