// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Title of your project?',
    name: 'Title'

  },
  {
    type: 'input',
    message: 'What is this project all about?',
    name: 'Description',
  },
  {
    type: 'input',
    message: 'Table of Contents ?',
    name: 'Table',
  },

  {
    type: 'input',
    message: 'Dependencies required to  install to run this app?',
    name: 'Installation',
  },

  {
    type: 'input',
    message: 'What is the usage information for your project?',
    name: 'Usage',
  },

  {
    type: 'list',
    message: 'What license is being used from below list?',
    name: 'License',
    choices: ['Apache', 'MIT', 'Mozilla', 'Eclipse', 'none']
  },


  {
    type: 'input',
    message: 'Who all contributed to this project?',
    name: 'Contributing',
  },

  {
    type: 'input',
    message: 'What are the test instructions for your project?',
    name: 'Tests',
  },

  {
    type: 'input',
    message: 'What is your Github username?',
    name: 'Username',
  },


  {
    type: 'input',
    message: 'What is your email address?',
    name: 'Questions',
  },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  )
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function (data) {
      writeToFile('README.md', generateMarkdown(data));
      console.log(data);


    })



}

// Function call to initialize app
init();
