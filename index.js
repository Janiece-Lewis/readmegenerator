// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')




// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What was your motivation?',
      name: 'motivation',
    },
    {
      type: 'input',
      message: 'Why did you build this project?',
      name: 'reason',
    },
    {
      type: 'input',
      message: 'What problem does it solve?',
      name: 'solved',
    },
    {
      type: 'input',
      message: 'What did you learn?',
      name: 'learned',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project?',
      name: 'installation',
    },
     {
      type: 'input',
      message: 'Provide instructions and examples for use. Include screenshots as needed.',
      name: 'usage',
    },
     {
      type: 'input',
      message: 'List your collaborators',
      name: 'credits',
    },
     {
      type: 'list',
      message: 'Chose your license',
      choices: ['MIT','Apache','GNU','None'],
      name: 'license'

    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created Readme!')
    );

}

// TODO: Create a function to initialize app
function init() {inquirer.prompt(questions)
.then((answers)=>{
  console.log(answers)
  const readmeContent = generateMarkdown(answers)
  console.log(readmeContent)
  writeToFile('./template/readme.md', readmeContent)

})
}

// Function call to initialize app
init();
